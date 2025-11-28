import { styled } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Mits</Heading>
            <Heading as="h2">Test</Heading>
          </Row>
        </Row>
        <Row>
          <Button size="small" variation="danger">
            test
          </Button>
          <Button onClick={() => alert(1)}>Test btn</Button>
          <Input type="number" placeholder="Number"></Input>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
