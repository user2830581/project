import React from "react";
import "../styles/SettingsPage.css";

/**
 * Represents a users settings component.
 *
 * @component
 * @returns {React.ReactElement} The SettingsPage component.
 */

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <div className="title">
        <h1>Settings</h1>
        <p>Manage your account settings and preferences</p>
        <hr />
      </div>
      <div className="settings-page-contents">
        {/* Section to update email */}
        <section className="settings-section">
          <h2>Manage Users</h2>
          <p>Manage your account information</p>
          <form className="settings-form-contents">
            <div className="form-field">
            <label>
              Email
              <input type="text" name="email" aria-label="Email"/>
            </label>
            </div>
            <div className="settings-buttons">
              <button className="reset-button" type="reset">
                Reset
              </button>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
        <hr className="settings-divider" />
        {/* Section to update password */}
        <section className="settings-section">
          <h2>Privacy</h2>
          <p>Modify your current password</p>
          <form className="settings-form-contents">
            <div className="form-field">
            <label>
              Current password
              <input type="password" name="current-password" aria-label="Current password"/>
            </label>
            <label>
              New password <input type="password" name="new-password" aria-label="New password" />
            </label>
            </div>
            <div className="settings-buttons">
              <button className="reset-button" type="reset">
                Reset
              </button>
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
        <hr className="settings-divider" />
        {/* Section to choose light or dark mode */}
        <section className="settings-section">
          <h2>Appearance</h2>
          <p>Customise how your account looks</p>
          <div className="appearance-buttons">
            <button className="light-mode-button">Light mode</button>
            <button className="dark-mode-button">Dark mode</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
