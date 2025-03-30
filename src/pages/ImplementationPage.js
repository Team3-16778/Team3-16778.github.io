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
      <p>
        Testing is ongoing, but initial results show the system can detect objects using either YOLO or a color mask. Object localization is scheduled for completion by <strong>4/4</strong>.
        Currently, the color mask requires tuning. The theoretical example shows strong performance, but challenges remain due to uncertain lesion colors and lighting noise in the live demo. Further implementation is required.
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src="/assets/media/color_mask_rough.jpeg"
          alt="Color Mask - Live Data"
          style={{ width: "50%", height: "auto", margin: "20px 0" }}
        />
        <img
          src="/assets/media/color_mask_fake_data.png"
          alt="Color Mask - Simulated Data"
          style={{ width: "50%", height: "auto", margin: "20px 0" }}
        />
      </div>

      <p>
        Full range-of-motion (ROM) for the gantry and end effector will be demonstrated by <strong>4/11</strong>. The system is expected to detect, localize, and move to target objects by <strong>4/18</strong>.
      </p>
    </section>

  </>
);

export default ImplementationPage;
