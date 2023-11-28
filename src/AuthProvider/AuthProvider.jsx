// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  const setUnauthorized = () => {
    setIsUnauthorized(true);
  };

  const clearUnauthorized = () => {
    setIsUnauthorized(false);
  };

  return (
    <AuthContext.Provider
      value={{ isUnauthorized, setUnauthorized, clearUnauthorized }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
