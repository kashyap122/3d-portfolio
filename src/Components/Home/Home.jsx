import React from "react";
import "../Home/Home.css";
import Navbar from "../Navbar/Navbar";
import line from "../../Images/line.png";
import DesktopObj from "../Desktop/DesktopObj";
import "bootstrap/dist/css/bootstrap.css";


const Home = () => {
  return (
    <div className="section" id="home">
      <Navbar />
      <div className="hero row">
        <div className="left col-md-6">
          <div className="title-home">Working through the night to bring wise ideas to light.</div>
          <div className="what-we-do">
            <img src={line} alt="line" />
            <div className="subtitle">Hello! I'm Kashyap Chauhan.</div>
          </div>
          <div className="description">I enjoy delightful, human-centered digital experiences.</div>
          <button className="button-learn-more">Learn more</button>
        </div>
        <div className="right col-md-6">
          <DesktopObj/>
        </div>
      </div>
    </div>
  );
};

export default Home;
