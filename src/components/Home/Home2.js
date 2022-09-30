import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              저에 대해 <span className="purple"> 소개합니다. </span>
            </h1>
            <p className="home-about-body">
              저는 의류학과를 졸업하여 5년간 미주 의류 해외영업, 의류벤더로서
              5년간 근무했습니다. 매번 바이어의 뒤에서 일했고, 매 시즌 같은
              루틴의 업무를 반복했기에 한 서비스 내에서의 주체적인 역할과 자기
              성장에 목말랐습니다. 그렇기에 어느 직업보다 주체적으로 일할 수
              있고, 자기 성장이 끊임없이 필요한 개발자에 큰 매력을 느껴
              2022년부터 개발 공부를 시작하게 되었습니다!
              <br />
              <br />
              또한 많은 인력, 자원이 필요한 서비스들과 달리, 한 웹/앱 서비스는
              소수의 인원만 갖춰도, 심지어 한 사람만 있어도 어느 서비스들보다 큰
              가치를 창출할 수 있다는 게 가장 큰 매력이자 power라고 생각합니다.
              <br />
              <br />
              저는 <b className="purple">Node.js의 express</b> 기반으로 서버를
              구축하고 <b className="purple">React 혹은 Next js </b> 프레임 워크
              기반의 프론트 작업을 즐겨하고 잘합니다.
              <br />
              <br />
              저는 개발뿐만 아니라 소비자가 바로 마주하는, 즉 서비스의 첫인상을
              결정하는 디자인적인 요소도 중요하다고 생각하여 &nbsp;
              <b className="purple">
                시각적으로도 경험적으로도 소비자를 만족시킬 수 있는{" "}
              </b>{" "}
              서비스를 만들어나갈 개발자가 되고자 합니다.
              <br />
              <br />
              &nbsp;
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
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
