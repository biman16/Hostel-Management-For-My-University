import React from "react";
import "../styling/RoleSelect.css";


import { useNavigate } from "react-router-dom";
import Header from "../componants/Header";
import Footer from "../componants/Footer";

const RoleSelect = () => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    if (role === "Admin") {
      navigate("/admin-login");
    } else if (role === "Teacher") {
      navigate("/teacher-login");
    } else if (role === "Student") {
      navigate("/student");
    }
  };

  return (
    <div className="page-wrapper">

    <Header />

    <main className="page-content">
    <div className="role-container">
      <h2 className="subtitle">Select Your Role to Get Started</h2>

      <div className="card-wrapper">
        {/* Admin */}
        <div className="role-card admin">
          <div className="icon">🛡️</div>
          <h3>Admin</h3>
          <p>Manage system & users</p>
          <button onClick={() => handleSelect("Admin")}>Select</button>
        </div>

        {/* Teacher */}
        <div className="role-card teacher">
          <div className="icon">📖</div>
          <h3>Teacher</h3>
          <p>Fill form & check details</p>
          <button onClick={() => handleSelect("Teacher")}>Select</button>
        </div>

        {/* Student */}
        <div className="role-card student">
          <div className="icon">🎓</div>
          <h3>Student</h3>
          <p>Complaint & check update</p>
          <button onClick={() => handleSelect("Student")}>Select</button>
        </div>
      </div>
    </div>
    </main>

    <Footer />

  </div>
  );
};

export default RoleSelect;
