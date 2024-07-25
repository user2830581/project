import React from "react";
import "../styles/RegisterLoginForm.css";

/**
 * RegisterForm component represents a registration in form for users.
 *
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onLoginClick - A function to navigate to 'log in' form when clicked.
 * @returns {React.ReactElement} The RegisterForm component.
 */

const RegisterForm = ({ onLoginClick }) => {
  return (
    <div className="form-container">
      <h1>Create your account</h1>
      <p>
        Already have an account?{" "}
        <button onClick={onLoginClick} className="login-button">
          Log in
        </button>
      </p>
      <form className="form">
        <div className="form-fields">
          {/* Input fields (email, password, confirm password) */}
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
          <label>
            Confirm password:
            <br />
            <input type="password" name="confirm-password" required />
          </label>
        </div>
        {/* Submit button to create account */}
        <div className="submit-button">
          <button type="submit" value="Submit">
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
