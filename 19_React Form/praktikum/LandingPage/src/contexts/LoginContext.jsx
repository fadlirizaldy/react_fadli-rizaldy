import React, { useContext, useEffect, useReducer } from "react";

const LoginContext = React.createContext();

function loginReducer(state, action) {
  switch (action.type) {
    case "setIsLogin": {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
  }
}

export function LoginProvider({ children }) {
  const [state, dispatch] = useReducer(loginReducer, { isLogin: false });

  const value = { state, dispatch };
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
}

export function useLogin() {
  const context = useContext(LoginContext);

  if (context === undefined) {
    throw new Error("Error login");
  }
  return context;
}
