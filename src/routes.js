import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Repository from "./pages/Repository";

export default function Routes() {
  /* O retorno desse componente, são as rotas
  O BrowserRouter sempre deverá ficar englobando as rotas
  O Switch garente que apenas uma rota seja chamada por momento.
  o router dom, permite vários componentes exibidos ao mesmo tempo.
  Cada Route representa uma página da nossa aplicação.
  OBS Utilizar o exact no main, para ser possível entender os demais roteamentos
  */
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository/:repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
