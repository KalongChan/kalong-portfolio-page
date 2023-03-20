import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import {jobs} from "../config";
import Job from "./Job";

const Jobs = () => {
  const [firstJobInView, setFirstJobInView] = useState(false);

  const isFirstJobInView = (firstJob) => {
    setFirstJobInView(firstJob);
  };

  return (
    <Fragment>
      <div className={`jobs__main-title ${firstJobInView ? "--loaded" : ""}`}>
        Where I&#39;ve Worked
      </div>

      <div className="job">
        {jobs.map((job, index) => (
          <Job job={job} key={index} isFirstJobInView={isFirstJobInView} />
        ))}

        <img
          src="/img/circle-spin.svg"
          alt=""
          className={`job__spinning ${firstJobInView ? "--loaded" : ""}`}
        />
      </div>
    </Fragment>
  );
};

export default Jobs;
