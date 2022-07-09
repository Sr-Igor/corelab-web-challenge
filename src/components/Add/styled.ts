import styled from "styled-components";

export const Container = styled.div`
  padding: 2px;
  height: 50%;

  .error {
    margin: 10px;
    font-size: 12px;
    color: #fff;
    background-color: #bf2a23;
    padding: 10px;
  }

  form {
    padding: 20px;

    .input--area {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        margin-left: 10px;
        font-size: 14px;
      }

      input,
      select {
        padding: 5px 10px;
        border-radius: 20px;
        border: 0;
        border: 1px solid #777;
        outline: none;
        font-size: 15px;
        transition: all ease 0.2s;

        &:focus {
          border: 1px solid #c6d4e1;
        }
      }
    }
  }

  .button-area {
    height: 100px;
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 20px;

    .save {
      border: none;
      background-color: #82e2d1;
      padding: 10px 30px;
      font-size: 20px;
      border-radius: 20px;
      cursor: pointer;
    }
  }

  @media (min-width: 426px) {
    display: flex;
    flex-direction: column;

    .error {
      font-size: 18px;
      border-radius: 5px;
    }

    form {
      background-color: #ececec;
      margin: auto;
      min-width: 300px;
      width: 40%;

      .input--area {
        label {
          margin-left: 10px;
          font-size: 18px;
          font-weight: bold;
        }

        input,
        select {
          border: 0;
          padding: 10px 20px;

          &:focus {
            border: none;
          }
        }
      }
    }

    .button-area {
      background-color: #ececec;
      margin: auto;
      min-width: 300px;
      width: 40%;
      height: 50px;

      .save {
        border: none;
        background-color: #82e2d1;
        padding: 10px 30px;
        font-size: 20px;
        border-radius: 20px;
      }
    }
  }
`;
