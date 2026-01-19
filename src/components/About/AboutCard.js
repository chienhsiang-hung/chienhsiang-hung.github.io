import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hsiang, </span>
            from <span className="purple"> Taiwan.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Snowboarding
            </li>
            <li className="about-activity">
              <ImPointRight /> Scuba Diving
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Bouldering
            </li>
            <li className="about-activity">
              <ImPointRight /> Break Dancing
            </li>
          </ul>

          <p style={{ color: "#8898c0" }}>
            "Live the life like you never did!"{" "}
          </p>
          <footer className="blockquote-footer">Hsiang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
