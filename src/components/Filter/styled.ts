import styled from "styled-components";

export const Container = styled.div`
  .md-format {
    background-color: #fff;
    padding: 20px 5px;
  }

  form {
    .input--area {
      margin: 20px;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      label {
        margin-left: 10px;
        font-size: 14px;
      }

      input,
      select {
        padding: 10px 5px;
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

    .price--area {
      flex-direction: row;
      justify-content: space-around;

      .col {
        padding: 5px;
        flex-direction: column;
        width: 50%;

        input {
          font-size: 12px;
          padding: 5px 5px;
          max-width: 100%;
        }
      }
    }
  }

  .button-area {
    height: 100px;
    display: flex;
    justify-content: end;
    align-items: end;

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
    .md-format {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    form {
      background-color: #ececec;
      margin: auto;
      width: 60%;
      padding: 20px;

      .input--area {
        label {
          margin-left: 10px;
          font-size: 15px;
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
      width: 60%;
      padding: 20px;

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
