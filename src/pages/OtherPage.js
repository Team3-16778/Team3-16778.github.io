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

const OtherPage = () => (
  <>
    <section id="projectManagement" style={sectionStyle("lightpink")}>
      <h2>Project Management</h2>
      <h3>Timeline</h3>

      <div style={{ overflowX: "auto", width: "100%" }}>
        <table style={{ borderCollapse: "collapse", minWidth: "700px" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f0e68c" }}>Week</th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f0e68c" }}>Goal</th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f0e68c" }}>Details</th>
              <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#f0e68c" }}>Gantt</th>
            </tr>
          </thead>
          <tbody>
            {[
              { week: "2/16/25", goal: "Design Proposal, Mock-Up Demo", detail: "Basic CAD, schematics, parts ordered", range: [0] },
              { week: "2/23/25", goal: "System Demo 1, Website Check 1", detail: "Basic subsystems, website update", range: [1] },
              { week: "3/2/25", goal: "System Demo 2", detail: "Subsystems integrated", range: [2] },
              { week: "3/9/25", goal: "Spring Break", detail: "Design revisions, parts ordered", range: [3] },
              { week: "3/16/25", goal: "System Demo 3", detail: "Integrated locomotion/manipulation", range: [4, 5] },
              { week: "3/23/25", goal: "Mid-Semester Presentations", detail: "End effector control proof-of-concept", range: [5] },
              { week: "3/30/25", goal: "System Demo 4, Website Check 2", detail: "Control refinement, synchronized motion", range: [6] },
              { week: "4/6/25", goal: "System Demo 5", detail: "Precision via sensors", range: [6, 7] },
              { week: "4/13/25", goal: "System Demo 6", detail: "Mission file parsing", range: [7, 8] },
              { week: "4/20/25", goal: "System Demo 7", detail: "Robustness & optimization", range: [8, 9] },
              { week: "4/27/25", goal: "Final System Demo", detail: "System ready", range: [10] },
              { week: "5/4/25", goal: "Encore Demo, Final Report, Lab Cleanup", detail: "Submit report, clean up", range: [11] }
            ].map((item, idx) => (
              <tr key={idx}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.week}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.goal}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.detail}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  <div style={{ display: "flex" }}>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        style={{
                          height: "20px",
                          width: "20px",
                          margin: "1px",
                          backgroundColor: item.range.includes(i) ? "green" : "#e0e0e0",
                        }}
                      />
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 
      <div style={imageContainerStyle}>
        <img src="/assets/schedule.png" alt="Timeline" style={imageStyle} />
      </div> */}
    </section>

    <section id="Media" style={sectionStyle("violet")}>
      <h2>Media</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {[
          { label: "Computer Vision", url: "https://drive.google.com/drive/folders/1YS1rYSDe3Ea2tr9yJFETYU7QIOVnHmi5?usp=sharing" },
          { label: "CAD", url: "https://drive.google.com/drive/folders/1-7TGZ131BtQvsD9QIuw_yKREmDMyT1JU?usp=sharing" },
        ].map((doc, idx) => (
          <a
            key={idx}
            href={doc.url}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#4682B4",
              color: "white",
              padding: "10px 16px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "500",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#5A9BD5")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4682B4")}
          >
            {doc.label}
          </a>
        ))}
      </div>
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
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {[
          { label: "Design Proposal", url: "https://docs.google.com/document/d/1u5hSzZ_wIe2xkZCR74zT8-o6ew036MobDVUHgZ3yO08/edit?usp=sharing" },
          { label: "Lab Reports", url: "https://drive.google.com/drive/folders/1f4UQ71y84HZz48Y93UMKa-8skSeolSej?usp=sharing" },
          { label: "Mid Semester Presentation", url: "https://docs.google.com/presentation/d/144JKlhlkmfBVysk6inQBTW8deuK9NPeeX8AmKtwoueg/edit?usp=sharing" },
          { label: "Team GitHub", url: "https://github.com/Team3-16778" },
        ].map((doc, idx) => (
          <a
            key={idx}
            href={doc.url}
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: "#4682B4",
              color: "white",
              padding: "10px 16px",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "500",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#5A9BD5")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#4682B4")}
          >
            {doc.label}
          </a>
        ))}
      </div>
    </section>

  </>
);

export default OtherPage;
