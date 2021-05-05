import React, { useEffect, useState } from "react";

import * as API from "../api/api";

import { JobType } from "../types";

import { LoadingIndicator } from "./utils";
import Job from "./Job";

import "../scss/jobs.scss";

interface props {
  search: string;
}

export default function JobBoard({ search }: props) {
  const [jobs, setJobs] = useState<JobType[]>([]);
  useEffect(() => {
    API.fetchPositions({
      params: {
        search,
      },
    }).then((data) => {
      setJobs(data);
    });
  }, [search]);

  return (
    <ul className="job-board">
      {jobs.length ? (
        jobs.slice(0, 12).map((j) => <Job job={j} />)
      ) : (
        <LoadingIndicator msg="Searching" />
      )}
    </ul>
  );
}
