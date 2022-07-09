import styled from "styled-components";

export const Container = styled.div<{ overflow: string }>`
  .container-mb {
    padding: 30px;
    min-height: 100vh;
    background-color: #ececec;
  }

  .search--area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    position: relative;

    .search--box {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 15px;
        height: 15px;
        left: 0;
        margin-left: 20px;
        position: absolute;
      }

      input {
        width: 100%;
        height: 40px;
        background-color: #c4e8e2;
        border: none;
        border-radius: 20px;
        padding: 10px 50px;
        outline: none;
      }
    }

    .filter-box {
      display: flex;
      margin-left: 10px;
      cursor: pointer;

      img {
        width: 20px;
      }
    }
  }

  .button-area {
    width: 100%;

    .button--add {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      postion: relative;
      padding: 15px 20px;
      border: none;
      border-radius: 30px;
      font-weight: 600;
      color: #3e6b63;
      background-color: #80dfce;
      font-size: 16px;
      cursor: pointer;

      img {
        width: 16px;
        position: absolute;
        left: 0;
        margin-left: 50px;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .vehicles--area {
    margin-top: 30px;
    padding: 20px;

    .empty {
      text-align: center;
      font-weight: bold;
      color: #444;
    }

    .title {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .all--area {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .un--vehicles {
        margin: 15px 0px;
        width: 200px;
        margin: 5px;

        .header--box {
          border: 1px solid #ccc;
          display: flex;
          justify-content: end;
          padding: 2px;
          background-color: #fff;

          img {
            width: 15px;
            margin: 5px;
            cursor: pointer;
          }
        }

        .body--box {
          padding: 10px;
          font-size: 12px;
          border: 1px solid #ccc;
          height: 160px;

          div {
            margin-bottom: 5px;
          }

          .tl-vehicle {
            font-size: 15px;
          }
        }
      }
    }
  }

  @media (min-width: 769px) {
    background-color: #ececec;
    display: flex;
    justify-content: center;
    align-items: center;

    .container-mb {
      padding: 60px;
      width: 80%;
      background-color: #fff;
    }

    .search--area {
      margin-bottom: 20px;

      .search--box {
        width: 100%;

        img {
          width: 25px;
          height: 25px;
        }

        input {
          height: 60px;
          border-radius: 30px;
          font-size: 20px;

          &::placeholder {
            font-size: 20px;
          }
        }
      }

      .filter-box {
        img {
          width: 35px;
        }
      }
    }

    .button-area {
      display: flex;
      justify-content: center;
      align-items: center;

      .button--add {
        width: 40%;
        padding: 15px 20px;
        color: #555;
        font-size: 22px;

        img {
          display: none;
        }
      }
    }

    .vehicles--area {
      padding: 0;
      .empty {
        font-size: 20px;
      }

      .title {
        font-size: 25px;
        text-align: center;
      }

      .all--area {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0px 0px;

        .un--vehicles {
          margin: 15px 3px;
        }
      }
    }
  }
`;
