import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import JobApplyForm from "./JobApplyForm";

const JobDetails = () => {
  // Get Logged In user info
  const { auth } = useContext(AuthContext);

  // Job Apply form open state
  const [isOpen, setIsOpen] = useState(false);

  // Get Single Job Details
  const [jobData, setJobData] = useState(null);

  // To get the corresponding Job id
  const { jobId } = useParams();

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/jobs/${jobId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  //   Handler function for Form Open

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  return (
    <section id="JobDetails">
      <div className="container mx-auto py-12 2xl:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Job Details</h2>
        <div className="job">
          <h2 className="text-xl md:text-2xl text-blue-700 font-medium mb-3">
            Job Title : {jobData?.job_title}
          </h2>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Company Name :</span>{" "}
            {jobData?.company_name}
          </p>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Location :</span> {jobData?.location}
          </p>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Job Type :</span> {jobData?.job_type}
          </p>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Salary :</span> {jobData?.salary}K BDT
          </p>
          <p className="text-base text-gray-800 mb-4 pt-2">
            <span className="font-medium">Job Description :</span>{" "}
            {jobData?.job_description}
          </p>

          {auth?.user ? (
            <button
              onClick={handleFormOpen}
              className="text-md text-white font-medium bg-blue-700 py-2 px-5 mt-3 rounded shadow transition-all duration-300  hover:bg-blue-500"
            >
              Apply Now
            </button>
          ) : (
            <div className="pt-6">
              <Link
                to="/login"
                className="text-md text-white bg-blue-700 py-2 px-6 rounded-md transition-all duration-300 hover:bg-blue-500"
              >
                Please Login to Apply job
              </Link>
            </div>
          )}

          {/* Apply Form */}
          {isOpen && <JobApplyForm />}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
