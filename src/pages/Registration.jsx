import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImg from "../assets/register-img.png";
import RegisterForm from "../components/RegisterForm";

const Registration = () => {
  // Navigate Function

  const navigate = useNavigate();

  // State for data

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    batch: "",
    status: "",
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
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log("User registered successfully:", data);
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <section id="Registration">
      <div className="container mx-auto px-5 md:px-0">
        <div className="md:flex justify-center items-center">
          <div className="md:w-1/2">
            <div className="register-img hidden md:block">
              <img src={registerImg} alt="Register Img" />
            </div>
          </div>
          <div className="md:w-1/2">
            {/* Registration Form */}
            <RegisterForm
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

export default Registration;
