import styled from "styled-components";

export const Container = styled.div`

  img {
    width: 296px;
    height: 296px;
    border-radius: 350px;
    border: 1px solid #30363d;
  }

  span {
    color: var(--white);
    font-size: 26px;
    display: block;
  }
  .InfoUser {
    margin-top: 15px;
    display: block;
    width: 100%;

    button {
      width: 100%;
      padding: 7px;
      border-radius: 5px;
      outline: none;
      background: #21262d;
      border: solid 1px #363b42;
      margin: 10px 0px 10px 0px;
      color: var(--white);
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  .Profile {
    margin-top: 30px;
  }

  .login {
    color: var(--gray);
    font-size: 20px;
  }
  .location {
    margin-top: 5px;
    color: var(--white);
    font-size: 14px;
  }
`;
