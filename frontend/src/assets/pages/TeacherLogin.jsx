import "../styling/Login.css";


const TeacherLogin = () => {
  return (
    <div className="login-container">
      <h1>Teacher Login</h1>

      <label>Username</label>
      <input type="text" placeholder="Enter username" />

      <label>Password</label>
      <input type="password" placeholder="Enter password" />

      <p className="forgot">Forgot Password</p>

      <button className="login-btn">Login</button>
    </div>
  );
};

export default TeacherLogin;
