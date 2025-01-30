import React from 'react';

const App = () => {
  return (
    <div>
      {/* Header with links */}
      <header style={headerStyle}>
        <nav>
          <ul style={navStyle}>
            <li><a href="#section1" style={linkStyle}>Section 1</a></li>
            <li><a href="#section2" style={linkStyle}>Section 2</a></li>
            <li><a href="#section3" style={linkStyle}>Section 3</a></li>
          </ul>
        </nav>
      </header>

      {/* Content Sections */}
      <section id="section1" style={sectionStyle('lightblue')}>
        <h2>Section 1</h2>
        <p>This is Section 1.</p>
      </section>
      
      <section id="section2" style={sectionStyle('lightgreen')}>
        <h2>Section 2</h2>
        <p>This is Section 2.</p>
      </section>

      <section id="section3" style={sectionStyle('lightcoral')}>
        <h2>Section 3</h2>
        <p>This is Section 3.</p>
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
  justifyContent: 'flex-end', // Right-justify the items
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
  paddingTop: '60px', // To avoid overlap with the fixed header
});

export default App;
