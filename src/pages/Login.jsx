import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlePhoneInput(e) {
    setPhone(e.target.value);
    setEmail("");
    setPassword("");
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    setPhone("");
  }

  function handleLogin(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.login}>
      <div className={styles.left}>
        <img src="/tradewise-logo.jpg" alt="TradeWise" />
        <h1>Hello, Welcome!</h1>
        <img
          src="/images/illustration_login.png"
          alt="Login"
          className={styles.loginImage}
        />
      </div>
      <div className={styles.right}>
        <h2>Sign in to TradeWise</h2>
        <form>
          <input
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={handlePhoneInput}
          />
          <span>OR</span>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleLogin}>
            {phone ? "Get OTP" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
