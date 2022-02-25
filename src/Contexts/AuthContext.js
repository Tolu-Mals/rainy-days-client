import React, { createContext, useReducer, useEffect, useContext } from "react";
import { AuthReducer } from "../Reducers/AuthReducer";
import axios from "axios";
import { tokenConfig } from "../Helper/tokenConfig";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isLoading: false,
    user: null,
  };

  const [auth_state, auth_dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    auth_dispatch({ type: "USER_LOADING" });
    axios
      .get("https://rainy-days-savers.herokuapp.com/api/auth/user", tokenConfig(auth_state))
      .then((res) => auth_dispatch({ type: "USER_LOADED", payload: res.data }))
      .catch(err => {
        console.log(err.message)
      })
  }, []);



  return (
    <AuthContext.Provider value={{ auth_state, auth_dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
