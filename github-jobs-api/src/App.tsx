import React, {
  lazy,
  Suspense,
  createContext,
  useState,
  useReducer,
  Dispatch,
  SetStateAction,
} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import classnames from "classnames";
import moment from "moment";
import "./scss/App.scss";
import { LoadingIndicator } from "./components/utils";
import useToggleDarkMode from "./state/toggleDarkModeReducer";
import Header from "./components/Header";
import { FilterModel } from "./components/Model";

const JobBoard = lazy(() => import("./components/JobBoard"));
const JobDetails = lazy(() => import("./components/JobDetails"));

// type Theme = {
//   isDarkMode: boolean;
// };

function App() {
  const [search, setSearch] = useState<string>("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [isDarkMode, toggleDarkMode] = useToggleDarkMode();

  // const ThemeContext = createContext<Theme>({
  //   isDarkMode,
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
    // <ThemeContext.Provider value={ThemeContext}>
    <>
      <div className={classnames("App", { "dark-theme": isDarkMode })}>
        <Header
          setSearch={setSearch}
          setIsFilterModalOpen={setIsFilterModalOpen}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <main>
          <Router>
            <Switch>
              <Route path="/:id">
                <Suspense fallback={<LoadingIndicator msg={"Loading"} />}>
                  <JobDetails />
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
      <FilterModel
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </>
    // </ThemeContext.Provider>
  );
}

export default App;
