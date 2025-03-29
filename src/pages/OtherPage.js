import React from "react";

const sectionStyle = (bgColor) => ({
  backgroundColor: bgColor,
  paddingTop: "100px",
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

const OtherPage = () => (
  <>
    <section id="projectManagement" style={sectionStyle("lightpink")}>
      <h2>Project Management</h2>
      <h3>Timeline</h3>
      <div style={imageContainerStyle}>
        <img src="/assets/schedule.png" alt="Timeline" style={imageStyle} />
      </div>
    </section>

    <section id="Media" style={sectionStyle("violet")}>
      <h2>Media</h2>
      <p>Coming soon: videos and CAD visualizations.</p>
    </section>

    <section id="teamPage" style={sectionStyle("lightgray")}>
      <h2>Team Page</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
        {[
          { name: "Chase", image: "/assets/members/chase.jpeg", description: "MS AI Engineering — Portfolio & Computer Vision" },
          { name: "Xinwen", image: "/assets/members/xinwen.jpeg", description: "MS Mechanical Engineering — Robotics & Computer Vision" },
          { name: "Arushi", image: "/assets/members/arushi.jpeg", description: "MS Mechanical Engineering — Hardware (End Effector)" },
          { name: "Jack", image: "/assets/members/jack.jpeg", description: "MS Mechanical Engineering — Hardware (Gantry System)" }
        ].map((member, index) => (
          <div key={index} style={{ textAlign: "center", maxWidth: "200px" }}>
            <img src={member.image} alt={member.name} style={{ ...imageStyle, borderRadius: "50%", width: "100%" }} />
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section id="documents" style={sectionStyle("lightsteelblue")}>
      <h2>Documents</h2>
      <p><a href="https://docs.google.com/document/d/1u5hSzZ_wIe2xkZCR74zT8-o6ew036MobDVUHgZ3yO08/edit?usp=sharing" target="_blank" rel="noreferrer">Design Proposal</a></p>
      <p><a href="https://drive.google.com/drive/folders/1vSluePcS2WWNmUFQC8DQalTqs3hoIH1V?usp=sharing" target="_blank" rel="noreferrer">Google Drive (Lab Reports)</a></p>
      <p><a href="https://github.com/Team3-16778" target="_blank" rel="noreferrer">Team GitHub</a></p>
    </section>
  </>
);

export default OtherPage;
