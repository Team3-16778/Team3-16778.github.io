import React from "react";

const sectionStyle = (bgColor) => ({
  backgroundColor: bgColor,
  paddingTop: "20px",
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

    {/* INTRO */}
    <section id="designRequirements" style={{ ...sectionStyle("lightgreen"), paddingTop: "20px" }}>
      <h2>Key Requirements:</h2>
      <ul>
        <li><strong>Affordability:</strong> Must cost <strong>less than $1100</strong> while maintaining essential functionality.</li>
        <li><strong>High Precision:</strong> Localize simulated lesions <strong>within ±0.5 mm error margin</strong>.</li>
        <li><strong>Success Rate:</strong> Achieve a <strong>&gt; 90% hit rate</strong> for lesions <strong>≥ 5 mm in size</strong>.</li>
        <li><strong>Real-Time Motion Adaptation:</strong> Adjust dynamically to <strong>longitudinal respiratory motion</strong>.</li>
        <li><strong>Ribcage Navigation:</strong> Detect and avoid <strong>unintended rib penetration</strong> while mimicking anatomical constraints.</li>
        <li><strong>Time Efficiency:</strong> Complete the full biopsy process <strong>within 10 minutes</strong>.</li>
        <li><strong>Stability & Precision:</strong> Compensate for <strong>soft pad deformation</strong> under pressure.</li>
        <li><strong>User Experience & Aesthetics:</strong> Maintain a <strong>visually appealing design</strong> for enhanced usability.</li>
        <li><strong>Automatic Biopsy Sample Ejection:</strong> Integrate <strong>automated sample ejection</strong> for improved procedural efficiency.</li>
      </ul>

      <p>
        By meeting these design requirements, the <strong>Biopsy Bot</strong> aims to provide a <strong>cost-effective, reliable, and autonomous biopsy system</strong>,
        improving accessibility to <strong>high-precision diagnostics</strong> while maintaining
        <strong>safety, accuracy, and usability</strong>.
      </p>
    </section>

    <section id="functionalArchitecture" style={sectionStyle("lightblue")}>
      <h2>Functional Architecture</h2>
      <div style={imageContainerStyle}>
        <img
          src="/assets/func_arch.png"
          alt="Functional Architecture"
          style={imageStyle}
        />
      </div>
      <p>
        The <strong>Robotic Biopsy System</strong> is designed with an advanced
        <strong>five-layer architecture</strong> that integrates <strong>hardware and software</strong> components
        for <strong>real-time perception, motion control, and needle manipulation</strong>. Each module plays a crucial role
        in ensuring <strong>accurate positioning and safe execution</strong> of the biopsy procedure.
      </p>

      <h3>System Architecture Overview</h3>
      <ul>
        <li><strong>Perception Layer:</strong> Converts <strong>real-world visual and physical information</strong> into <strong>digital signals</strong> for further processing.</li>
        <li><strong>Decision Layer:</strong> Processes <strong>raw data</strong>, performs <strong>localization</strong>, and determines the <strong>optimal target and biopsy pathway</strong>.</li>
        <li><strong>Control Layer:</strong> Translates decisions into <strong>specific control commands</strong>, dynamically adjusting motion for <strong>precise positioning</strong>.</li>
        <li><strong>Execution Layer:</strong> Executes <strong>final biopsy operations</strong> while providing <strong>real-time feedback</strong> for system calibration.</li>
        <li><strong>Power System:</strong> Ensures a <strong>stable and continuous energy supply</strong> to all system components.</li>
      </ul>

      <p>
        By integrating these five layers, the <strong>Biopsy Bot</strong> ensures a <strong>seamless, autonomous, and highly accurate biopsy procedure</strong>,
        reducing human error while improving diagnostic efficiency.
      </p>
    </section>
    <section id="designTradeStudies" style={sectionStyle("lightyellow")}>
      <h2>Design Trade Studies</h2>

      <h3>Robotic Arm vs. Gantry</h3>
      <p>
        The Biopsy Bot required a choice between a <strong>gantry-based system</strong> and a <strong>robotic arm</strong>.
        Gantry systems are commonly used in <strong>radiation therapy</strong> (e.g., CyberKnife) for their <strong>precision and stability</strong>,
        whereas robotic arms (e.g., da Vinci Surgical System) provide <strong>greater dexterity and flexibility</strong>.
      </p>

      <p>A trade study was conducted, evaluating both designs based on key criteria:</p>
      <ul>
        <li><strong>Precision:</strong> Accuracy in positioning the biopsy needle.</li>
        <li><strong>Dexterity (Degrees of Freedom):</strong> Range of movement available.</li>
        <li><strong>Sensor Integration:</strong> Ease of incorporating tracking and feedback sensors.</li>
        <li><strong>Footprint:</strong> Space efficiency.</li>
        <li><strong>Setup Time:</strong> Complexity of initial setup.</li>
        <li><strong>Simplicity to Manufacture:</strong> Ease of prototyping and assembly.</li>
        <li><strong>Coolness:</strong> User appeal and intuitive design.</li>
      </ul>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Precision</th>
            <th>Dexterity (DOF)</th>
            <th>Sensor Integration</th>
            <th>Footprint</th>
            <th>Setup Time</th>
            <th>Simplicity</th>
            <th>Coolness</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gantry-Based</td>
            <td>4</td>
            <td>4</td>
            <td>5</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>2</td>
            <td><strong>27</strong></td>
          </tr>
          <tr>
            <td>Robotic Arm</td>
            <td>2</td>
            <td>5</td>
            <td>3</td>
            <td>4</td>
            <td>4</td>
            <td>2</td>
            <td>4</td>
            <td><strong>24</strong></td>
          </tr>
        </tbody>
      </table>

      <p><strong>Conclusion:</strong> The <strong>gantry-based system</strong> was selected for its <strong>higher precision, better sensor integration, and manufacturability</strong>, making it ideal for biopsy procedures.</p>

      <h3>Gantry Designs</h3>
      <p>
        Two configurations were compared: <strong>underhand gantry</strong> and <strong>overhead gantry</strong>.
        The underhand design provides <strong>higher load capacity and simpler installation</strong>, while the overhead gantry offers <strong>better stiffness</strong> but is more complex to install.
      </p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Capacity</th>
            <th>Reachability</th>
            <th>Patient Convenience</th>
            <th>Stiffness</th>
            <th>Installation</th>
            <th>Coolness</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Underhand</td>
            <td>4</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td><strong>16</strong></td>
          </tr>
          <tr>
            <td>Overhead</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>4</td>
            <td>1</td>
            <td>3</td>
            <td><strong>14</strong></td>
          </tr>
        </tbody>
      </table>

      <p><strong>Conclusion:</strong> The <strong>underhand gantry</strong> was chosen due to its <strong>higher capacity and simpler installation</strong>.</p>

      <h3>End Effector Design</h3>
      <p>
        The <strong>end effector</strong> is responsible for <strong>precise needle insertion and control</strong>.
        Two designs were considered: a <strong>gimbal-inspired end effector</strong> and a <strong>delta robot-inspired end effector</strong>.
      </p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Category</th>
            <th>DoF</th>
            <th>Workspace</th>
            <th>Accuracy</th>
            <th>Installation</th>
            <th>Coolness</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gimbal Inspired</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td><strong>14</strong></td>
          </tr>
          <tr>
            <td>Delta Robot Inspired</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td><strong>12</strong></td>
          </tr>
        </tbody>
      </table>

      <p><strong>Conclusion:</strong> The <strong>gimbal-inspired design</strong> was selected for its <strong>greater accuracy and control</strong>.</p>

      <h3>Needle Actuator Mechanism</h3>
      <p>
        Three needle actuator designs were analyzed: <strong>rack and pinion, lead screw, and slider crank mechanisms</strong>.
        The <strong>lead screw</strong> was chosen due to its <strong>high precision and self-locking capability</strong>.
      </p>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Precision</th>
            <th>Force Transmission</th>
            <th>Wear</th>
            <th>Cost</th>
            <th>Motion Profile</th>
            <th>Size</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rack and Pinion</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>2</td>
            <td>4</td>
            <td>4</td>
            <td><strong>19</strong></td>
          </tr>
          <tr>
            <td>Lead Screw</td>
            <td>4</td>
            <td>3</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>4</td>
            <td><strong>20</strong></td>
          </tr>
          <tr>
            <td>Slider Crank</td>
            <td>2</td>
            <td>3</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>1</td>
            <td><strong>13</strong></td>
          </tr>
        </tbody>
      </table>

      <p><strong>Conclusion:</strong> The <strong>lead screw mechanism</strong> was selected for its <strong>high precision and stability</strong>.</p>

    </section>


    <section id="cyberPhysical" style={sectionStyle("lightgray")}>
      <h2>Cyberphysical Architecture</h2>
      <div style={imageContainerStyle}>
        <img
          src="/assets/cyber_arch.png"
          alt="Functional Architecture"
          style={imageStyle}
        />
      </div>
    </section>

    <section id="systemDesign" style={sectionStyle("lightseagreen")}>
      <h2>System Design</h2>

      <h3>Gantry System</h3>
      <p>
        The gantry system consists of a three-axis setup incorporating linear rails and lead screws to ensure precise and stable linear motion.
        It utilizes NEMA 17 stepper motors for smooth and accurate movement, controlled by TMC2209 motor drivers, which offer low-noise and efficient motor operation.
        The gantry is responsible for ensuring the precise positioning of the end effector while contributing to the overall structural integrity of the system.
      </p>


      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <img
          src="/assets/gantry_design_trade_2.png"
          alt="Design 2"
          style={{
            height: "300px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
        <img
          src="/assets/gantry_design_trade.png"
          alt="Design 1"
          style={{
            height: "300px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />
      </div>

      <p style={{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "10px"
      }}>
        Preliminary design evaluation and sketches
      </p>

      <h3>End Effector</h3>
      <p>
        The end effector is designed to manipulate and control the biopsy needle actuation system.
        It comprises a base for stability, a needle actuation mechanism for sample insertion and retrieval, and force sensors (strain gauges) to provide real-time feedback on tool-tissue interaction.
        This component ensures precise needle insertion and integrates seamlessly with the gantry for smooth operation.
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <img
          src="/assets/end_effector_design_study.png"
          alt="Design 2"
          style={{
            height: "200px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />

      </div>

      <p style={{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "10px"
      }}>
        End effector design study
      </p>


      <h3>Perception System</h3>
      <p>
        The perception system captures and processes environmental data to facilitate localization, object detection, and task planning.
        It utilizes two Arducam 8MP IMX219 cameras to provide high-resolution visual data for mapping and detection, enabling real-time image and video capture for localization and monitoring.
        The system supports environment mapping, object detection for identifying tools and obstacles, and localization feedback to enhance precise robot positioning.
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "20px"
      }}>
        <img
          src="/assets/cameras.png"
          alt="Design 2"
          style={{
            height: "200px",
            width: "auto",
            objectFit: "cover",
            borderRadius: "8px"
          }}
        />

      </div>

      <p style={{
        textAlign: "center",
        fontStyle: "italic",
        marginTop: "10px"
      }}>
        Intel RealSense D435, D415 and Arducam Cameras
      </p>

    </section>
  </>
);

export default HomePage;
