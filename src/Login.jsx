


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    setError("");

    const normalizedEmail = email.trim().toLowerCase();

    // Demo Admin account
    const demoAdmin = {
      fullName: "PawCare Admin",
      email: "admin@pawcare.com",
      password: "Admin123!",
    };

    if (
      normalizedEmail === demoAdmin.email &&
      password === demoAdmin.password
    ) {
      localStorage.setItem(
        "pawcareCurrentUser",
        JSON.stringify({
          fullName: demoAdmin.fullName,
          email: demoAdmin.email,
          role: "admin",
        })
      );

      navigate("/admin-dashboard");
      return;
    }

    // Find a registered demo user
    const users = JSON.parse(
      localStorage.getItem("pawcareUsers") || "[]"
    );

    const matchedUser = users.find(
      (user) =>
        user.email === normalizedEmail &&
        user.password === password
    );

    if (!matchedUser) {
      setError("Invalid email or password. Please try again.");
      return;
    }

    // Save current demo user
    localStorage.setItem(
      "pawcareCurrentUser",
      JSON.stringify({
        fullName: matchedUser.fullName,
        email: matchedUser.email,
        role: "user",
      })
    );

    navigate("/user-dashboard");
  }

  return (
    <div className="auth-page">
      <Link to="/" className="auth-logo">
        🐾 PawCare
      </Link>

      <div className="auth-card">
        <div className="auth-icon">♡</div>

        <h1>Welcome Back!</h1>

        <p className="auth-subtitle">
          Sign in to continue your PawCare journey.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit">
            Log In <span>→</span>
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <Link to="/register">Create one</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
