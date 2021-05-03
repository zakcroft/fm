import React, { useEffect, useState } from "react";
import Job from "./Job";

import { JobType } from "../types";
import * as API from "../api/api";

import "../css/jobs.scss";

export function JobBoard() {
  const [jobs, setJobs] = useState<JobType[]>([]);
  useEffect(() => {
    API.fetchPositions().then((data) => {
      setJobs(data);
    });
  }, []);

  return (
    <ul className="job-board">
      {jobs.slice(0, 12).map((j) => (
        <Job job={j} />
      ))}
    </ul>
  );
}
