import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import NRICM101_Map from "../../Assets/Projects/Taiwan-NRICM101-Map.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import kaggleCard from "../../Assets/Projects/Kaggle-Profile-Card-API.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NRICM101_Map}
              isBlog={false}
              title="Taiwan NRICM101 Map"
              description="Creator of a responsive med info map, shows the metadata of nearby clinics for those who were infected or weren’t, in need of finding the NRICM101 treatment for Covid-19 (average 1,000+ daily visitors). Integrated government data with Leaflet (open-source JavaScript map library), and hosted serverless using Vercel, GitHub, and MongoDB."
              ghLink="https://github.com/chienhsiang-hung/NRICM101-map"
              demoLink="https://chienhsiang-hung.github.io/NRICM101-map/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kaggleCard}
              isBlog={false}
              title="Kaggle Profile Card API"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
