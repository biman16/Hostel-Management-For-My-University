import "../styling/Header.css";
import logo from "../photos/logo.png";

const Header = () => {
  return (
    <div className="header-container">


      <div>
        <img src={logo} alt="College Logo" className="college-logo" />
      </div>

      <div className="heading-text">
        <h1 className="main-heading">
        Hostel Inspection Management System
      </h1>

      <p className="sub-heading">
        Inspection and Issue Reporting Portal
      </p>
      </div>
      

      
    </div>
  );
};

export default Header;