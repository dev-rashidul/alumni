import { useState } from "react";

const JobApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    salaryExpectation: "",
    cvFile: null,
    fileUploaded: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cvFile: e.target.files[0],
      fileUploaded: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
<section id="Applyform">
    <div className="container mx-auto pt-12">
    <h2 className="text-2xl md:text-3xl font-bold mb-12">Fill the Form</h2>
    <div className="max-w-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="experience" className="block font-medium">
            Experience (Months or Years)
          </label>
          <input
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div>
          <label htmlFor="salaryExpectation" className="block font-medium">
            Salary Expectation
          </label>
          <input
            type="text"
            id="salaryExpectation"
            name="salaryExpectation"
            value={formData.salaryExpectation}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md border border-gray-300"
          />
        </div>
        <div className="relative mt-4">
          <label htmlFor="cvFile" className="block font-medium">
            Upload CV
          </label>
          <div className="mt-2 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            {formData.fileUploaded ? (
              <p className="text-lg text-green-500 font-semibold">
                File Upload Done
              </p>
            ) : (
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path d="M20 18v-8h8v8h10v20H10V18h10zm-2 0h-4v-4h4v4zm-2 20V20h4v18h-4zm20-8h-6v-4h6v4zm0-6h-6v-4h6v4zm0-6h-6v-4h6v4z" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-400 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, or DOCX up to 5MB
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
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
