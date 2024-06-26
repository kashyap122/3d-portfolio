import React from "react";
import "../AboutMe/AboutMe.css";
import WebDevObj from "../WebDev/WebDebObj";
import "bootstrap/dist/css/bootstrap.css";

const AboutMe = () => {
  return (
    <div className="section-about-me">
      <div className="about-me">
        <div className="col-md-6 left-about-me">
      <WebDevObj />
        </div>
        <div className="col-md-6 right-about-me">
          <div className="left-up">
            <div className="title-about-me">About Me</div>
            <hr />
            <p className="paragraph-about-me">
            As an ambitious Full-Stack Developer, I am in my final year of MCA at Nirma University and seeking a role in an established IT company To secure a position in a dynamic organization where I can continuously enhance my skills and knowledge.
            </p>
            <p className="paragraph-about-me">
            If I had to define myself in one sentence, I would say I'm a good person, a cinema enthusiast, a travel lover and tech-obsessed.
            </p>
          </div>
          <div className="left-down">
            <ul className="list-about-me">
              <li className="list-about-me-item">Full Stack Web Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
