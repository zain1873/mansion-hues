import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "./AuthModal.css";

function AuthModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login, signup } =
    useContext(AuthContext);

  // "login" or "signup" — which view is currently showing
  const [mode, setMode] = useState("login");

  // Login form fields
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  // Sign up form fields
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const closeModal = () => {
    setIsAuthModalOpen(false);
    setError("");
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setError("");
  };

  const handleLoginChange = (e) =>
    setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSignupChange = (e) =>
    setSignupData({ ...signupData, [e.target.name]: e.target.value });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login(loginData.email, loginData.password);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    signup(signupData.name, signupData.email, signupData.password);
  };

  // Don't render anything if the modal is closed
  if (!isAuthModalOpen) return null;

  return (
    <>
      {/* Overlay — clicking it closes the modal */}
      <div className="auth-modal-overlay" onClick={closeModal} />

      <div className="auth-modal" role="dialog" aria-modal="true">
        <button
          className="auth-modal-close"
          aria-label="Close"
          onClick={closeModal}
        >
          ✕
        </button>

        {mode === "login" ? (
          // ---------- LOGIN VIEW ----------
          <>
            <h2 className="auth-modal-title">Login</h2>

            <form className="auth-modal-form" onSubmit={handleLoginSubmit}>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  required
                />
              </label>

              {error && <p className="auth-modal-error">{error}</p>}

              <button className="auth-modal-submit-btn" type="submit">
                LOGIN
              </button>
            </form>

            <p className="auth-modal-switch-text">
              Don't have an account?{" "}
              <button
                className="auth-modal-switch-link"
                onClick={() => switchMode("signup")}
              >
                Sign up
              </button>
            </p>
          </>
        ) : (
          // ---------- SIGN UP VIEW ----------
          <>
            <h2 className="auth-modal-title">Sign Up</h2>

            <form className="auth-modal-form" onSubmit={handleSignupSubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  required
                />
              </label>
              <label>
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  required
                />
              </label>

              {error && <p className="auth-modal-error">{error}</p>}

              <button className="auth-modal-submit-btn" type="submit">
                SIGN UP
              </button>
            </form>

            <p className="auth-modal-switch-text">
              Already have an account?{" "}
              <button
                className="auth-modal-switch-link"
                onClick={() => switchMode("login")}
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default AuthModal;