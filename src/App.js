import React from 'react';

const App = () => {
  return (
    <div>
      {/* Header with links */}
      <header style={headerStyle}>
        <nav>
          <ul style={navStyle}>
            <li><a href="#problemDescription" style={linkStyle}>Problem Description</a></li>
            <li><a href="#systemDesign" style={linkStyle}>System Design</a></li>
            <li><a href="#systemImplementation" style={linkStyle}>System Implementation</a></li>
            <li><a href="#systemPerformance" style={linkStyle}>System Performance</a></li>
            <li><a href="#projectManagement" style={linkStyle}>Project Management</a></li>
            <li><a href="#media" style={linkStyle}>Media</a></li>
            <li><a href="#teamPage" style={linkStyle}>Team</a></li>
            <li><a href="#documents" style={linkStyle}>Documents</a></li>
          </ul>
        </nav>
      </header>

      {/* Content Sections */}
      <section id="problemDescription" style={sectionStyle('lightblue')}>
        <h2>Problem Description</h2>
        <p>Provide a description of the problem the system is trying to solve.</p>
      </section>

      <section id="systemDesign" style={sectionStyle('lightgreen')}>
        <h2>System Design</h2>
        <h3>Performance Specifications</h3>
        <p>Outline the system's performance specifications.</p>
        <h3>Functional Architecture</h3>
        <p>Provide a block diagram and description of the system's functions.</p>
        <h3>Cyberphysical Architecture</h3>
        <p>Describe the cyberphysical components and their connectivity.</p>
        <h3>System Design Description/Depiction(s)</h3>
        <p>Provide a graphical depiction and description of the system and subsystems.</p>
      </section>

      <section id="systemImplementation" style={sectionStyle('lightcoral')}>
        <h2>System Implementation</h2>
        <p>Details about the progress made over time in system and subsystem development.</p>
      </section>

      <section id="systemPerformance" style={sectionStyle('lightyellow')}>
        <h2>System Performance</h2>
        <p>Highlight the system’s performance against the requirements, including testing results.</p>
      </section>

      <section id="projectManagement" style={sectionStyle('lightgray')}>
        <h2>Project Management</h2>
        <h3>Schedule</h3>
        <p>Include the project development schedule and round-robin list of presenters.</p>
        <h3>Issues Log</h3>
        <p>Log any design issues and resolutions throughout the project.</p>
        <h3>Parts List</h3>
        <p>List the parts acquired or purchased and the corresponding costs.</p>
      </section>

      <section id="media" style={sectionStyle('lightpink')}>
        <h2>Media</h2>
        <h3>Videos</h3>
        <p>Include illustrative videos of your system in operation, including a final system video.</p>
        <h3>Picture Gallery</h3>
        <p>Provide images showcasing various stages of the project's development.</p>
      </section>

      <section id="teamPage" style={sectionStyle('lightseagreen')}>
        <h2>Team Page</h2>
        <p>Include the team name and bios for each team member with their background, expertise, and project responsibilities.</p>
      </section>

      <section id="documents" style={sectionStyle('lightsteelblue')}>
        <h2>Documents</h2>
        <h3>Design Brainstorming</h3>
        <p>Summarize the design brainstorming sessions and ideas generated.</p>
        <h3>Drawings, Schematics, and Datasheets</h3>
        <p>Include any electrical or mechanical drawings, wiring diagrams, and datasheets.</p>
        <h3>Component Testing & Experiment Results</h3>
        <p>Record how you tested components and the results obtained.</p>
        <h3>Software</h3>
        <p>Include relevant code snippets and descriptions.</p>
        <h3>Presentations</h3>
        <p>Provide copies of design proposals, lab reports, and other presentations.</p>
      </section>
    </div>
  );
};

// Styles
const headerStyle = {
  width: '100%',
  padding: '10px 0',
  backgroundColor: '#333',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
};

const navStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '0 15px',
};

const sectionStyle = (bgColor) => ({
  height: '100vh',
  backgroundColor: bgColor,
  paddingTop: '60px',
});

export default App;
