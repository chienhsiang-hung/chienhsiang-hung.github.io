import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ContactUs } from "./Contact";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* <p>
              <a href="https://github.com/chienhsiang-hung" target="_blank">
                <img alt="GitHub followers" src="https://img.shields.io/github/followers/chienhsiang-hung"></img>
              </a>
            </p> */}
            <p className="home-about-body">
              I am an <b className="purple">Software Engineer</b> at <b>TSMC</b> IT Department.
              <br /><br />
              Whenever I get the chance,
              <br />
              I love developing products with <i><b className="purple">Python/Java</b></i> and modern <i><b className="purple">JavaScript (TypeScript)</b></i> libraries and frameworks like <i><b className="purple">React.js and Next.js</b></i>.
              <br />
              Plus, I've got some solid experience with cloud platforms like <i><b className="purple">Azure and AWS</b></i>.
              <br /><br />
              On top of that, I'm well-versed in containerization and microservices, using tools like <i><b className="purple">Kubernetes (k8s), ArgoCD, and Harbor</b></i>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chienhsiang-hung/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chien-hsiang-hung/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hung_chienhsiang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://hungchienhsiang.medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
            <ContactUs />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
