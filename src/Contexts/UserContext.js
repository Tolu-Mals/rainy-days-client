import React, { createContext, useReducer, useEffect, useContext } from "react";
import { UserReducer } from '../Reducers/UserReducer';
import axios from "axios";
import { tokenConfig } from "../Helper/tokenConfig";
import { AuthContext } from "./AuthContext";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = {
    first_name: '',
    last_name: '',
    phone_number: '',
    customer_code: '',
  }

  const [user_state, user_dispatch] = useReducer(UserReducer, initialState);
  const { auth_state } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://rainy-days-savers.herokuapp.com/api/auth/customer/${auth_state.user.email}`, tokenConfig(auth_state))
    .then((response) => {
      user_dispatch({ type: "USER_LOADED", payload: response.data});
    })
    .catch((error) => {
      console.log(error);
    })
    
  }, [])

  return (
    <UserContext.Provider value={{ user_state, user_dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
