import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            저는 의류학과를 졸업하여 5년간 미주 의류 해외영업, 의류벤더로서
            근무했습니다. 매번 바이어의 뒤에서 일했고, 매 시즌 같은 루틴의
            업무를 반복했기에 주체적인 역할과 자기 성장에 목말랐습니다. 그렇기에
            <b className="purple">
              {" "}
              어느 직업보다 주체적으로 일할 수 있고, 자기 성장이 끊임없이 필요한
              개발자에 큰 매력을 느껴{" "}
            </b>
            2022년부터 개발 공부를 시작하게 되었습니다!
            <br />
            <br />
            많은 인력, 자원이 필요한 일들과 달리, 한 웹/앱 서비스는 소수의
            인원만 갖춰도, 심지어 한 사람의 개발자만 있어도 어느 서비스들보다 더
            큰 가치를 창출할 수 있다는 게 가장 큰 매력이자 power라고 생각합니다.
            <br />
            <br />
            저는 <b className="purple">React 혹은 Next js </b> 프레임 워크
            기반의 프론트와 <b className="purple">Node.js의 express</b> 로
            구축한 백 간의 데이터 통신에 능숙하며 사용자 친화적인 화면 구성 및
            css 작업 하는 것에 흥미를 느낍니다.
            <br />
            <br />
            저는 개발뿐만 아니라 소비자가 바로 마주하는, 즉 서비스의 첫인상을
            결정하는 디자인적인 요소도 중요하다고 생각하여 &nbsp;
            <b className="purple">
              시각적으로도 소비자의 서비스 경험을 극대화시킬 수 있는 개발자
            </b>
            가 되고자 합니다.
            <br />
            <br />
            &nbsp; 코딩 하는 시간 외에는 아래의 취미를 즐깁니다.
          </p>
          <ul>
            <li className="about-activity"> ✔️ 캠핑 🏕 과 드라이브 🚘</li>
            <li className="about-activity"> ✔️ 요가 🧘🏻‍♀️</li>
            <li className="about-activity"> ✔️ 독서 📚</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
