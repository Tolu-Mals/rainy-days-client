import React, { createContext, useReducer } from "react";
import { UserReducer } from '../Reducers/UserReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const initialState = {
    first_name: '',
    last_name: '',
    phone_number: '',
    customer_code: '',
  }

  const [user_state, user_dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ user_state, user_dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
