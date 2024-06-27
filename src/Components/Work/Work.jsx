import React from "react";
import "./Work.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectone from "../../Images/ticTacToe.png";
import projecttwo from "../../Images/recipeFinder.png";
import projectthree from "../../Images/kanban.png";
import projectfour from "../../Images/portfolio.png";
import "bootstrap/dist/css/bootstrap.css";
import "./Work.css";

const Work = () => {
  return (
    <div className="section-work" id="work">
      <div className="title-work">My Projects</div>
      <hr className="work-hr"/>
      <div className="container row">
        <div className="col-md-3 project">
          <Card className="card-work" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projectfour} />
            <Card.Body>
              <Card.Title className="Title-card">3D Porfolio</Card.Title>
              <Card.Text className="text-card">
                3D Portfolio that you're already on right now feel free to
                explore code
              </Card.Text>
              <Button className="button-work"
                variant="secondary button"
                href="https://github.com/kashyap122/3d-portfolio.git"
                target="_blank"
              >
                Explore Code
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 project">
          <Card className="card-work" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projectthree} />
            <Card.Body>
              <Card.Title className="Title-card">Kanban Board</Card.Title>
              <Card.Text className="text-card">
                An Advance version of To Do List with Drag and Drop
                functionality
              </Card.Text>
              <Button className="button-work"
                variant="secondary button"
                href="https://github.com/kashyap122/kanban-board.git"
                target="_blank"
              >
                Explore Code
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 project">
          <Card className="card-work" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projecttwo} />
            <Card.Body>
              <Card.Title className="Title-card">Recipe Finder</Card.Title>
              <Card.Text className="text-card">
                Recipe Finder with ReactJS and API integration.
              </Card.Text>
              <Button className="button-work"
                variant="secondary button"
                href="https://github.com/kashyap122/recipe-finder.git"
                target="_blank"
              >
                Explore Code
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 project">
          <Card className="card-work" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={projectone} />
            <Card.Body>
              <Card.Title className="Title-card">Tic Tac Toe</Card.Title>
              <Card.Text className="text-card">
                A Simple Tic Tac Toe Game With pure HTML, CSS and JavaScript.
              </Card.Text>
              <Button className="button-work"
                variant="secondary button"
                href="https://github.com/kashyap122/Tic-Tac-Toe.git"
                target="_blank"
              >
                Explore Code
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Work;
