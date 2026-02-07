import "../styling/Login.css";
import Header from "../componants/Header";

const AdminLogin = () => {
  return (
    <div>
      <Header />
    <div className="login-container">
      <h1>Admin Login</h1>

      <label>Username</label>
      <input type="text" placeholder="Enter username" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <p className="forgot">Forgot Password</p>
      <button className="login-btn">Login</button>
    </div>
    </div>
  );
};

export default AdminLogin;
