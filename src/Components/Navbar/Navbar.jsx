import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const name = "Kashyap's Portfolio";
  const home = "Home";
  const aboutMe = "About Me";
  const work = "My Projects";
  const contactMe = "Contact Me";
  const cv = "Resume/CV";
  
  return (
    <div className="section-navbar">
      <div className="navbar row">
        <a href="/" className="col-md-2 link">
          <div className="listitems">
            <div className="name-container-main">
              {name.split("").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>
        </a>
        <a href="/" className="col-md-2 link">
          <div className="listitems">
            <div className="name-container">
              {home.split("").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>
        </a>
        <a href="#aboutMe" className="col-md-2 link">
          <div className="listitems">
            <div className="name-container">
              {aboutMe.split("").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>
        </a>
        <a href="#work" className="col-md-2 link">
          <div className="listitems">
            <div className="name-container">
              {work.split("").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>
        </a>
        <a href="#contactUs" className="col-md-2 link">
          <div className="listitems">
            <div className="name-container">
              {contactMe.split("").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>
        </a>
        <a href="/Resume.pdf" target="_blank" className="col-md-2 link" >
          <div className="listitems">
            <div className="name-container">
              {cv.split("").map((letter, index) => (
                <span key={index} className="name-letter">
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
