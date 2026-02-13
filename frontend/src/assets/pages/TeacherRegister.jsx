import { useState } from "react";
import Footer from "../componants/Footer";
import Header from "../componants/Header";
import "../styling/Login.css";
import { useNavigate } from "react-router-dom";



const TeacherRegister = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register Data:", formData);
  };

  return (
    <div className="page-wrapper">

      <Header />

      <main className="page-content">
        <div className="login-container">
          <h1>Teacher Registration</h1>

          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button className="login-btn" type="submit">
              Register
            </button>

            <p className="switch-auth">
                Already registered?{" "}
                <span onClick={() => navigate("/teacher-login")}>
                    Log in</span>
            </p>
          </form>
        </div>
      </main>

      <Footer />

    </div>
  );
};

export default TeacherRegister;