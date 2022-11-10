import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, idx) => {
            return (
              <div key={idx} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
