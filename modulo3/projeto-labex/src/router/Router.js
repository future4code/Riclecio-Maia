import { PaginaAdmin } from "../pages/PaginaAdmin";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";
import { PaginaViagem } from "../pages/PaginaViagem";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        {/* para utilizar o path parms "/ :" "language" */}
        <Route exact path={"/admin"}>
          <PaginaAdmin />
        </Route>
        <Route exact path={"/travel"}>
          <PaginaViagem />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
