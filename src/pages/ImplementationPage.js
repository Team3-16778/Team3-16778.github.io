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
        Early testing on gelatin phantoms shows target acquisition within 0.8 mm.
        Real-time motion correction improved accuracy by 35%. Final validation
        will be done using tracked respiratory motion datasets.
      </p>
    </section>
  </>
);

export default ImplementationPage;
