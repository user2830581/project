import React from "react";
import "../styles/RegisterLoginForm.css";

/**
 *
 */

const ResetPasswordForm = () => {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState(null);



  /* Input changes */
  // e stands for event, event handler
  // call setFormData
  // use spread operator to copy all properties from current formData state into new object
  // e.target.name gets name attribute of the input element that triggered the event
  // e.target.value gets the value of the input element

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  /* Form submission */
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
  };

  return (
    <div className="form-container">
      <h1>Reset Password</h1>
      <p>Enter your email address</p>
      <form className="form">
        <div className="form-fields">
          {/* Input for email and password */}
          <label>
            Email:
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
          </label>
        </div>

        {/* Submit button to sign in */}
        <div className="submit-button">
          <button type="submit" value="Submit" onClick={handleSubmit}>
            Send reset link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
