import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container } from "./style";



export function UserProfile() {
  const  { userProfile }   = useContext(UserContext);

  return (
    <Container>
      <div className="Profile">
        <img src={userProfile.avatar_url} alt="Minha Figura" />
        <div className="InfoUser">
          <span className="name">{userProfile.name}</span>
          <span className="login">{userProfile.login}</span>
          <button>Follow</button>
          <span className="location">{userProfile.location}</span>
        </div>
      </div>
    </Container>
  );
}
