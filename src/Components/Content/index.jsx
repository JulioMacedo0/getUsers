import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { UserProfile } from "../UserProfile";
import { Container, NavButton, Ul } from "./style";

export function Content() {
  const [nav, setNav] = useState("popular");

  const { userRepo, userProfile } = useContext(UserContext);

  function sort() {
    userRepo.sort((x, y) => {
      return y.stargazers_count - x.stargazers_count;
    });
  }
  sort();
  console.log(userRepo);

  return (
    <Container>

      <UserProfile/>

      <div className="repo">
        <nav>
          <NavButton
            isActive={nav === "popular"}
            onClick={() => (nav === "allRepositories" ? setNav("popular") : "")}
          >
            Overview
          </NavButton>
          <NavButton
            isActive={nav === "allRepositories"}
            onClick={() => (nav === "popular" ? setNav("allRepositories") : "")}
          >
            Repositories
          </NavButton>
        </nav>
        <h2> Popular repositories </h2>
        <Ul>
          {nav === "popular"
            ? userRepo.map((user, indice) =>
                indice <= 5 ? (
                  <div className="card-repo">
                    <li key={user.id}>
                      <div className="flex space">
                        <a href={user.html_url}>{user.name} </a>
                        <p>Public</p>
                      </div>
                      <p>{user.description}</p>
                    </li>
                    <div className="flex">
                      <span>{user.language}</span>
                      <span>{user.stargazers_count}</span>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            : userRepo.map((user) => (
              <div className="card-repo">
              <li key={user.id}>
                <div className="flex space">
                  <a href={user.html_url}>{user.name} </a>
                  <p>Public</p>
                </div>
                <p>{user.description}</p>
              </li>
              <div className="flex">
                <span>{user.language}</span>
              </div>
            </div>
              ))}
        </Ul>
      </div>
    </Container>
  );
}
