import React from "react";
import "../App.css";
import dsa from "../assets/images/dsa.jpg";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Problems = () => {
  return (
    <>
    <Header/>
    <Sidebar/>
    <section className="Problems">
      <h1 className="heading">Our Problems</h1>

      <div className="box-container">
        <div className="box">
          <div className="thumb">
            <img src={dsa} alt="HTML Tutorial" />
            
          </div>
          <h3 className="title">Complete HTML Tutorial</h3>
          <a href="/playlist" className="inline-btn">View Playlist</a>
        </div>

        <div className="box">
          <div className="thumb">
            <img src={dsa} alt="CSS Tutorial" />
            
          </div>
          <h3 className="title">Complete CSS Tutorial</h3>
          <a href="/playlist" className="inline-btn">View Playlist</a>
        </div>

        <div className="box">
          <div className="thumb">
            <img src={dsa} alt="JS Tutorial" />
            
          </div>
          <h3 className="title">Complete JS Tutorial</h3>
          <a href="/playlist" className="inline-btn">View Playlist</a>
        </div>
        <div className="box">
          <div className="thumb">
            <img src={dsa} alt="JS Tutorial" />
            
          </div>
          <h3 className="title">Complete JS Tutorial</h3>
          <a href="/playlist" className="inline-btn">View Playlist</a>
        </div>

        <div className="box">
          <div className="thumb">
            <img src={dsa} alt="JS Tutorial" />
            
          </div>
          <h3 className="title">Complete JS Tutorial</h3>
          <a href="/playlist" className="inline-btn">View Playlist</a>
        </div>
        <div className="box">
          <div className="thumb">
            <img src={dsa} alt="JS Tutorial" />
            
          </div>
          <h3 className="title">Complete JS Tutorial</h3>
          <a href="/playlist" className="inline-btn">View Playlist</a>
        </div>
      </div>

    </section>
    <Footer/>
    </>
  );
};

export default Problems;
