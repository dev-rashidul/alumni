import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Create Auth API
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
