import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Baykk</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Baykk.
          </span>{" "}
          <br />
          <Link to="/">
            <h2 style={{ textAlign: "center", color: "#1775ee" }}>
              Go back to homepage.
            </h2>
          </Link>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
