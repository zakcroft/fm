import React, { lazy, Suspense, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import moment from "moment";
import "./scss/App.scss";
import { LoadingIndicator } from "./components/utils";

import Header from "./components/Header";

const JobBoard = lazy(() => import("./components/JobBoard"));
const JobDetails = lazy(() => import("./components/JobDetails"));

type Theme = {
  dark: {};
};
interface ParamTypes {
  id: string;
}

function App() {
  const [search, setSearch] = useState<string>("");
  const { id } = useParams<ParamTypes>({});
  // const ThemeContext = createContext<Theme>({
  //   dark: {},
  // });

  moment.locale("en", {
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "seconds",
      ss: "%ss",
      m: "a minute",
      mm: "%dm",
      h: "an hour",
      hh: "%dh",
      d: "a day",
      dd: "%dd",
      M: "a month",
      MM: "%dM",
      y: "a year",
      yy: "%dY",
    },
  });
  return (
    // <ThemeContext.Provider value={ThemeContext.dark}>
    <div className="App">
      <Header setSearch={setSearch} />
      <main>
        <Router>
          <Switch>
            <Route path="/:id">
              <Suspense fallback={<LoadingIndicator msg={"Loading"} />}>
                <JobDetails id={id} />
              </Suspense>
            </Route>
            <Route path="/">
              <Suspense fallback={<LoadingIndicator msg={"Loading"} />}>
                <JobBoard search={search} />
              </Suspense>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
    // </ThemeContext.Provider>
  );
}

export default App;
