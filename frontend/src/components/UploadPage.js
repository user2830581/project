import React from "react";
import "../styles/UploadPage.css";
import treeImage from "../assets/fir-576838_1280.png";

/**
 * UploadPage component represents a form for users to upload tree data.
 *
 *
 * @component
 * @returns {React.ReactElement} The UploadPage component.
 */

const UploadPage = () => {
  return (
    <div className="upload-page">
      <div className="title">
        <h1>Upload</h1>
        <p>Upload tree data to estimate carbon stock levels</p>
        <hr />
      </div>
      <div className="upload-page-contents">
        <div className="tree-img-inverted">
          <img src={treeImage} alt="Tree icon" />
        </div>
        <section className="upload-section">
          <form className="upload-form">
            <div className="upload-form-section">
              <label className="form-section-long">
                Species
                <small>Select the tree species</small>
                <input type="text" name="species" required />
              </label>
              <label className="form-section-short">
                Height
                <small>Input the tree height (meters)</small>
                <input type="number" name="height" min="0" required />
              </label>
            </div>
            <div className="upload-form-section">
              <label className="form-section-long">
                Circumference
                <small>Input trunk circumference (meters)</small>
                <input type="number" name="circumference" min="0" required />
              </label>
              <label className="form-section-short">
                Age
                <small>Input tree age (years)</small>
                <input type="number" name="age" min="0" required />
              </label>
            </div>
            <div className="upload-form-section">
            <label>
              Date
              <small>Input tree data collection date</small>
              <input type="date" name="date" required />
            </label>
            </div>
            <div className="upload-form-section">
            <label>Latitude</label>
            {/*havent figured out how to implement location yet  */}
            </div>
            <div className="upload-buttons">
              <button className="upload-reset" type="reset">
                Reset
              </button>
              <button className="upload-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </section>
        <div className="tree-img">
          <img src={treeImage} alt="Tree icon" />
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
