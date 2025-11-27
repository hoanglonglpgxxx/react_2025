import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: red;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: purple;
  color: #fff;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Mits</H1>
      <Button onClick={() => alert(1)}>Test btn</Button>
      <Input type="number" placeholder="Number"></Input>
    </StyledApp>
  );
}

export default App;
