import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ImplementationPage from "./pages/ImplementationPage";
import OtherPage from "./pages/OtherPage";

const App = () => {
  return (
    <Router>
      <div>
        {/* Persistent Header/Nav */}
        <header style={headerStyle}>
          <div style={{ display: "flex", justifyContent: "center", padding: "5px 0" }}>
            <h3 style={{ color: "white", margin: 0, fontSize: "1.2rem" }}>
              Robotic Biopsy System - Discount DaVinci
            </h3>
          </div>

          <nav>
            <ul style={navStyle}>
              <li><Link to="/" style={linkStyle}>Home</Link></li>
              <li><Link to="/implementation" style={linkStyle}>Implementation</Link></li>
              <li><Link to="/other" style={linkStyle}>Other</Link></li>
            </ul>
          </nav>
        </header>

        {/* Page Content */}
        <div style={{ paddingTop: "9vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/implementation" element={<ImplementationPage />} />
            <Route path="/other" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Styles (same as before)
const headerStyle = {
  width: "100%",
  padding: "5px 0",
  backgroundColor: "#333",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
};

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  listStyle: "none",
  margin: 0,
  padding: "5px 10px",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "13px",
  padding: "5px",
};

export default App;
