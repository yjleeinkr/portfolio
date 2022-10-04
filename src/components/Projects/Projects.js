import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/pj1.gif";
import project2 from "../../Assets/Projects/pj2.gif";
import project3 from "../../Assets/Projects/pj3.gif";
import project4 from "../../Assets/Projects/pj4.gif";
import project5 from "../../Assets/Projects/pj5.gif";
import Button from "react-bootstrap/Button";
import { Modal } from "./Modal";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", margin: "0px" }}>
          2022년 2월 ~ 2022년 9월까지 작업했던 프로젝트입니다.
        </p>
        <p style={{ color: "#1872CB" }}>
          각 카드를 클릭하면 상세 내용을 확인할 수 있습니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col
            md={4}
            className="project-card"
            data-toggle="modal"
            data-target="#project5"
          >
            <Modal
              target="project5"
              title="NFT 음원 거래 및 스트리밍 사이트"
              intro=" 첫 기업 협약 프로젝트로 metatrend라는 기업과 협업하여 nft 음원을 민팅하고 판매, 구매, 경매 및 음원을 스트리밍할 수 있는 사이트인 Dapptunes 라는 사이트를 제작했습니다.  블록체인을 이용하여 조회수에 따른 수익을 메타마스크라는 지갑을 통해 바로 수익을 출금할 수 있게끔 만들어 기존 음원 스트리밍 플랫폼에 대한 문제점인 창작자에게 불합리한 수익 구조 및 분기별 정산 시스템을 해결하여 창작자의 권리 보장에 초점을 맞췄던 프로젝트였습니다. "
              myJob={[
                "- git 관리 및 전체 팀원들 코드 리뷰 및 수정, 에러 확인",
                "- 도커를 사용하여 POA 기반 테스트용 private network 구축",
                "- 전역 플레이어 및 플레이리스트 기능",
                "- 미구독자의 경우 미리듣기 30초, 구독자의 경우 전체 듣기 기능 및 재생수(조회수) 기능 구현",
                "- 민팅(음원 발행) 시 피나타 및 구글 클라우드로 사진 및 오디오 파일 업로드 기능",
                "- 메타마스크와 web3 라이브러리를 이용한 음원 토큰 즉시 판매 및 구매 기능 구현",
              ]}
              stack={[
                "- Front-End : Next + Typescript / RTK 로 상태 관리, axios",
                "- Back-End : NodeJS, web3",
                "- DB :   MongoDB Atlas",
                "- Deploy : 프론트는 vercel 로, 백은 AWS EC2로 배포",
                "- Docker : ethereum-client/go 라는 도커 이미지 파일을 활용, compose 파일 작성하여 POA 기반 private network 구축",
              ]}
              outcome={[
                "- 기업 측에서 해당 프로젝트를 실제 서비스로 상용화할 계획 중입니다.",
              ]}
            />
            <ProjectCard
              imgPath={project5}
              isBlog={false}
              title="nft 음원 거래 사이트 Dapptunes"
              description="metatrend 라는 기업과의 협업하여 nft 음원을 민팅하고 판매, 구매, 경매 및 스트리밍할 수 있는 사이트인 Dapptunes를 제작했습니다. Docker를 사용하여 테스트용 프라이빗 네트워크를 만들고, Next js 기반 프론트를 구축, Redux tool kit으로 전역 상태를 관리하는 방법을 익혔습니다. 기업과의 협약 프로젝트이자 장기 프로젝트의 팀장 역할이었기에 무엇보다도 협업사 측과의 의사소통, 팀원들의 페이스 조절에 힘썼던 프로젝트입니다."
              role="팀장 및 네트워크 구축, 민팅, 토큰 판매, 플레이어 기능"
              period="2022/08/19~2022/09/26"
              ghLink="https://github.com/acentmeta"
              demoLink="https://team-1-nft-unes-fe.vercel.app/"
              isVideo="https://www.youtube.com/watch?v=NHfNNjui88Q"
            />
          </Col>
          <Col
            md={4}
            className="project-card"
            data-toggle="modal"
            data-target="#project4"
          >
            <Modal
              target="project4"
              title="block explorer 사이트"
              intro="이더리움 네트워크 상의 블록과 거래 정보를 조회할 수 있는 EtherScan과 같은 컨셉으로 만든 사이트입니다. 채굴된 블럭과 발생한 거래 정보를 실시간으로 조회 및 검색 가능하며 화려한 기능 구현보다는 기존의 EtherScan의 역할에 집중하여 정보의 실시간 제공과 React를 통한 부드러운 페이지 전환이 목표인 프로젝트였습니다."
              myJob={[
                "- geth (이더리움 클라이언트 소프트웨어)를 통한 프라이빗 네트워크 구축",
                "- socket.io와 web3 라이브러리를 사용하여 실시간으로 정보 조회 가능하게끔 구현",
              ]}
              stack={[
                "- Front-End : React,  axios",
                "- Back-End : NodeJS, web3",
                "- DB :  MySql - Sequelize 사용",
              ]}
              outcome={[
                "- socket.io와 web3 라이브러리를 같이 사용하여 실시간 블록체인 네트워크 상에 업데이트된 데이터들을 다루는 방법을 익히게 되었습니다.",
              ]}
            />
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
          <Col
            md={4}
            className="project-card"
            type="button"
            data-toggle="modal"
            data-target="#project3"
          >
            <Modal
              target="project3"
              title="Android App 술자리의 민족"
              intro="건배사하기 민망했던 경험들에서 아이디어를 얻고 만든 앱입니다. 회식자리 또는 편한 술자리에서 가볍게 사용할 수 있는 랜덤 건배사와 술게임 설명서가 있으며 Expo 기반으로 제작한 후 구글 플레이스토어에 배포한 앱입니다."
              myJob={[
                "- 피그마로 미리 화면을 구성하여 필요한 데이터에 대한 방향성 잡기",
                "- 건배사 쪽 랜덤 화면 작업 및 데이터 수집",
                "- 구글 플레이스토어 배포",
              ]}
              stack={["- Front-End : React Native + Expo"]}
              outcome={[
                "- React Native로 앱 제작하는 방법을 배웠고, 앱 배포 과정에 대해서도 파악하게 되었습니다.",
              ]}
            />
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
          <Col
            md={4}
            className="project-card"
            type="button"
            data-toggle="modal"
            data-target="#project2"
          >
            <Modal
              target="project2"
              title="중고거래/경매 사이트 Carrot world"
              intro=" 당근마켓과 중고나라를 모티브로 한 웹사이트, 일명 당근 나라로, 일반적인 중고 거래뿐만 아니라 socket을 통한 경매 및 채팅이 가능한 웹사이트입니다. 로컬 로그인, 회원가입 뿐만 아니라 사용자 편의를 위한 카카오, 네이버, 구글 로그인을 passport를 활용하여 구현했으며, 고객센터 게시판 기능 및 관리자 페이지에서 회원 관리 및 판매, 경매글의 좋아요, 조회수 등에 관한 통계도 확인 할 수 있는 사이트입니다."
              myJob={[
                "- socket.io를 사용한 실시간 채팅 기능 및 채팅방 구현",
                "- 고객센터 게시판 CRUD 및 댓글 기능 구현",
                "- 로컬 로그인, 회원가입, 폼체크 기능 구현",
              ]}
              stack={[
                "- Front-End : NodeJS,  axios",
                "- Back-End : NodeJS, socket.io, JWT, passport",
                "-DB : MySQL",
              ]}
              outcome={[
                "- Express로 프론트, 백 서버를 각각 구축하여 axios를 통해 프론트-백 간의 비동기 통신 처리에 익숙해질 수 있었습니다.",
                "- socket.io 개념 및 이를 통한 실시간 채팅에 대해서 익힐 수 있었습니다.",
              ]}
            />
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
          <Col
            md={4}
            className="project-card"
            type="button"
            data-toggle="modal"
            data-target="#project1"
          >
            <Modal
              target="project1"
              title="Node JS 첫 1주 미니 프로젝트"
              intro="개발 공부 시작 후 첫 팀프로젝트였습니다. Node JS 환경에서 express로 서버를 구축하고 DB를 활용하여 로컬 사용자 로그인, 회원가입 기능, 게시판 CRUD, 관리자 페이지에서 회원 등급 및 게시글 관리 등 기본적인 웹사이트의 구조, 기능을 익힐 수 있었던 프로젝트였습니다."
              myJob={[
                "- 전체 팀원들 코드 리뷰 및 수정",
                "- 전 페이지 프론트 구성 및 nunjucks라는 템플릿 엔진을 사용하여 백에서 받은 데이터로 화면 구성",
              ]}
              stack={["- Front-End/Back-End : NodeJS", "- DB : MySQL"]}
              outcome={[
                "- 데이터 베이스와 백 서버와의 연결 작업 및 테이블 스키마 설정에 대해서 익힐 수 있었습니다.",
                "- 페이지의 기본 기능인 CRUD에 대해서 완벽하게 이해하고 RESTful한 API 작성에 대해서도 배울 수 있었습니다.",
              ]}
            />
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="Node JS 첫 1주 미니 프로젝트"
              description="예비 개발자로서의 첫 팀프로젝트였습니다. Node Js 환경에서 javascript와 nunjucks 템플릿 엔진을 사용하여 프론트화면을 작업하였고, express로 서버를 구축, DB는 mysql을 사용하여 가장 기본적인 작업인 사용자 로그인/회원가입, 게시판 CRUD, 관리자 페이지 작업을 했습니다."
              role="팀장 및 프론트 작업"
              period="2022/02/21~2022/02/25"
              ghLink="https://github.com/yjleeinkr/TeamProject"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
