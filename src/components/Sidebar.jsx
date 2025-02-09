import React from "react";
import "../App.css";
import profilePic from "../assets/images/pic-1.jpg"; // Replace with actual image path

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div id="close-btn">
        <i className="fas fa-times"></i>
      </div>

      <div className="profile">
        <img src={profilePic} className="image" alt="Profile" />
        <h3 className="name">Shaikh Anas</h3>
        <p className="role">Student</p>
        <a href="/profile" className="btn">View Profile</a>
      </div>

      <nav className="navbar">
        <a href="/"><i className="fas fa-home"></i><span>Home</span></a>
        <a href="/about"><i className="fas fa-question"></i><span>About</span></a>
        <a href="/problems"><i className="fas fa-graduation-cap"></i><span>Problems</span></a>
        <a href="/contact"><i className="fas fa-headset"></i><span>Contact Us</span></a>
      </nav>
    </div>
  );
};

export default Sidebar;
