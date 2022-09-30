import styled from "styled-components";

export const StackDetail = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  &:hover {
    opacity: 1;
  }

  > div {
    height: 100%;
    font-size: 12px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    text-align: start;
  }
`;
