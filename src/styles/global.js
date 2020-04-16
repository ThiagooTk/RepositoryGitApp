import { createGlobalStyle } from "styled-components";

/**
 * CSS global da aplicação, tudo que for definido aqui vai ser para a aplicação toda.
 */
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  /** Setando para ocupar 100% da página */
  html,body, #root {
    min-height: 100%;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
 `;
