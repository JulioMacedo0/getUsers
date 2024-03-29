import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { CardList } from "../CardList";
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
        {nav ==='OverView' &&  <h2> Popular repositories </h2>}
        
        <Ul Nav={nav === 'OverView'}>
          {userRepo.map((user, index) => {
            if (nav === "OverView" && index <= 5) {
              return (
                <RepositoryCard
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  html_url={user.html_url}
                  language={user.language}
                  description={user.description}
                  stargazers_count={user.stargazers_count}             />
              );
            } else if (nav === "Repositories") {
              return (
                <CardList
                stargazers_count={user.stargazers_count}    
                name={user.name}
                html_url={user.html_url}
                />

                
              );
            }
          })}
        </Ul>
      </div>
    </Container>
  );
}
