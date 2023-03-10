import Link from "next/link";
import {jobs} from "../config";

const Works = () => {
  return (
    <div className="works">
      <div className="works__main-title">Where I&#39;ve Worked</div>
      <div className="works__job">
        {jobs.map((job) => (
          <div className="works__job-company" key={job.company}>
            <div className="works__job-title">
              {job.title}&nbsp;
              <span>
                @
                <Link legacyBehavior href={job.url}>
                  <a target="_blank">{job.company}</a>
                </Link>
              </span>
            </div>
            <div className="works__job-subtitle">
              <div className="works__job-subtitle-time">{job.time}</div>
              <div className="works__job-subtitle-location">{job.location}</div>
            </div>

            <div className="works__job-desc">
              <ul>
                {job.desc.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>

            <img
              src="/img/circle-spin.svg"
              alt=""
              className="works__job-spinning"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
