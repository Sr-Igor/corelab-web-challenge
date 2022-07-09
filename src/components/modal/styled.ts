import styled from "styled-components";

export const Container = styled.div<{ dp: boolean; op: boolean }>`
  display: ${(props) => (props.dp ? "flex" : "none")};
  opacity: ${(props) => (props.op ? 1 : 0)};
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  transition: all ease 0.3s;
  height: 100vh;
  width: 100%;
  padding: 0px 20px;

  .md-container {
    width: 100%;
    height: 100%;
    background-color: #ececec;
    overflow-y: auto;
  }

  .back--area {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    img {
      width: 30px;
      cursor: pointer;
    }
  }

  .modal--area {
    background-color: #fff;
    height: auto;
    width: 100%;
    padding: 0 10px;
    margin-top: 40px;
  }

  @media (min-width: 426px) {
    background-color: #ececec;
    width: 100%;

    .md-container {
      width: 80%;
      background-color: #fff;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      z-index: 3;
      transition: all ease 0.3s;
      padding: 10px 20px;
    }
  }
`;
