import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn, FaKaggle } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          {/* <h3>Designed and Developed by Soumyajit Behera</h3> */}
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2022 - {year} <a href="/#" style={{ textDecoration:"inherit", color:"inherit" }}>HCH</a></h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/chienhsiang-hung/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/iamchienhsianghung/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/chien-hsiang-hung/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/hung_chienhsiang/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://hungchienhsiang.medium.com/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMediumCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.kaggle.com/chienhsianghung/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaKaggle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
