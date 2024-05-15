import { useState } from "react";
import JobApplyForm from "./JobApplyForm";

const JobDetails = () => {
  // Job Apply form open state
  const [isOpen, setIsOpen] = useState(false);

  //   Handler function for Form Open

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  return (
    <section id="JobDetails">
      <div className="container mx-auto py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Job Details</h2>
        <div className="job">
          <h2 className="text-xl md:text-2xl text-blue-700 font-medium mb-3">
            Job Title : Front End Developer
          </h2>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Company Name :</span> XYZ Compnay{" "}
          </p>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Location :</span> Dhaka, Bangladesh{" "}
          </p>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Job Type :</span> Full Time (Remote){" "}
          </p>
          <p className="text-base text-gray-900 pb-2">
            <span className="font-medium">Salary :</span> 20-22K BDT{" "}
          </p>
          <p className="text-base text-gray-800 mb-4 pt-2">
            <span className="font-medium">Job Description :</span> Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Necessitatibus facere
            quibusdam vero tempore aliquid reiciendis est voluptates totam
            obcaecati ipsum culpa eum neque libero eos voluptatem enim, voluptas
            voluptate itaque praesentium quod autem laboriosam cumque?
            Cupiditate, alias. Nemo voluptate distinctio porro eius at ut eum
            provident nobis, veritatis commodi veniam quisquam tenetur sequi
            corporis illum consectetur itaque aut mollitia, aspernatur accusamus
            eos illo, alias exercitationem. Dolor non blanditiis, nemo soluta
            culpa expedita quisquam sapiente a inventore odio recusandae
            temporibus voluptates veniam repudiandae omnis aperiam hic, in
            tempora voluptas pariatur porro placeat voluptatibus, eum nostrum.
            Magni repudiandae sunt in qui dicta perferendis id accusantium
            ratione voluptate molestiae consequatur, fugit veritatis iste, quae
            beatae ut ipsam culpa excepturi tenetur! Eligendi necessitatibus
            vitae quod et, consequuntur hic in, nostrum temporibus aliquam iure
            mollitia perferendis repellendus ab itaque accusamus pariatur ea
            magnam reiciendis nulla quos! Magnam temporibus velit eligendi sit
            rerum accusantium ex. Autem vitae alias velit sunt architecto
            voluptates sequi reprehenderit, adipisci nostrum mollitia, totam
            atque repudiandae nemo? Nihil beatae sit unde! Aliquid optio beatae
            cumque magnam. Fugit, quidem excepturi nulla nesciunt unde rerum
            esse accusantium officiis quae ex, molestiae velit repudiandae
            dolores dicta assumenda ut debitis maxime numquam! Nisi voluptate
            vero delectus?
          </p>

          <button
            onClick={handleFormOpen}
            className="text-md text-white font-medium bg-blue-700 py-2 px-5 mt-3 rounded shadow transition-all duration-300  hover:bg-blue-500"
          >
            Apply Now
          </button>

          {/* Apply Form */}
          {isOpen && <JobApplyForm />}
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
