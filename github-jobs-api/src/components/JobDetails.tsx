import React, { useEffect, useState } from "react";
import { JobType } from "../types";
import * as API from "../api/api";

interface Props {
  job: JobType;
}

export const Job = (props: Props) => {
  // const [job, setJob] = useState<JobType | null>(null);
  // useEffect(() => {
  //   API.fetchPosition("52fdce9d-f96c-4e4c-b51e-cd33eeee87b6").then((data) => {
  //     setJob(data);
  //   });
  // }, []);

  return <li>{props.job.title}</li>;
};

export default Job;
