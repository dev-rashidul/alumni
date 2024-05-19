import { useState } from "react";

const FeedbackForm = () => {
  // State to hold the field value

  const [feedback, setFeedback] = useState("");

  // Submit Handler

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Feedback submitted:", feedback);
    // Reset the feedback state after submission if needed
    setFeedback("");
  };

  return (
    <section id="FeedbackFrom">
      <div className="container mx-auto pt-12 px-5 md:px-0 pb-6">
        <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
          Feedback Form
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter your Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></input>
          </div>
          <div className="mb-4">
            <label
              htmlFor="feedback"
              className="block text-gray-700 text-md font-bold mb-2"
            >
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Enter your feedback..."
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
