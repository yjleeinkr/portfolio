import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import myImg from "../../Assets/avatar.jpeg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              저를 간략히 <strong className="purple">소개합니다.</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={myImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          활용 가능한 <strong className="purple">기술 스택 </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">개발 시 사용 가능한 툴</h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
