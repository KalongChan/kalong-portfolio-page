import Link from "next/link";
import {jobs} from "../config";

const Jobs = () => {
  return (
    <div className="jobs" id="jobs">
      <div className="jobs__main-title">Where I&#39;ve Worked</div>
      <div className="job">
        {jobs.map((job) => (
          <div className="job__company" key={job.company}>
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

            <img src="/img/circle-spin.svg" alt="" className="job__spinning" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
