import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import JobPostForm from "./JobPostForm";

const JobBoard = () => {
  // Get Logged In user info
  const { auth } = useContext(AuthContext);

  // Job Post Form Open Modal
  const [isOpen, setIsOpen] = useState(false);

  // Jobs State
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("http://localhost:3000/jobs");
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, [jobs]);

  return (
    <section id="Jobs">
      <div className="container mx-auto py-12 2xl:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Jobs</h2>
        {jobs.map((job) => (
          <div key={job.job_id} className="bg-blue-50 shadow rounded p-5 mb-5">
            <Link
              to={`/jobs/${job.job_id}`}
              className="text-xl md:text-2xl text-blue-700 font-medium"
            >
              {job.job_title}
            </Link>
            <p className="text-base text-gray-800 mb-5">
              {job.job_description?.slice(0, 200)}
            </p>
            <Link
              className="text-base text-white bg-blue-700 py-2 px-4 rounded shadow-sm"
              to={`/jobs/${job.job_id}`}
            >
              Details
            </Link>
          </div>
        ))}

        {/* Job Post Button */}

        {auth?.user ? (
          <div className="text-center pt-12">
            <button
              onClick={() => setIsOpen(true)}
              className="text-md text-white bg-blue-700 py-2 px-6 rounded-md transition-all duration-300 hover:bg-blue-500"
            >
              Post a Job
            </button>
          </div>
        ) : (
          <div className="text-center pt-12">
            <Link
              to="/login"
              className="text-md text-white bg-blue-700 py-2 px-6 rounded-md transition-all duration-300 hover:bg-blue-500"
            >
              Please Login to post job
            </Link>
          </div>
        )}
        {/* Job Post Form */}
        {isOpen && <JobPostForm />}
      </div>
    </section>
  );
};

export default JobBoard;
