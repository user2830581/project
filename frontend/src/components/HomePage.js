import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import tree from "../assets/fir-576838_1280.png";
import trackingIcon from "../assets/icons8-oak-tree-100.png";
import analysisIcon from "../assets/icons8-loading-sign-100.png";
import monitorIcon from "../assets/icons8-positive-dynamic-100.png";

const HomePage = () => {
  return (
    <div className="home">
      <section className="landing-section">
        <h1>A Tree and Carbon Stock Management System</h1>
        <button type="button">Get Started</button>
      </section>

      <hr className="section-divider" />

      <section className="info-section">
        <div className="figures-section">
          <div className="figure">
            <h1>25%</h1>
            <p>
              Of carbon emissions are captured by forests. Protecting forests is
              essential for carbon sequestration.
            </p>
          </div>
          <div className="figure">
            <h1>50%</h1>
            <p>
              Amount of carbon in a tree's structure. This makes trees natural
              carbon sinks.
            </p>
          </div>
          <div className="figure">
            <h1>20</h1>
            <p>
              Pounds captured by one tree each year, this is equivalent to
              avoiding emissions from burning one gallon of gasoline.
            </p>
          </div>
        </div>
        <div>
          <hr className="section-divider" />
        </div>
        <div className="carbon-section">
          <div className="carbon-sub-sections">
            <div className="carbon-text">
              <h3>Carbon Sequestration: What is it?</h3>
              <p>
                The process by which atmospheric carbon dioxide (CO2) is
                captured and stored in vegetation like forests, grasslands, and
                other ecosystems. This lowers the concentration of CO2 in the
                environment, reducing its effect as a greenhouse gas. These
                carbon reserves are referred to as carbon stocks and are a key
                contributor in reducing the impact of climate change.
              </p>
            </div>
            <div className="carbon-text">
              <h3>The Importance of Carbon Sequestration</h3>
              <p>
                Carbon dioxide is one of three major greenhouse gases, along
                with methane and nitrous oxide, contributing to approximately
                76% of global greenhouse gas emissions. Carbon sequestration is
                essential for reducing CO2 levels because carbon dioxide is a
                gas that does not break down easily and can remain in the
                atmosphere for centuries.
              </p>
            </div>
            <div className="carbon-text">
              <h3>How Trees Contribute to Carbon Sequestration</h3>
              <p>
                Trees act as carbon sinks, absorbing and storing more CO2 than
                they produce, making them highly effective at reducing CO2
                levels in the atmosphere. Carbon is stored in every part of a
                tree, with the bulk stored in the trunk. As trees grow and
                mature, they continue to absorb even more CO2. Carbon is only
                released from a tree when it is burned or rots. The effects of
                global warming, such as rising temperatures, increased droughts,
                and food shortages, can be reduced by maintaining and expanding
                our forests.
              </p>
            </div>
          </div>
          <div className="carbon-img">
            <img src={tree} alt="Tree icon" />
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="features-section">
        <div className="features-title">
          <h2>How Carbon24 works</h2>
          <p>
            By leveraging tree data, we can give users an intuitive breakdown of
            their information to guide sustainability practices.
          </p>
        </div>
        <div className="features-list">
          <div className="feature">
            <div className="feature-title">
              <img src={trackingIcon} alt="Tree icon" />
              <h4>Tracking</h4>
            </div>

            <p>
              The system collects various tree data to monitor the trees
              uploaded to the system.
              <br />
              <br />
              This information helps to calculate carbon stock levels and
              observe the overall health of the trees.
              <br />
              <br />
              Users can see the immediate impact of their data and understand
              the carbon sequestration value each tree represents.
            </p>
          </div>
          <div className="feature">
            <div className="feature-title">
              <img src={analysisIcon} alt="Analysis icon" />
              <h4>Analysing</h4>
            </div>
            <p>
              That data is then stored in a secure database.
              <br />
              <br />
              From there, users can take this data and use it to understand
              areas that have low or high levels of carbon sequestration.
              <br />
              <br />
              This helps to identify patterns in carbon levels and allows users
              to make informed decisions with sustainability practices.
            </p>
          </div>
          <div className="feature">
            <div className="feature-title">
              <img src={monitorIcon} alt="Monitoring icon" />
              <h4>Monitoring</h4>
            </div>
            <p>
              The stored data acts as historical records for users to monitor
              the progress in their sustainability efforts over time.
              <br />
              <br />
              By regularly updating and reviewing data, users can track changes.
              <br />
              <br />
              The system gives users informative feedback and visualizations on
              their data to view the long term impact of their contributions.
            </p>
          </div>
        </div>
      </section>
      <hr className="section-divider" />
      <footer>
        <p className="footer-details">
          This project was made as part of CS4501, a BSc. Computer Science final
          year project.
        </p>
        <p className="footer-links">
          Background image by
          <Link to="https://unsplash.com/photos/an-aerial-view-of-a-forest-with-lots-of-trees-aNcOeQLb_kA">
            {" "}
            Maxi Gimenez
          </Link>
          , Tree image by
          <Link to="https://pixabay.com/vectors/fir-tree-trunk-nature-leaves-576838/">
            {" "}
            Pixabay
          </Link>
          , Icons by <Link to="https://www.icons8.com">Icons8</Link>.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
