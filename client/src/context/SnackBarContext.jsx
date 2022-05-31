import React, { useState, useEffect, useReducer, useContext } from 'react';
import Constants from '../utils/Constants';

const SnackBarContext = React.createContext({
  show: false,
  message: '',
});

const initialState = {
  show: false,
  message: '',
};



const reducer = (state, action) => {
  switch (action.type) {
    case Constants.SHOW_SNACKBAR:
      return { ...state, show: true, message: action.payload };

    case Constants.CLOSE_SNACKBAR:
      return { ...state, show: false, message: '' };

    default:
      return state;
  }
};



const SnackBarProvider = ({ children }) => {
  return (
    <SnackBarContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </SnackBarContext.Provider>
  );
};

export const useSnackBarState = () => {
  return useContext(SnackBarContext);
};

export default SnackBarProvider;
