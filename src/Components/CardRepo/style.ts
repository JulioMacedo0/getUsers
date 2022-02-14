import styled from "styled-components";


export const Li = styled.li`
    width: 450px;
    margin-left: 20px;
    margin-top: 15px;

    a {
      color: var(--repositoriesTitle);
      text-decoration: none;
      font-size: 14px;
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: var(--gray);
    }
    `
export const Card = styled.div`
   border: 1px solid #30363d;
   border-radius: 6px;
   padding: 16px;
   
`

export const Header = styled.header`
   display: flex;

   p {
      border: 1px solid #30363d;
      border-radius: 25px;
      font-weight: bold;

      
   }

`


    
export const Footer = styled.footer`
  
  
  span {
   font-size: 12px;
   color: var(--gray);
  }

`
