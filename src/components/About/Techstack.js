import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb } from "react-icons/di";

import {
  SiCsswizardry,
  SiNextdotjs,
  SiTypescript,
  SiSolidity,
  SiMysql,
} from "react-icons/si";

import { TiHtml5 } from "react-icons/ti";
import { StackDetail } from "./StackDetail";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <TiHtml5 />
        <StackDetail>
          <div>
            - 각 태그의 역할에 대한 충분한 숙지 <br />
            - 이를 활용한 효율적인 화면 구성 가능 <br />- 시멘틱 태그 작성 가능{" "}
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsswizardry />
        <StackDetail>
          <div>
            - UI 라이브러리없이 디자인대로 화면 구성 및 애니메이션과 같은 효과
            추가 가능
            <br />
            - 리팩토링 가능하게끔 css 코드 작성 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <StackDetail>
          <div>
            - 전반적인 자바스크립트의 개념과 컨셉 이해
            <br />
            - 여러 메소드 적용하여 자유롭게 코드 작성 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <StackDetail>
          <div>
            - express로 서버구축 및 DB와 연동가능
            <br />
            - 사이트의 기본적인 CRUD 작업 가능
            <br />
            - RESTful한 API에 대한 고민을 하며 그에 기반한 라우터 작성 가능
            <br />
            - socket io 를 사용하여 같은 실시간 통신 구현 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <StackDetail>
          <div>
            - React의 동작 방식인 CSR에 대한 이해
            <br />
            - 컴포넌트별 상태 관리 및 전역 상태 관리에 능숙
            <br />
            - 재사용 가능한 함수형 컴포넌트 작성
            <br />
            - Redux-thunk, saga, RTK와 같은 상태 관리, 변경 툴 사용 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <StackDetail>
          <div>
            - Next의 pre-rendering 방식 SSR과 CSR에 대한 이해
            <br />
            - 라우팅, 이미지 최적화 등 Next가 제공하는 여러 기능 활용 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <StackDetail>
          <div>
            - 타입스크립트 기본 문법 이해
            <br />
            - 타입스크립트를 통한 객체 지향 프로그래밍 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
        <StackDetail>
          <div>
            - truffle을 통한 스마트 컨트랙트 작성 및 그에 따른 테스트 코드 작성,
            배포 가능
            <br />
            - ERC-20 기반 토큰과 ERC-721 기반 NFT에 대한 이해
            <br />
            - 메타마스크 연동 및 web3 라이브러리를 사용하여 Dapp 제작 가능
            <br />
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <StackDetail>
          <div>
            - DB schema 설정 및 데이터 추가, 조회, 수정, 삭제를 위한 query 문
            작성가능 <br /> - sequelize와 같은 ORM 라이브러리 사용 가능 <br />-
            관계형 DB 외에 NoSql 방식의 몽고 DB 기본적인 사용 가능{" "}
          </div>
        </StackDetail>
        <SiMysql />
        <DiMongodb />
      </Col>
    </Row>
  );
}

export default Techstack;
