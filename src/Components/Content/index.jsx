import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { RepositoryCard } from "../CardRepo";
import { NavBar } from "../NavBar";
import { UserProfile } from "../UserProfile";
import { Container, Ul } from "./style";

export function Content() {
  const { userRepo, nav } = useContext(UserContext);

  function sort() {
    userRepo.sort((x, y) => {
      return y.stargazers_count - x.stargazers_count;
    });
  }
  sort();
  console.log(userRepo);

  return (
    <Container>
      <UserProfile />

      <div className="repo">
        <NavBar />
        <h2> Popular repositories </h2>
        <Ul>
          {userRepo.map((user) => (
            <RepositoryCard
              id={user.id}
              name={user.name}
              html_url={user.html_url}
              language={user.language}
              description={user.description}
              stargazers_count={user.stargazers_count}
            />
          ))}
        </Ul>
      </div>
    </Container>
  );
}
