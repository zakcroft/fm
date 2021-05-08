import React, { useEffect, useState } from "react";
import * as API from "../api/api";

import { useParams } from "react-router-dom";

interface ParamTypes {
  id: string;
}

export const JobDetails = () => {
  const { id } = useParams<ParamTypes>();
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

export default JobDetails;
