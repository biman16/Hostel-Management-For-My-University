
import { useNavigate } from "react-router-dom";
import Header from "../../../componants/Header";
import Footer from "../../../componants/Footer";

const WaitingApproval = () => {

  const navigate = useNavigate();

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="page-wrapper">

      <Header />

      <main className="page-content">
        <div className="login-container">

          <h1>⏳ Waiting for admin approval</h1>

          <p>Your registration is pending. Please wait until admin approves.</p>

          <button className="login-btn" onClick={handleRefresh}>
            Refresh Status
          </button>

        </div>
      </main>

      <Footer />

    </div>
  );
};

export default WaitingApproval;