import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Problems from "../components/Problems";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <Problems />
      <Footer />
    </div>
  );
};

export default Home;
