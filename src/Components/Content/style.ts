import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  @media (max-width: 630px) {
    flex-direction: column;
    
  }
  h2 {
    color: var(--white);
    font-size: 1rem;
    font-weight: normal;
  }

  .repo {
    margin: 40px 0px 0px 35px;
    @media (max-width: 630px) {
      margin: auto;
  }
  }
  @media (max-width: 630px) {
    justify-content: center;
  }
`;
export const Ul = styled.ul`
  color: var(--repositoriesTitle);
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px;

  @media (max-width: 890px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
