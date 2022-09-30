import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home_main.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                <span className="wave" role="img" aria-labelledby="wave">
                  👩🏻‍💻{" "}
                </span>
                안녕하세요
              </h1>

              <h1 className="heading-name">
                좋은 서비스에 대해 고민할 줄 아는
                <br />
                <strong className="main-name">
                  {" "}
                  신입 개발자 이연정입니다.
                </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "500px", width: "600px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
