import React from "react";

const sectionStyle = (bgColor) => ({
  backgroundColor: bgColor,
  paddingTop: "120px",
  paddingBottom: "20px",
  paddingLeft: "20px",
});

const imageStyle = {
  maxWidth: "30vw",
  height: "auto",
};

const imageContainerStyle = {
  display: "flex",
  justifyContent: "left",
  padding: "20px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "10px",
  border: "2px solid black",
};

const HomePage = () => (
  <>
    <section id="projectDescription" style={sectionStyle("lightblue")}>
      <h2>Project Description</h2>
      <p>
        The project aims to develop a low-cost, portable robotic system for automated needle insertion...
      </p>
      <ul>
        <li>Minimally Invasive & High Precision...</li>
        <li>Real-Time Feedback for Dynamic Adjustments...</li>
        <li>Reduced Healthcare Costs...</li>
      </ul>
    </section>

    <section id="designRequirements" style={sectionStyle("lightgreen")}>
      <h2>Key Requirements</h2>
      <ul>
        <li><strong>Affordability:</strong> Must cost <strong>less than $1100</strong></li>
        <li><strong>High Precision:</strong> Localize simulated lesions <strong>±0.5 mm</strong></li>
        <li><strong>Success Rate:</strong> <strong>&gt; 90%</strong> hit rate</li>
        {/* ...complete rest of list... */}
      </ul>
    </section>

    <section id="functionalArchitecture" style={sectionStyle("lightcoral")}>
      <h2>Functional Architecture</h2>
      <div style={imageContainerStyle}>
        <img src="/assets/func_arch.png" alt="Functional Architecture" style={imageStyle} />
      </div>
      <p>
        The Robotic Biopsy System uses a five-layer hardware/software stack...
      </p>
    </section>

    <section id="designTradeStudies" style={sectionStyle("lightyellow")}>
      <h2>Design Trade Studies</h2>
      <h3>Robotic Arm vs. Gantry</h3>
      <p>We compared multiple designs based on precision, dexterity, etc.</p>
      <table style={tableStyle}>
        <thead>
          <tr><th>Category</th><th>Precision</th><th>Dexterity</th><th>Total</th></tr>
        </thead>
        <tbody>
          <tr><td>Gantry</td><td>4</td><td>4</td><td>27</td></tr>
          <tr><td>Arm</td><td>2</td><td>5</td><td>24</td></tr>
        </tbody>
      </table>
      <p><strong>Conclusion:</strong> Gantry selected.</p>
    </section>

    <section id="cyberPhysical" style={sectionStyle("lightgray")}>
      <h2>Cyberphysical Architecture</h2>
      <div style={imageContainerStyle}>
        <img src="/assets/cyber_arch.png" alt="Cyber Physical" style={imageStyle} />
      </div>
    </section>

    <section id="systemDesign" style={sectionStyle("lightseagreen")}>
      <h2>System Design</h2>
      <p>The Gantry system uses linear rails, NEMA motors, TMC2209 drivers...</p>
      <p>End effector includes strain gauges, precision actuators...</p>
      <p>Perception system uses dual Arducam IMX219 cameras for stereo vision...</p>
    </section>
  </>
);

export default HomePage;
