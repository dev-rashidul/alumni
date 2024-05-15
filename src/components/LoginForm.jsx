import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const LoginForm = ({ formData, onChange, onSubmit }) => {
  return (
    <>
      <div className="py-12">
        <form onSubmit={onSubmit} className="w-full">
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
          <div className="mb-6 text-center">
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <p className="text-md text-black text-center pt-5">
              Do not have an Account?{" "}
              <Link to="/register" className="text-blue-500 font-medium">
                Register Here
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
