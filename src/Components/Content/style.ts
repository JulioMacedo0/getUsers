import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;

  h2 {
    color: var(--white);
    font-size: 16px;
    font-weight: normal;
  }

 
  

  .repo {
    margin: 55px 0px 0px 35px;
  }

  
`;
export const Ul = styled.ul`
  color: var(--repositoriesTitle);
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  
  
`;
