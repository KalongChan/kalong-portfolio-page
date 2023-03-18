import Link from "next/link";
import {Fragment, useEffect, useState} from "react";
import {jobs} from "../config";

const Jobs = ({inView}) => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    if (inView) {
      setReveal(true);
    }
  }, [inView]);

  return (
    <Fragment>
      <div className={`jobs__main-title ${reveal ? "--loaded" : ""}`}>
        Where I&#39;ve Worked
      </div>
      <div className="job">
        {jobs.map((job, index) => (
          <div
            className={`job__company ${reveal ? "--loaded" : ""}`}
            key={job.company}
            style={{transitionDelay: `${index * 200}ms`}}
          >
            <div className="job__title">
              {job.title}&nbsp;
              <span>
                @
                <Link legacyBehavior href={job.url}>
                  <a target="_blank">{job.company}</a>
                </Link>
              </span>
            </div>
            <div className="job__subtitle">
              <div className="job__subtitle-time">{job.time}</div>
              <div className="job__subtitle-location">{job.location}</div>
            </div>

            <div className="job__desc">
              <ul>
                {job.desc.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <img
          src="/img/circle-spin.svg"
          alt=""
          className={`job__spinning ${reveal ? "--loaded" : ""}`}
          style={{transitionDelay: "200ms"}}
        />
      </div>
    </Fragment>
  );
};

export default Jobs;
