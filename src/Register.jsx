
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister(event) {
    event.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("pawcareUsers") || "[]"
    );

    const existingUser = users.find(
      (user) => user.email === email.trim().toLowerCase()
    );

    if (existingUser) {
      setError("This email is already registered. Please log in.");
      return;
    }

    const newUser = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      password: password,
    };

    users.push(newUser);

    localStorage.setItem("pawcareUsers", JSON.stringify(users));

    window.alert("Registration successful! Please log in.");

    navigate("/login");
  }

  return (
    <div className="auth-page">
      <Link to="/" className="auth-logo">
        🐾 PawCare
      </Link>

      <div className="auth-card">
        <div className="auth-icon">♡</div>

        <h1>Join PawCare!</h1>

        <p className="auth-subtitle">
          Create an account and help make a difference
          in the lives of dogs in need.
        </p>

        <form onSubmit={handleRegister}>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            autoComplete="name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />

          <label htmlFor="registerEmail">Email Address</label>
          <input
            id="registerEmail"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="registerPassword">Password</label>
          <input
            id="registerPassword"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            minLength={8}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            autoComplete="new-password"
            minLength={8}
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            required
          />

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" className="auth-submit">
            Create Account <span>→</span>
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default Register;
