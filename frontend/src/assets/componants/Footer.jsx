import "../styling/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* Left Section */}
      <div className="footer-left">
        <h4>Hostel Inspection Management System</h4>
        <p>Inspection & Issue Reporting Portal</p>
      </div>

      {/* Middle Section */}
      <div className="footer-middle">
        <p>Dashboard</p>
        <p>Reports</p>
        <p>Support</p>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <p>© 2026 Your College Name</p>
        <p>Hostel Administration</p>
      </div>

    </footer>
  );
};

export default Footer;