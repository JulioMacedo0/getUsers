import { createContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";

interface UserProviderProps {
  children: ReactNode;
}

export interface User {
  id?: number;
  name?: string;
  git_url?: string;
  language?: string;
  html_url?: string;
  description?: string;
  stargazers_count: number;
}



interface UserProvider {
  getUser: (user: string) => void;
  userRepo: User[];
  userProfile: ProfileUser;
  nav: string;
  handleNav:(nav: 'OverView'| 'Repositories') => void
}

export interface ProfileUser {
  login: string;
  avatar_url: string;
  name: string;
  location: string;
}



export const UserContext = createContext<UserProvider>({} as UserProvider);

export function UserProvider({ children }: UserProviderProps) {
  const [userRepo, setUserRepo] = useState<User[]>([]);
  const [nav, setNav] = useState("OverView");
    function handleNav(nav: 'OverView'| 'Repositories') {
      setNav(nav)
    } 

  const [userProfile, setUserProfile] = useState<ProfileUser>(
    {} as ProfileUser
  );

  useEffect(() => {
    api.get(`JulioMacedo0/repos`).then((response) => {
      setUserRepo(response.data);
    });

    api.get(`JulioMacedo0`).then((response) => {
      setUserProfile(response.data);
    });
  }, []);

  function getUser(user : string) {
    api.get(`${user}/repos?per_page=100`).then((response) => {
      setUserRepo(response.data);
    });

    api.get(`${user}`).then((response) => {
      setUserProfile(response.data);
    });
  }

  return (
    <UserContext.Provider
      value={{
        getUser,
        userRepo,
        userProfile,
        nav,
        handleNav,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
