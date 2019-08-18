import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "@loadable/component";
import Home from "./view/home";

const components: string[] = ["flex", "button", "loading", "radio", "switch"];

function App() {
  return (
    <HashRouter>
      <Switch>
        {components.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={`/${item}`}
              component={Loadable(() => import(`./view/${item}`))}
            />
          );
        })}
        <Route path="/" component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;
