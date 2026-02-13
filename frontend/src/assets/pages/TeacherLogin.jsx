import { useNavigate } from "react-router-dom";
import Footer from "../componants/Footer";
import Header from "../componants/Header";
import "../styling/Login.css";


const TeacherLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="page-wrapper">

    <Header />

    <main className="page-content">
    <div className="login-container">
      <h1>Teacher Login</h1>

      <label>Email</label>
      <input type="email" placeholder="example@gmail.com" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <p className="forgot">Forgot Password</p>

      <button className="login-btn">Login</button>

      <p className="switch-auth">
                New here?{" "}
                <span onClick={() => navigate("/teacher-registraion")}>
                    Register</span>
            </p>
    </div>
    </main>

    <Footer />
    </div>
  );
};

export default TeacherLogin;
