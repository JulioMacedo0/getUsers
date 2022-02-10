import { Content } from "./Components/Content";
import { Header } from "./Components/Header";
import { UserProvider } from "./contexts/userContext";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Content />
      </UserProvider>
      <GlobalStyle />
    </>
  );
}
