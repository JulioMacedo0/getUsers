import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, NavButton , Ul } from "./style";



export function Content() {
    const [nav, setNav] = useState('popular')


    const { userRepo, userProfile } = useContext(UserContext)

        function sort () {
           userRepo.sort(( x , y ) => {
               return y.stargazers_count - x.stargazers_count

                
            })
        } sort()
         console.log(userRepo)
        
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

        <div className="repo">
            <nav>
                <NavButton
                 isActive={nav === 'popular'}
                 onClick= {() => nav === 'allRepositories' ? setNav('popular') : ''}
                >
                Overview
                </NavButton>
                <NavButton
                 isActive={nav === 'allRepositories'}
                 onClick= {() => nav === 'popular' ? setNav('allRepositories') : ''}
                >
                Repositories
                </NavButton>
            </nav>
              <h2> Popular repositories </h2>
            <Ul>
           
                {
                     nav === 'popular' ?

                     userRepo.map( (user, indice) => (
                         indice <= 5 ?
                        <div className="card-repo">
                            
                           <li key={user.id}>
                               <a href={user.html_url}>{user.name} </a>
                               <p>{user.description}</p>
                           </li>

                         <span>{user.language}</span>
                         <span>{user.stargazers_count}</span>
                           
                         </div>
                         : ''
                       ))

                       : 

                       userRepo.map( user => (
                        <div className="card-repo">
                            
                           <li key={user.id}>
                               <a href={user.html_url}>{user.name} </a>
                               <p>{user.description}</p>
                           </li>

                         <span>{user.language}</span>
                           
                         </div>
                       ))
                }
           
            </Ul>
        </div>

        </Container>
    )
}