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
        The physical prototype integrates 3D printed and machined aluminum parts for
        structural rigidity. Electronics are routed via custom PCBs to ensure signal
        reliability. Firmware for low-level control is written in C++ running on a
        Teensy microcontroller, while high-level control and vision are handled in Python on a Jetson Nano.
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
