import React from "react";

const sectionStyle = (bgColor) => ({
  backgroundColor: bgColor,
  paddingTop: "20px",
  paddingBottom: "20px",
  paddingLeft: "20px",
});

const ImplementationPage = () => (
  <>
    <section id="systemImplementation" style={sectionStyle("lightgreen")}>
      <h2>Project Implementation</h2>
      <p>
        <strong>Computer Vision:</strong>Testing different object detection and localization strategies.
        <break></break>
        <strong>Gantry:</strong>3d ROM completed, working on mounting system to operating table.
        <break></break>
        <strong>Computer Vision:</strong>Full ROM completed, need to test injection strength and mounting to gantry.
        <break></break>
        <strong>Subsystem Integration:</strong>Sysio test started, further testing required for full integration with cams and actuators.

      </p>
    </section>

    <section id="systemPerformance" style={sectionStyle("lightorange")}>
      <h2>Project Performance</h2>
      <h3>Computer Vision</h3>
      <p>
        Initial results showed the system was able to detect objects using either YOLO or a color mask, with some back in forth and eventually the team settling on a color mask based approach.
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
  <img
    src="/assets/media/color_mask_rough.jpeg"
    alt="Color Mask - Live Data"
    style={{ width: "400px", height: "auto", margin: "10px 0" }}
  />
  <img
    src="/assets/media/color_mask_fake_data.png"
    alt="Color Mask - Simulated Data"
    style={{ width: "400px", height: "auto", margin: "10px 0" }}
  />
  <p style={{ textAlign: "center", marginTop: "10px", fontStyle: "italic" }}>
    Initial color mask object detection results
  </p>
</div>




      <p>
        Full range-of-motion (ROM) for the gantry and end effector will be demonstrated by <strong>4/11</strong>. The system is expected to detect, localize, and move to target objects by <strong>4/18</strong>.
      </p>
    </section>

  </>
);

export default ImplementationPage;
