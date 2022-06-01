import React, { useState, useEffect, useReducer } from 'react';
import { useContext } from 'react';
import Constants from '../utils/Constants';

const initialState = {
  user: null,
};

function reducer(state, action) {
  switch (action.type) {
    case Constants.SIGN_IN:
      return { ...state, user: action.payload };

    case Constants.SIGN_OUT:
      return { ...state, user: null };

    default:
      return state;
  }
}

const UserContext = React.createContext(initialState);

const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserState() {
  return useContext(UserContext);
}

export default UserContextProvider;
