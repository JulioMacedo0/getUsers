import { createContext, useState, ReactNode, useEffect } from "react";
import { api } from "../services/api";



interface UserProviderProps {
    children: ReactNode;
}

interface User {
    id: number;
    name: string;
    git_url: string;
    language: string;
    html_url: string;
    description: string;
    stargazers_count: number;
}

interface UserFunction {
    nameUser: string;
}

interface UserProvider {
    getUser: (user: UserFunction) => void;
    userRepo: User[];
    userProfile: {};
}

interface UserProfile {
    login: string;
    avatar_url: string;
    name: string;
    location: string;
}



export const UserContext = createContext<UserProvider>(
    {} as UserProvider)



export function UserProvider({ children }: UserProviderProps) {

    const [userRepo, setUserRepo] = useState<User[]>([])

    const [userProfile, setUserProfile] = useState<UserProfile>({} as UserProfile)


    useEffect(() => {

        api.get(`JulioMacedo0/repos`)
        .then(response => {
            setUserRepo(response.data)
            console.log(userRepo)
        })
    
     api.get(`JulioMacedo0`)
        .then(response => {
            setUserProfile(response.data)
        })



    }, [])

    function getUser(user: UserFunction) {
        api.get(`${user}/repos?per_page=100`)
            .then(response => {
                setUserRepo(response.data)
                console.log(userRepo)
            })
        
         api.get(`${user}`)
            .then(response => {
                setUserProfile(response.data)
            })   
    }

    return (

        <UserContext.Provider value={{
            getUser,
            userRepo,
            userProfile
        }}>
            {children}
        </UserContext.Provider>

    )
}