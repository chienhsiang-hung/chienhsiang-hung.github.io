import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import NRICM101_Map from "../../Assets/Projects/Taiwan-NRICM101-Map.png";
import kaggleCard from "../../Assets/Projects/Kaggle-Profile-Card-API.png";
import MediumtoWb from "../../Assets/Projects/Embed-Medium-on-Website.png";
import projects from './projects.json';
import { projects_list } from "./projects-list";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {projects_list.map((_, index) => (
          // Create a new row every 3 projects
          index % 3 === 0 ? (
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              {projects_list.slice(index, index+3).map((proj) => (
                <Col md={6} lg={4} className="project-card">
                  <ProjectCard
                    imgPath={proj.imgPath}
                    isBlog={false}
                    title={proj.title}
                    description={proj.description}
                    ghLink={proj.ghLink}
                    demoLink={proj.demoLink}
                  />
                </Col>
              ))}
            </Row>
          ) : null
        ))}


        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={NRICM101_Map}
              isBlog={false}
              title="Taiwan NRICM101 Map"
              description="Creator of a responsive med info map, shows the metadata of nearby clinics for those who were infected or weren’t, in need of finding the NRICM101 treatment for Covid-19 (average 1,000+ daily visitors). Integrated government data with Leaflet (open-source JavaScript map library), and hosted serverless using Vercel, GitHub, and MongoDB."
              ghLink="https://github.com/chienhsiang-hung/NRICM101-map"
              demoLink="https://chienhsiang-hung.github.io/NRICM101-map/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={kaggleCard}
              isBlog={false}
              title="Kaggle Profile Card API"
              description="Developed an API by Web Scraping competition data and presented through designing on HTML and CSS / SVG (serves stainless by embedding through HTML or Markdown), deployed on Vercel with Python for Kagglers to display their Kaggle profile at any time, everywhere, and effortlessly. It’s used in more than 10 countries."
              ghLink="https://github.com/chienhsiang-hung/kaggle-profile-summary-card"
              demoLink="https://chienhsiang-hung.github.io/kaggle-profile-summary-card/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={MediumtoWb}
              isBlog={false}
              title="Embed Medium on Website"
              description="This is a free and simple guide through that you can finally embed your medium grid to your website by yourself without worrying about your personal info being packed by 3rd party APIs. #javascript #jquery"
              ghLink="https://github.com/chienhsiang-hung/embed-medium-blog-on-website"
              demoLink="https://chienhsiang-hung.github.io/embed-medium-blog-on-website/RWD"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
