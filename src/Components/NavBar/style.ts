import styled from "styled-components";

export const Navigation = styled.nav`
    display: flex;
`

interface ButtonProps {
    isActive: boolean;
  }
  
  export const NavButton = styled.button<ButtonProps>`
    display: flex;
    margin-bottom: 25px;
    padding: 8px 16px;
    background: var(--background);
    font-weight: ${ props => props.isActive ? 'bold' : ''};
    width: 115px;
    border: none;
    color: var(--white);
    transition: filter 0.2s;
    border-bottom: ${(props) =>
      props.isActive ? "2px solid #f78166" : "2px solid transparent"};
  
    &:hover {
      border-bottom: ${(props) => (props.isActive ? "" : "2px solid #424242")};
    }
    span {
      font-size: 0.75rem;
      margin-left: 5px;
      background: #363942;
      border-radius: 32px;
      padding: 2px 6px;
      font-weight: 500;    
    }
  `;
  