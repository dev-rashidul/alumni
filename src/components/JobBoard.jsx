import { useState } from "react";
import { Link } from "react-router-dom";
import JobPostForm from "./JobPostForm";

const JobBoard = () => {
  // Job Post Form Open Modal
  const [isOpen, setIsOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Co.",
      location: "New York, NY",
      type: "Remote",
      salary: "20 - 25",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum arcu. Vivamus fringilla gravida nunc non laoreet. Sed sollicitudin eleifend turpis vitae maximus. Integer et elit vel risus sollicitudin fermentum. Proin aliquet metus eget nulla pharetra, at tristique enim dictum. Nullam viverra, urna vel tincidunt interdum, enim sapien tempor justo, vitae consectetur ex eros non quam. Donec efficitur libero nec lectus placerat, vitae convallis nisi tristique. Cras vitae massa eu velit sagittis mattis. Nulla facilisi.",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Software Inc.",
      location: "San Francisco, CA",
      type: "On Site",
      salary: "20 - 25",
      description:
        "Pellentesque consequat nibh velit, id feugiat urna convallis ac. Aliquam aliquam ipsum sit amet augue vehicula volutpat. Sed non dapibus nulla. Proin eget arcu a ex laoreet dictum. Integer ac odio dui. Fusce sit amet varius metus. Vestibulum efficitur semper neque, sit amet finibus nisi ultricies vel. Curabitur et lacus a nisi vulputate finibus eget at enim. Nullam ut justo nec risus fermentum fermentum nec et magna. Mauris malesuada lorem eget scelerisque fringilla. Fusce vulputate sem quis velit tincidunt luctus. Sed eget nulla quis mauris pharetra aliquet.",
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Design Studio",
      location: "Chicago, IL",
      type: "Remote",
      salary: "20 - 25",
      description:
        "Vivamus convallis felis id neque commodo, sit amet hendrerit purus vestibulum. Nam ullamcorper libero eget urna placerat, et feugiat magna sodales. Donec eleifend, est id vestibulum fermentum, est nisl vehicula risus, a posuere lacus ipsum nec felis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vel convallis nisi, a iaculis mauris. Vivamus gravida nec libero ut hendrerit. Vivamus sollicitudin enim et lectus fringilla facilisis.",
    },
  ];

  return (
    <section id="Jobs">
      <div className="container mx-auto py-12 2xl:px-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Jobs</h2>
        {jobs.map((job) => (
          <div key={job.id} className="bg-blue-50 shadow rounded p-5 mb-5">
            <h2 className="text-xl md:text-2xl text-blue-700 font-medium">
              {job.title}
            </h2>
            <p className="text-base text-gray-800 mb-5">
              {job.description?.slice(0, 200)}
            </p>
            <Link
              className="text-base text-white bg-blue-700 py-2 px-4 rounded shadow-sm"
              to={`job/${job.id}`}
            >
              Details
            </Link>
          </div>
        ))}

        {/* Job Post Button */}

        <div className="text-center pt-12">
          <button onClick={()=> setIsOpen(true)} className="text-md text-white bg-blue-700 py-2 px-6 rounded-md transition-all duration-300 hover:bg-blue-500">
            Post a Job
          </button>
        </div>
        {/* Job Post Form */}
        {isOpen && <JobPostForm />}
      </div>
    </section>
  );
};

export default JobBoard;
