import styled from "styled-components";

export const Li = styled.li`
  margin-right: 15px;

  a {
    color: var(--repositoriesTitle);
    text-decoration: none;
    font-size: 0.875rem;
  }

  p {
    margin-top: 5px;
    font-size: 12px;
    color: var(--gray);
  }
`;
export const Card = styled.div`
  border: 1px solid #30363d;
  border-radius: 6px;
  max-width: 440px;
  position: relative;
  padding: 16px;
  min-height: 133px;

  &:last-child {
    margin-bottom: 15px;
  }

  @media (max-width: 380px) {
    width: 220px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  p {
    border: 1px solid #30363d;
    border-radius: 25px;
    font-weight: bold;
    padding: 0px 7px;
    margin: 0px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: left;
  position: absolute;
  bottom: 20px;
  span {
    font-size: 12px;
    color: var(--gray);
  }
  span.count {
    margin-left: 15px;
  }
`;
