import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/pj1.gif";
import project2 from "../../Assets/Projects/pj2.gif";
import project3 from "../../Assets/Projects/pj3.gif";
import project4 from "../../Assets/Projects/pj4.gif";
import project5 from "../../Assets/Projects/pj5.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          2022년 2월 ~ 2022년 9월까지 작업했던 프로젝트입니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Node JS 첫 1주 미니 프로젝트"
              description="예비 개발자로서의 첫 팀프로젝트였습니다. Node Js 환경에서 javascript와 nunjucks 템플릿 엔진을 사용하여 프론트화면을 작업하였고, express로 서버를 구축, DB는 mysql을 사용하여 가장 기본적인 작업인 사용자 로그인/회원가입, 게시판 CRUD, 관리자 페이지 작업을 했습니다."
              role="팀장 및 프론트 작업"
              period="2022/02/21~2022/02/25"
              ghLink="https://github.com/yjleeinkr/TeamProject"
              // demoLink="https://chatify-49.web.app/"
            ></ProjectCard>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="중고거래/경매 사이트 Carrot world"
              description="당근마켓과 중고나라를 모티브로 한 웹사이트, 일명 당근나라를 구현해보았습니다. express로 프론트, 백 서버를 각각 구축하여 axios를 통해 프론트-백 간의 비동기 통신 처리에 익숙해 질 수 있었던 프로젝트였습니다. 또한, 중고 거래 시 사용자의 편의성을 고려하여 socket.io를 통한 실시간 채팅 기능을 구현하는 방법도 익힐 수 있었습니다."
              role="채팅 기능, 게시판 CRUD, 댓글, 로그인/회원가입"
              period="2022/03/21~2022/04/08"
              ghLink="https://github.com/yjleeinkr/carrot_world"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="Android App 술자리의 민족"
              description="Expo 기반의 안드로이드 앱을 제작하여 구글플레이스토어에 배포하였습니다. 회식자리 때 건배사하기 민망했던 경험들에서 아이디어를 얻고 만든 앱입니다. React Native를 깊게 활용한 건 아니지만, 웹이 아닌 첫 앱 개발이었고 실제로 플레이스토어에 배포해본 만큼 매우 의미있었던 프로젝트입니다."
              role="전반적인 UI 프론트 작업"
              period="2022/05/16~2022/05/30"
              ghLink="https://github.com/yjleeinkr/Project_Drunken_Korean"
              demoLink="https://play.google.com/store/apps/details?id=com.jjlee.drunkenKorean"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              isBlog={false}
              title="이더리움 기반 Block Explorer 사이트"
              description="geth를 사용하여 이더리움 기반 private 블록체인 네트워크를 구축하고, socket.io와 web3 라이브러리를 사용하여 발생한 트랜잭션과 채굴된 블록 정보를 실시간으로 조회할 수 있는 사이트를 만들었습니다. 화려한 기능 구현보다는 기존의 etherscan의 역할에 집중하여 블록, 트랜잭션의 실시간 정보 제공과 React를 통한 부드러운 페이지 전환이 목표였던 프로젝트입니다."
              role="개인 프로젝트 "
              period="2022/07/04~2022/07/08"
              ghLink="https://github.com/yjleeinkr/lovebug_explorer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="nft 음원 거래 사이트 Dapptunes"
              description="metatrend 라는 기업과의 협업하여 nft 음원을 민팅하고 판매, 구매, 경매 및 스트리밍할 수 있는 사이트인 Dapptunes를 제작했습니다. Docker를 사용하여 테스트용 프라이빗 네트워크를 만들고, Next js 기반 프론트를 구축, Redux tool kit으로 전역 상태를 관리하는 방법을 익혔습니다. 기업과의 협약 프로젝트이자 장기 프로젝트의 팀장 역할이었기에 무엇보다도 협업사 측과의 의사소통, 팀원들의 페이스 조절에 힘썼던 프로젝트입니다."
              role="팀장 및 네트워크 구축, 민팅, 토큰 판매, 플레이어 기능"
              period="2022/08/19~2022/09/26"
              ghLink="https://github.com/acentmeta"
              demoLink="https://team-1-nft-unes-fe.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
