import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DesignProcessPage from "./pages/DesignProcessPage";
import ImplementationPage from "./pages/ImplementationPage";
import OtherPage from "./pages/OtherPage";
import "./App.css"; // assumes styles are here

const App = () => {
  return (
    <Router>
      <div>
        <header className="app-header">
          <div style={{ display: "flex", justifyContent: "center", padding: "5px 0" }}>
            <h3 style={{ color: "white", margin: 0, fontSize: "1.2rem" }}>
              Robotic Biopsy System - Discount DaVinci
            </h3>
          </div>

          <nav>
            <ul className="nav-style">

              <li><Link to="/" className="nav-link">Home</Link></li>

              <li className="dropdown">
                <Link to="/design" className="nav-link">Design Process ▾</Link>
                <ul className="dropdown-content">
                  <li><a href="#/design#designRequirements" className="dropdown-link">Requirements</a></li>
                  <li><a href="#/design#functionalArchitecture" className="dropdown-link">Architecture</a></li>
                  <li><a href="#/design#designTradeStudies" className="dropdown-link">Trade Studies</a></li>
                  <li><a href="#/design#systemDesign" className="dropdown-link">System Design</a></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/implementation" className="nav-link">Implementation ▾</Link>
                <ul className="dropdown-content">
                  <li><a href="#/implementation#systemImplementation" className="dropdown-link">Project Implementation</a></li>
                  <li><a href="#/implementation#systemPerformance" className="dropdown-link">Project Performance</a></li>
                </ul>
              </li>

              <li className="dropdown">
                <Link to="/documentation" className="nav-link">Documentation ▾</Link>
                <ul className="dropdown-content">
                  <li><a href="#/documentation#projectManagement" className="dropdown-link">Project Management</a></li>
                  <li><a href="#/documentation#Media" className="dropdown-link">Media</a></li>
                  <li><a href="#/documentation#teamPage" className="dropdown-link">Team Page</a></li>
                  <li><a href="#/documentation#documents" className="dropdown-link">Documents</a></li>
                </ul>
              </li>

            </ul>
          </nav>
        </header>

        <div style={{ paddingTop: "9vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/design" element={<DesignProcessPage />} />
            <Route path="/implementation" element={<ImplementationPage />} />
            <Route path="/documentation" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
