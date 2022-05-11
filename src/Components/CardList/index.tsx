import { Card, Li } from "./style";

export function CardList(props) {
    return (
        <Li>
      <Card>
      <a href={props.html_url}>{props.name} </a> 
      </Card>
        </Li>

    );
}