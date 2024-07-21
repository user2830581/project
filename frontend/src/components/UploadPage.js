import React from "react";
//import "../styles/Home.css";

const UploadPage = () => {
  return (
    <div className="upload">
      <div className="title">
        <h1>Upload</h1>
        <p>Upload tree data to estimate carbon stock levels</p>
        <hr />
      </div>

      <section className="upload-form">
        <form>
          <label>
            Species
            <small>Select the tree species</small>
            <input type="text" name="species" required />
          </label>
          <label>
            Height
            <small>Input the tree height (meters)</small>
            <input type="number" name="height" required />
          </label>
          <label>
            Circumference
            <small>Input trunk circumference (meters)</small>
            <input type="number" name="circumference" required />
          </label>
          <label>
            Age
            <small>Input tree age (years)</small>
            <input type="number" name="age" required />
          </label>
          <label>
            Date
            <small>Input tree data collection date</small>
            <input type="date" name="date" required/>
          </label>
          <label>Latitude</label>
          {/*havent figured out how to implement location yet  */}
          <button type="reset">Reset</button>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default UploadPage;
