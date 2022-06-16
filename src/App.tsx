import React from "react";
import "./App.css";

import * as styled from "./components/styled";
import * as emotion from "./components/emotion";
import { ChakraButton, ChakraColumn } from "./components/chakra";

function App() {
  const [framework, setFramework] = React.useState<
    "none" | "styled" | "emotion" | "chakra"
  >("none");
  const thousand = Array(1000).fill(0);
  return (
    <div className="App">
      <button id="none" onClick={() => setFramework("none")}>
        None
      </button>
      <button id="styled" onClick={() => setFramework("styled")}>
        Styled
      </button>
      <button id="emotion" onClick={() => setFramework("emotion")}>
        Emotion
      </button>
      <button id="chakra" onClick={() => setFramework("chakra")}>
        Chakra UI
      </button>

      {framework === "none" && <div>Select a Framework</div>}

      {framework === "styled" && (
        <styled.Column id="root" gap={10}>
          {thousand.map((_, i) => (
            <styled.Button key={i}>{i}</styled.Button>
          ))}
        </styled.Column>
      )}

      {framework === "emotion" && (
        <emotion.Column id="root" gap={10}>
          {thousand.map((_, i) => (
            <emotion.Button key={i}>{i}</emotion.Button>
          ))}
        </emotion.Column>
      )}

      {framework === "chakra" && (
        <ChakraColumn id="root" gap={10}>
          {thousand.map((_, i) => (
            <ChakraButton key={i}>{i}</ChakraButton>
          ))}
        </ChakraColumn>
      )}
    </div>
  );
}

export default App;
