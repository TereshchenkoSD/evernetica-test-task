import { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

import { AppContainer } from "./App.styles";

import Loader from "./components/Loader";

const HomeView = lazy(() =>
  import("./views/HomeView" /* webpackChunkName: "HomeView" */)
);

const CountryView = lazy(() =>
  import(
    "./views/CountryView/CountryView" /* webpackChunkName: "CountryView" */
  )
);

const App = () => {
  return (
    <AppContainer>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <Route path="/:countryName">
            <CountryView />
          </Route>
        </Switch>
      </Suspense>
    </AppContainer>
  );
};

export default App;
