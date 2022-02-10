import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    
    h2 {
        color: var(--white);
        font-size: 16px;
        font-weight: normal;
    }
    button {
      
}

    }
    img {
        width: 296px;
        height: 296px;
        border-radius: 350px;
    }
   
    div {
        height: 100%;
        width: 296px;
        span {
            color: var(--white);
            font-size: 26px;
            display: block;
        }
    }

.repo {
    margin: 55px 0px 0px 35px;

    nav {
        display: flex;
    }
 
}

.card-repo {
    width: 370px;
    min-height: 98px;
    border: solid 1px #363b42;
    border-radius: 5px;

    span {
        font-size: 12px;
        margin-top: 15px;
        margin-left: 20px
    }

    .flex {
        display: flex;

        p {
            display: inline-block;
            font-size: 12px;
            margin: 0;
            border: solid 1px var(--gray);
            border-radius: 24px;
            font-weight: bold;
            padding-right: 7px;
            padding-left: 7px;
           
            }
    }
    .space {
        justify-content: space-between;
        
    }
    
}
`;
export const Ul = styled.ul`
  color: var(--repositoriesTitle);
  list-style: none;
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  li {
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
  }
`;
interface ButtonProps {
  isActive: boolean;
}

export const NavButton = styled.button<ButtonProps>`
  margin-bottom: 25px;
  width: 100%;
  background: var(--background);
  font-weight: bold;
  border: none;
  color: var(--white);
  transition: filter 0.2s;
  border-bottom: ${(props) =>
    props.isActive ? "2px solid #f78166" : "2px solid transparent"};

  &:hover {
    border-bottom: ${(props) => (props.isActive ? "" : "2px solid #424242")};
  }
`;
