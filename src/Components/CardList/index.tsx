import { Card, Li } from "./style";
import {User} from '../../contexts/userContext' 



export function CardList(props: User) {
    return (
        <Li>
      <Card>
      <a href={props.html_url}>{props.name} </a> 
      
      </Card>
        </Li>

    );
}