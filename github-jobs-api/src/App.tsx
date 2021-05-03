import React from "react";
import moment from "moment";
import "./css/App.scss";

import { JobBoard } from "./components/JobBoard";
import { Header } from "./components/Header";

function App() {
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
    <div className="App">
      {/*<header className="App-header"></header>*/}
      <Header />
      <main>
        <JobBoard />
      </main>
    </div>
  );
}

export default App;
