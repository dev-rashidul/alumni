import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import loginImg from "../assets/login-img.png";
import LoginForm from "../components/LoginForm";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  // Navigate to Home
  const navigate = useNavigate();

  // State for data

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // OnChange Function to get the User info from input fields

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler Funtion to post data on Database

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      swal("Logged in!", "Login successful", "success");
      setAuth(data);
      navigate("/");
    } catch (error) {
      swal("Error", `Error logging in ${error.message}`, "error" );
    }
  };

  return (
    <section id="Login">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex justify-center items-center">
          <div className="md:w-1/2">
            <div className="register-img hidden md:block">
              <img src={loginImg} alt="Login Img" />
            </div>
          </div>
          {/* Registration Form */}

          <div className="md:w-1/2">
            <LoginForm
              formData={formData}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
