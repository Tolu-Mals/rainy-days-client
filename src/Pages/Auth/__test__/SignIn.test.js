import { screen, render } from "@testing-library/react";
import SignIn from "../SignIn";
import { AuthContext } from "../../../Contexts/AuthContext";
import { ErrorContext } from "../../../Contexts/ErrorContext";
import { BrowserRouter } from "react-router-dom";

const authValue = {
  auth_state: {
    isAuthenticated: false,
  },
  auth_dispatch: () => "",
};

const errorValue = {
  err_state: {
    msg: "",
  },
  err_dispatch: () => "",
};

const MockSignIn = () => {
  return (
    <BrowserRouter>
      <ErrorContext.Provider value={errorValue}>
        <AuthContext.Provider value={authValue}>
          <SignIn />
        </AuthContext.Provider>
      </ErrorContext.Provider>
    </BrowserRouter>
  );
};

describe("SignIn", () => {
  test("should render sign in button", () => {
    render(<MockSignIn />);

    const signInButton = screen.getByRole("button", { name: /sign in/i });

    expect(signInButton).toBeInTheDocument();
  });
});
