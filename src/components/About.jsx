import React from "react";
import { FaBars, FaSearch, FaUser, FaSun, FaTimes, FaHome, FaQuestion, FaGraduationCap, FaHeadset, FaStar, FaStarHalfAlt } from "react-icons/fa";
// import "./About.css"; // Make sure this CSS file is created
import pic1 from "../assets/images/pic-1.jpg"; // Adjust the path based on your folder structure
import aboutImg from "../assets/images/about-img.svg"; 
import pic2 from "../assets/images/pic-2.jpg";
import pic3 from "../assets/images/pic-3.jpg";
import pic4 from "../assets/images/pic-4.jpg";
import pic5 from "../assets/images/pic-5.jpg";
import pic6 from "../assets/images/pic-6.jpg";
import pic7 from "../assets/images/pic-7.jpg";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      
      <Header/>
      <Sidebar/>

      {/* About Section */}
      <section className="about">
        <div className="row">
          <div className="image">
            <img src={aboutImg} alt="About Us" />
          </div>
          <div className="content">
            <h3>Why Choose Us?</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolorum quasi illo?</p>
            <a href="/problems" className="inline-btn">Our Problems</a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews">
        <h1 className="heading">Student's Reviews</h1>
        <div className="box-container">
          {[pic2, pic3, pic4, pic5, pic6, pic7].map((pic, index) => (
            <div className="box" key={index}>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <div className="student">
                <img src={pic} alt={`Student ${index}`} />
                <div>
                  <h3>John Doe</h3>
                  <div className="stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </>
  );
};

export default About;
