import styled from 'styled-components'


export const Container = styled.div`
    display: flex;

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
.InfoUser {
    margin-top: 15px;
    display: block;
    width: 100%;

    button {

        width:100%;
        padding: 7px;
        border-radius: 5px;
        outline: none;
        background:  var(--background-lite);
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
    margin-left: 30px;
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
    span{
        font-size: 12px;
        margin-top: 15px;
        margin-left: 20px
    }
    
}
`
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

        p{
            margin-top: 5px;
            font-size: 12px;
            color: var(--gray);
        }
    }
    
`
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
            border-bottom: ${(props) => props.isActive
            ? '2px solid #f78166': '2px solid transparent'};

            &:hover {
            border-bottom: ${(props) => props.isActive
            ? '': '2px solid #424242'};
            }
`