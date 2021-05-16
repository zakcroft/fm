import React from "react";
import moment from "moment";

import { Link } from "react-router-dom";

import { JobType } from "../../types";

import "./job.scss";

interface Props {
  job: JobType;
}

export const Job: React.FC<Props> = (props: Props) => {
  const {
    job: { id, title, type, created_at, company_logo, company, location } = {},
  } = props;

  const daysAgo = moment(created_at).fromNow();
  // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  //
  // console.log(randomColor);

  return (
    <Link className="text-link" to={`/${id}`}>
      <li className="job">
        {company_logo ? (
          <img
            // style={{ backgroundColor: `#${randomColor}` }}
            className="job__company-logo"
            src={company_logo || ""}
            alt="company logo"
          />
        ) : null}
        <span className="job__created"> {daysAgo}</span>
        <span className="job__type"> {type}</span>
        <h2 className="job__title"> {title}</h2>
        <h2 className="job__company"> {company}</h2>
        <p className="job__location"> {location}</p>
      </li>
    </Link>
  );
};

export default Job;
