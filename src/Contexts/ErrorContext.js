import React, { createContext, useReducer } from "react";
import { ErrorReducer } from '../Reducers/ErrorReducer';

export const ErrorContext = createContext();

const ErrorContextProvider = (props) => {
  const initialState = {
    msg: '',
    status: null,
    id: null
  }

  const [err_state, err_dispatch] = useReducer(ErrorReducer, initialState);

  return (
    <ErrorContext.Provider value={{ err_state, err_dispatch }}>
      {props.children}
    </ErrorContext.Provider>
  );
};

export default ErrorContextProvider;
