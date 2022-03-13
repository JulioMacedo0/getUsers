import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import { NavButton, Navigation } from "./style";

export function NavBar() {
  const { handleNav, nav, userRepo } = useContext(UserContext);

  return (
    <Navigation>
      <NavButton
        isActive={nav === "OverView"}
        onClick={() => (nav === "Repositories" ? handleNav("OverView") : "")}
      >
        Overview
      </NavButton>
      <NavButton
        isActive={nav === "Repositories"}
        onClick={() => (nav === "OverView" ? handleNav("Repositories") : "")}
      >
  
          Repositories <span>{userRepo.length}</span>
      
      </NavButton>
      <div></div>    
    </Navigation>
  );
}
