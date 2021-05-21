import React, { useEffect, useState } from "react";

import * as API from "../../api/api";

import { JobType, SearchType } from "../../types";

import { LoadingIndicator } from "../utils";
import Job from "../Job";

import "./job-board.scss";

interface props {
  search: SearchType;
}

export default function JobBoard({ search }: props) {
  const [jobs, setJobs] = useState<JobType[]>([]);
  useEffect(() => {
    API.fetchPositions({
      params: search,
    }).then((data) => {
      setJobs(data);
    });
  }, [search]);

  return (
    <>
      {jobs.length ? (
        <ul className="job-board">
          {jobs.slice(0, 12).map((j) => (
            <Job job={j} />
          ))}
        </ul>
      ) : (
        <LoadingIndicator msg="Searching" />
      )}

      {!!jobs.length && (
        <button className="job-board-btn search-btn search-btn--medium">
          Load more
        </button>
      )}
    </>
  );
}
