import Link from "next/link";
import {useEffect} from "react";
import {useInView} from "react-intersection-observer";

const Job = ({job, isFirstJobInView}) => {
  const {ref, inView} = useInView({
    threshold: 0.5,
    initialInView: true,
    triggerOnce: true,
  });

  useEffect(() => {
    isFirstJobInView(inView);
  }, [inView]);

  return (
    <div
      className={`job__company ${inView ? "--loaded" : ""}`}
      key={job.company}
      ref={ref}
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
  );
};
export default Job;
