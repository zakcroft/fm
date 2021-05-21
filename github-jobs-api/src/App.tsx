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
import { FilterModel } from "./components/common/Modal/FilterModel";
import { SetSearchContext } from "./hooks";
import { SearchType } from "./types";
import { SearchEnum } from "./constants";

const JobBoard = lazy(() => import("./components/JobBoard"));
const JobDetails = lazy(() => import("./components/JobDetails"));

function App() {
  const [search, setSearch] = useState<SearchType>({
    [SearchEnum.DESCRIPTION]: "",
    [SearchEnum.LOCATION]: "",
    [SearchEnum.FULL_TIME]: false,
  });
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);
  const [isDarkMode, toggleDarkMode] = useToggleDarkMode();

  console.log("App search", search);

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
    <SetSearchContext.Provider value={{ search, setSearch }}>
      <div className={classnames("App", { "dark-theme": isDarkMode })}>
        <Header
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
    </SetSearchContext.Provider>
  );
}

export default App;
