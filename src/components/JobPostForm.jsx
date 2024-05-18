import { useState } from "react";

const JobPostForm = () => {
  // Job Post State

  const [jobData, setJobData] = useState({
    job_title: "",
    company_name: "",
    location: "",
    job_type: "",
    salary: "",
    job_description: "",
  });

  //   Handle Change Function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  //   Submit Handler Function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobData),
      });
      if (!response.ok) {
        throw new Error("Failed to post job");
      }
      const data = await response.json();
      console.log(data); // Log the response, or handle it as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="JobForm">
      <div className="max-w-2xl pt-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="job_title"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Title
            </label>
            <input
              type="text"
              name="job_title"
              placeholder="Job Title"
              value={jobData.job_title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={jobData.company_name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={jobData.location}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="job_type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Type
            </label>
            <input
              type="text"
              name="job_type"
              placeholder="Job Type"
              value={jobData.job_type}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Salary
            </label>
            <input
              type="text"
              name="salary"
              placeholder="Salary"
              value={jobData.salary}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="job_description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Job Description
            </label>
            <textarea
              name="job_description"
              placeholder="Job Description"
              value={jobData.job_description}
              onChange={handleChange}
              rows={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobPostForm;
