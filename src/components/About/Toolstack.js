import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPostman, SiVercel, SiFigma } from "react-icons/si";
import { StackDetail } from "./StackDetail";

import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <StackDetail>
          <div>- 4번의 팀 프로젝트로 협업 가능할 정도의 git 사용 가능</div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <StackDetail>
          <div>
            - 프론트 화면 없이도 백 서버 쪽 API에 요청을 보내어 응답 확인 가능
          </div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <StackDetail>
          <div>- 버셀로 배포 가능</div>
        </StackDetail>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <StackDetail>
          <div>
            - 팀 프로젝트동안 필요한 데이터 및 API 파악 및 프론트 작업 방향성을
            위해 피그마로 화면 레이아웃 미리 구성
          </div>
        </StackDetail>
      </Col>
    </Row>
  );
}

export default Toolstack;
