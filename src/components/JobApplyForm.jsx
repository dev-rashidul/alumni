import { useState } from "react";
import swal from "sweetalert";

const JobApplyForm = () => {
  // State to store Cv
  const [cvFile, setCvFile] = useState(null);

  // Function to handle file change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCvFile(file);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("cv", cvFile);

      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error uploading CV");
      }

      const data = await response.json();
      swal("Uploaded!", "CV Uploaded successfully", "success" );
      console.log(data);
    } catch (error) {
      swal("error", `Error uploading CV ${error.message}`, "error" );
    }
  };

  return (
    <section id="Applyform">
      <div className="container mx-auto pt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Submit Your CV</h2>
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit}>
            <div className="relative mt-4">
              <label htmlFor="cvFile" className="block font-medium">
                Upload CV
              </label>
              <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <label
                  htmlFor="file"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a pdf file</span>
                  <input
                    id="file"
                    name="cv"
                    type="file"
                    className="sr-only"
                    onChange={handleFileChange}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="block w-full bg-blue-700 hover:bg-blue-500 text-white py-3 rounded-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobApplyForm;
