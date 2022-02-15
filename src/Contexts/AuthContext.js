import React, { createContext, useReducer, useEffect, useContext } from "react";
import { AuthReducer } from "../Reducers/AuthReducer";
import axios from "axios";
import { ErrorContext } from "./ErrorContext";
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

  const { err_dispatch } = useContext(ErrorContext);


  useEffect(() => {
    auth_dispatch({ type: "USER_LOADING" });
    axios
      .get("https://rainy-days-savers.herokuapp.com/api/auth/user", tokenConfig(auth_state))
      .then((res) => auth_dispatch({ type: "USER_LOADED", payload: res.data }))
      .catch(err => {
          // err_dispatch({ type: 'GET_ERRORS', payload: {
          //     msg: err.response.data.msg,
          //     status: err.response.status
          // }})
          // auth_dispatch({ type: 'AUTH_ERROR' })
      })

    // axios.get("https://api.paystack.co/bank", {
    //   headers: {
    //     Authorization: 'Bearer sk_test_0bca28ad7ed05560a59153669857742b4f06699f'
    //   }
    // }).then((result) => console.log(result.data))
    // .catch(err => console.log(err))
  }, []);



  return (
    <AuthContext.Provider value={{ auth_state, auth_dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
