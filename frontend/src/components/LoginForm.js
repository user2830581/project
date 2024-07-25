import React from "react";
import "../styles/RegisterLoginForm.css";

/**
 * LoginForm component represents a log in form for users.
 *
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onSignupClick - A function to navigate to 'sign up' form when clicked.
 * @returns {React.ReactElement} The LoginForm component.
 */

const LoginForm = ({ onSignupClick }) => {
  return (
    <div className="form-container">
      <h1>Welcome back</h1>
      <p>
        Don't have an account yet?{" "}
        <button className="signup-button" onClick={onSignupClick}>
          Sign up
        </button>
      </p>
      <form className="form">
        <div className="form-fields">
          {/* Input for email and password */}
          <label>
            Email:
            <br />
            <input type="email" name="email" required />
          </label>
          <label>
            Password:
            <br />
            <input type="password" name="password" required />
          </label>
        </div>

        {/* Reset password link */}
        <a href="/reset-password" className="reset-password-link">
          Forgot Password?
        </a>

        {/* Submit button to sign in */}
        <div className="submit-button">
          <button type="submit" value="Submit">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
