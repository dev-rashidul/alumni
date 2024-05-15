import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const RegisterForm = ({ formData, onChange, onSubmit }) => {
  return (
    <>
      <div className="py-12">
        <form onSubmit={onSubmit} className="w-full">
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={onChange}
              placeholder="Enter your first name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={onChange}
              placeholder="Enter your last name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              placeholder="Enter your email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={onChange}
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="batch"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Batch
            </label>
            <input
              type="text"
              id="batch"
              name="batch"
              value={formData.batch}
              onChange={onChange}
              placeholder="Enter your batch"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="status"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Current Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={onChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <p className="text-md text-black text-center pt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 font-medium">
                Login Here
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
