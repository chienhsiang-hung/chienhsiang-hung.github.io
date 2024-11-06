import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiMicrosoftazure,
  SiVisualstudiocode,
  SiVercel,
  SiCloudflare,
  SiHarbor,
  SiKubernetes,
  SiArgo,
  SiAzuredevops,
  SiGooglecolab,
  SiJupyter
} from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BiLogoAws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHarbor />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArgo />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
    </Row>
  );
}

export default Toolstack;
