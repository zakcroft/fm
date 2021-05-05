import React, { useEffect, useState } from "react";
import { JobType } from "../types";
import * as API from "../api/api";

interface Props {
  id: string;
}

export const Job = ({ id }: Props) => {
  const [job, setJob] = useState({
    title: undefined,
  });
  useEffect(() => {
    API.fetchPosition(id).then((data) => {
      setJob(data);
    });
  }, [id]);

  return <li>{job.title}</li>;
};

export default Job;
