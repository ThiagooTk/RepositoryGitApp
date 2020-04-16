import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    /** fragment utilizando apenas para encapsular dois ou mais elementos no react */
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
