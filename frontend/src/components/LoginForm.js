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

const LoginForm = ({ onSignupClick, onRePasswordClick }) => {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [error, setError] = React.useState(null);

  const { email, password } = formData;

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



  }


  return (
    <div className="form-container">
      <h1>Welcome back</h1>
      <p>
        Don't have an account yet?{" "}
        <button className="signup-button" onClick={onSignupClick}>
          Sign up
        </button>
        < br/>
        <br />

        Forgot password?{" "}
        <button className="signup-button" onClick={onRePasswordClick}>
          Reset it here
        </button>
      </p>
      <form className="form">
        <div className="form-fields">
          {/* Input for email and password */}
          <label>
            Email:
            <br />
            <input type="email" name="email" onChange={handleChange} value={email} required />
          </label>
          <label>
            Password:
            <br />
            <input type="password" name="password" onChange={handleChange} value={password} required />
          </label>
        </div>

        

        {/* Submit button to sign in */}
        <div className="submit-button">
          <button type="submit" value="Submit" onClick={handleSubmit}>
            Sign in
          </button>
        </div>
      </form>
      {/* Reset password link */}

    </div>
  );
};

export default LoginForm;
