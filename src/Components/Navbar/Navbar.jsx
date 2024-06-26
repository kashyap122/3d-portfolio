import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const name = "Kashyap's Portfolio";
  const home = "Home";
  const aboutMe = "About Me";
  const work = "My Projects";
  const contactMe = "Contact Me";

  return (
    <div className="section">
      <div className="navbar">
        <div className="links">
          <div className="list">
            <div className=""></div>
            <div className="listitems ">
              <div className="name-container-main">
                {name.split("").map((letter, index) => (
                  <span key={index} className="name-letter">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="listitems ">
              <div className="name-container">
                {home.split("").map((letter, index) => (
                  <span key={index} className="name-letter">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="listitems ">
              <div className="name-container">
                {aboutMe.split("").map((letter, index) => (
                  <span key={index} className="name-letter">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="listitems ">
              <div className="name-container">
                {work.split("").map((letter, index) => (
                  <span key={index} className="name-letter">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>
            <div className="listitems ">
              <div className="name-container">
                {contactMe.split("").map((letter, index) => (
                  <span key={index} className="name-letter">
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
