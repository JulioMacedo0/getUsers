import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { NavButton, Navigation } from "./style";




export function NavBar() {

    const { handleNav, nav} = useContext(UserContext);

    
  return (
    <Navigation>
      <NavButton
        isActive={nav === "popular"}
        onClick={() => (nav === "allRepositories" ? handleNav("popular") : "")}
      >
        Overview
      </NavButton>
      <NavButton
        isActive={nav === "allRepositories"}
        onClick={() => (nav === "popular" ? handleNav("allRepositories") : "")}
      >
        Repositories
      </NavButton>
    </Navigation>
  );
}
