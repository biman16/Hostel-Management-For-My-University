import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../componants/Footer";
import Header from "../componants/Header";
import "../styling/Login.css";


const TeacherLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        // ✅ save JWT token
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
  
        if (data.role === "teacher") {
          if (data.status === "pending") {
            // Redirect to waiting approval page without showing success alert
            navigate("/waiting-approval");
          } else if (data.status === "approved") {
            alert("Login Successful");
            navigate("/teacher-dashboard");
          }
        } else if (data.role === "admin") {
          alert("Login Successful");
          navigate("/admin-dashboard");
        }
  
      } else {
        alert(data.message || "Login failed");
      }
  
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };



  return (
    <div className="page-wrapper">

    <Header />

    <main className="page-content">
    <div className="login-container">
    <form onSubmit={handleSubmit}>
      <h1>Teacher Login</h1>

      <label>Email</label>


      <input
  type="email"
  name="email"
  placeholder="example@gmail.com"
  value={formData.email}
  onChange={handleChange}
/>

      <label>Password</label>
      
      <input
  type="password"
  name="password"
  placeholder="Enter password"
  value={formData.password}
  onChange={handleChange}
/>

      <p className="forgot">Forgot Password</p>

      <button className="login-btn" type="submit">Login</button>

      <p className="switch-auth">
                New here?{" "}
                <span onClick={() => navigate("/teacher-registraion")}>
                    Register</span>
            </p>
            </form>
    </div>
    </main>
    

    <Footer />
    
    </div>
  );
};

export default TeacherLogin;
