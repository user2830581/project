import React from "react";
import "../styles/RegisterLoginForm.css";

/**
 * RegisterForm component represents a registration form for users.
 *
 *
 * @component
 * @param {Object} props - The component props.
 * @param {function} props.onLoginClick - A function to navigate to 'log in' form when clicked.
 * @returns {React.ReactElement} The RegisterForm component.
 */

const RegisterForm = ({ onLoginClick }) => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    re_password: "",
  });
  const [error, setError] = React.useState(null);

  const { email, password, re_password } = formData;

  /* Input changes */
  // e stands for event, event handler
  // call setFormData
  // use spread operator to copy all properties from current formData state into new object
  // e.target.name gets name attribute of the input element that triggered the event
  // e.target.value gets the value of the input element

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  /* Form submission */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // validation
    if(password !== re_password){
      setError("Passwords do not match");
    }


  }

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
            <input type="email" name="email" onChange={handleChange} value={email} required />
          </label>
          <label>
            Password:
            <br />
            <input type="password" name="password"  onChange={handleChange} value={password} required />
          </label>
          <label>
            Confirm password:
            <br />
            <input type="password" name="re_password"  onChange={handleChange} value={re_password} required />
          </label>
        </div>
        {/* Submit button to create account */}
        <div className="submit-button">
          <button type="submit" value="Submit" onClick={handleSubmit}>
            Create account
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
