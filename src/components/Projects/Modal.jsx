import "./ModalStyles.css";
export const Modal = ({ target, title, intro, myJob, stack, outcome }) => {
  const render = (arr) => {
    return arr.map((v, i) => {
      return <p key={i}>{v}</p>;
    });
  };

  return (
    <div
      className="modal fade modal-wrapper"
      id={target}
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog " role="document">
        <div class="modal-wrap modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {title}
            </h5>
          </div>
          <div class="modal-body">
            <div className="intro">
              <span className="subject">프로젝트 소개</span>
              <p>{intro}</p>
            </div>
            <div className="my-job">
              <span className="subject">나의 주요 업무</span>
              {render(myJob)}
            </div>
            <div className="stack">
              <span className="subject">사용 기술</span>
              {render(stack)}
            </div>
            <div className="outcome">
              <span className="subject">프로젝트 성과 및 배운점</span>
              {render(outcome)}
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
