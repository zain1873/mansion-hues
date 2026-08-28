import React, { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // null = logged out, { name, email } = logged in
  const [user, setUser] = useState(null);

  // Controls whether the login/signup modal is visible
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Fake login — no real API yet, just save dummy user data.
  // Later this will call the Django login API instead.
  const login = (email, password) => {
    setUser({ name: email.split("@")[0], email });
    setIsAuthModalOpen(false);
  };

  // Fake signup — same idea, just saves what the user typed.
  const signup = (name, email, password) => {
    setUser({ name, email });
    setIsAuthModalOpen(false);
  };

  // Logs the user out.
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;