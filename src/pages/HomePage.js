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
    <section id="projectDescription" style={{ ...sectionStyle("white"), paddingTop: "20px" }}>
      <h2>Project Description</h2>

      <p> The project aims to develop a low-cost, portable robotic system for automated needle insertion in soft tissue biopsies, tested on a gelatin-based liver phantom containing an embedded "lesion" (grape).
        The Robotic Biopsy System for Liver Tissue is designed to enhance the accuracy and efficiency of needle insertion through advanced computer vision, real-time motion control, and sensor feedback mechanisms, which gives advantages below:
      </p>

      <ul>
        <li><strong>Minimally Invasive & High Precision:</strong> Reduces the risk of procedural complications</li>
        <li><strong>Real-Time Feedback for Dynamic Adjustments:</strong> Continuous needle tracking helps adjust for patient movement (e.g., respiration) in real time, reducing errors. </li>
        <li><strong>Reduced Healthcare Costs:</strong> Improves accessibility to high-precision diagnostics.</li>
      </ul>


    </section>

    <section id="homepage_media" style={{ ...sectionStyle("white"), paddingTop: "20px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "40px", // spacer
        height: "100%", // let children size the height
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        <img
          src="/assets/full_system.png"
          alt="Full System"
          style={{
            maxWidth: "45%",
            height: "auto",
            objectFit: "contain"
          }}
        />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UW7k7Gw-k7s"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>

  </>

)


export default HomePage;
