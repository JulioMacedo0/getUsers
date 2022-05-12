import { Li, Header, Footer, Card } from "./style";
import {User} from '../../contexts/userContext'


export function RepositoryCard(props: User) {
  return (
    <Li>
      <Card>
        <Header>
          <a href={props.html_url}>{props.name} </a>
          <p>Public</p>
        </Header>
        <p>{props.description}</p>
        <Footer>
          <span>{props.language}</span>
         {props.stargazers_count > 0 && <span className="count">{props.stargazers_count }</span>} 
        </Footer>
      </Card>
    </Li>
  );
}
