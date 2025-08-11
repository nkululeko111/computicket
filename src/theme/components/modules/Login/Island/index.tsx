import { useState } from "react";
import styles from "../Island.module.css";

// Use your actual login icon svg or png URL here or import the icon asset
const loginIconURL =
  "https://cdn-icons-png.flaticon.com/512/565/565547.png";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // 'login' or 'register'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const toggleMode = (newMode) => {
    setMode(newMode);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (mode === "register" && password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords must match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (mode === "login") {
      alert(`Logging in with ${email}`);
      console.log("Login:", { email, password });
    } else {
      alert(`Registering with ${email}`);
      console.log("Register:", { email, password, confirmPassword });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Sign In</h1>
          <p>Sign in to your account to access your orders, saved items, and profile.</p>
        </div>
        <img
          src={loginIconURL}
          alt="Login Icon"
          className={styles.heroIcon}
        />
      </section>

      {/* Auth Modal overlaps hero and need help */}
      <section className={styles.authModal}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${
              mode === "login" ? styles.tabActive : ""
            }`}
            onClick={() => toggleMode("login")}
          >
            Sign In
          </div>
          <div
            className={`${styles.tab} ${
              mode === "register" ? styles.tabActive : ""
            }`}
            onClick={() => toggleMode("register")}
          >
            Create Account
          </div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}

          {mode === "register" && (
            <>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <div className={styles.error}>{errors.confirmPassword}</div>
              )}
            </>
          )}

          <button type="submit">{mode === "login" ? "Sign In" : "Create Account"}</button>

          {mode === "login" && (
            <p className={styles.forgotPassword}>Forgot password?</p>
          )}

          <div className={styles.divider}>or</div>
        </form>
      </section>

      {/* Need Help Section */}
      <section className={styles.needHelp}>
        <p>
          Need Help?<br />
          If you're experiencing issues with logging in or creating an account,
          our support team is ready to assist you.
        </p>
        <a href="mailto:support@computicket.com" className={styles.contactSupport}>
          Contact Support &rarr;
        </a>
      </section>
    </div>
  );
}
