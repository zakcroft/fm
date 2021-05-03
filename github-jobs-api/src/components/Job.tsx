import React from "react";
import { JobType } from "../types";

import moment from "moment";

import "../css/jobs.scss";

interface Props {
  job: JobType;
}

export const Job: React.FC<Props> = (props: Props) => {
  const { job } = props;

  const daysAgo = moment(job.created_at).fromNow();
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //
  // console.log(randomColor);

  return (
    <li className="job">
      {job.company_logo ? (
        <img
          // style={{ backgroundColor: `#${randomColor}` }}
          className="job__company-logo"
          src={job.company_logo || ""}
          alt="company logo"
        />
      ) : null}
      <span className="job__created"> {daysAgo}</span>
      <span className="job__type"> {job.type}</span>
      <h2 className="job__title"> {job.title}</h2>
      <h2 className="job__company"> {job.company}</h2>
      <p className="job__location"> {job.location}</p>
    </li>
  );
};

export default Job;
