import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import { projects_list } from "./projects-list";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Just for <strong className="purple">fun!</strong>
        </h1>
        <p style={{ color: "white" }}>
          {"Here are a few Side-projects I've worked on previously amaturely :)"}
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
      </Container>
    </Container>
  );
}

export default Projects;
