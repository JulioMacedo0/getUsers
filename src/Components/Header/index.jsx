import { Container, Content } from "./style";
import iconGit from "../../assets/iconGit.svg";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";

export function Header() {
  const { getUser } = useContext(UserContext);

  const [nameUser, setNameUser] = useState("");

  return (
    <Container>
      <Content>
        <img src={iconGit} alt="" />
        <form action="" method="get">
          <input
            type="text"
            placeholder="Pesquise um usuário"
            onChange={(event) => setNameUser(event.target.value)}
          />
          
         
        </form>
        <button
            type="submit"
            onClick={async () => {
              await getUser(nameUser);
            }}
          >
            Pesquisar
          </button>
      </Content>
    </Container>
  );
}
