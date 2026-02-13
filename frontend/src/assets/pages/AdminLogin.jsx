import Footer from "../componants/Footer";
import Header from "../componants/Header";
import "../styling/Login.css";

const AdminLogin = () => {
  return (
    <div className="page-wrapper">

    <Header />

    <main className="page-content">
    <div className="login-container">
      <h1>Admin Login</h1>

      <label>Email</label>
      <input type="email" placeholder="admin@gmail.com" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <p className="forgot">Forgot Password</p>
      <button className="login-btn">Login</button>
    </div>
    </main>

    <Footer />
    </div>
  );
};

export default AdminLogin;
