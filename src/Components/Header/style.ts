import styled from "styled-components";

export const Container = styled.header`
 width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 16px 16px 16px 27px;
  background-color: var(--background-lite);

  img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
  input {
    border: 1px solid #30363d;
    margin-right: 16px;
    height: 30px;
    background: var(--background);
    border-radius: 5px;
    width: 273px;
    color: #fff;
    padding: 10px;
    transition: 0.3s;
    outline: none;

    &:focus {
      border: 1px solid #1f6feb;
    }

    @media (max-width: 460px) {
      width: 180px;
  }
  @media (max-width: 360px) {
      width: 140px;
  }
  }

  button {
    border: 0;
    padding: 5px;
    border-radius: 6px;
    background: #fff;
    transition: 0.3s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;
