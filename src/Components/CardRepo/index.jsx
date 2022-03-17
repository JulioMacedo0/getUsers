import { Li, Header, Footer, Card } from "./style";

export function RepositoryCard(props) {
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
          <span className="count">{props.stargazers_count}</span>
        </Footer>
      </Card>
    </Li>
  );
}
