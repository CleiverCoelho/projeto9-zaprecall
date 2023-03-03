import styled from "styled-components"
import Deck from "./components/Deck";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <AppStyle>
      <BorderBox></BorderBox>
      <Deck></Deck>
    </AppStyle>
  );
}

export default App;

const AppStyle = styled.div`
  background-color: #FB6B6B;
  width: 100%;
  height: 1000px;
`

const BorderBox = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`