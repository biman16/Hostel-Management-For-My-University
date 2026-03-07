
import { FaUserAlt } from "react-icons/fa";
import logo from "../../../photos/logo.png";
import { LoggedInHeaderAndSideBar } from "../../../componants/LoggedInHeaderAndSideBar";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {

  const navigate = useNavigate();

  const goToTeacherAddDelete = () => {
    navigate("/TeacherAddDelete")
  };

  const goToAdminAddDelete = () => {
    navigate("/Admin-AddDelete")
  };
  









  return (
    <div className="dashboard-layout">
      

    <LoggedInHeaderAndSideBar />
      
      <main className="dashboard-main">

        
        <div className="dashboard-topbar">
          <div className="w-[50px] md:w-[100px]"><img src={logo} alt="Logo" /></div>
          <h1 className="text-center text-[15px] md:text-[35px]">
        Hostel Inspection Management System
      </h1>
          <div className="profile"><FaUserAlt />
          {/* <span className="">Dipta Mukherjee</span> */}
          </div>
        </div>
        <hr className="border-0 h-1 bg-gray-300 my-4" />

        <h1 className="text-[50px]  dashboard-title">Admin Dashboard</h1>

        
        <div className="dashboard-cards">
          <div className="dashboard-card purple">
            <span className="card-number">1</span>
            <h3>Admins</h3>
            <p>Add & Delete Admin</p>
            <button onClick={goToAdminAddDelete}>Start Now →</button>
          </div>

          <div className="dashboard-card blue">
            <span className="card-number">2</span>
            <h3>Teachers</h3>
            <p>Add & Delete Teachers</p>
            <button onClick={goToTeacherAddDelete}>Start Now →</button>
          </div>

          <div className="dashboard-card dark">
            <span className="card-number">3</span>
            <h3>Forms</h3>
            <p>View & Download Form</p>
            <button>Start Now →</button>
          </div>

          <div className="dashboard-card red">
            <span className="card-number">4</span>
            <h3>Complaints</h3>
            <p>Forward complaint</p>
            <button>Start Now →</button>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <div className="chart-header">
            <h3>Complaint Progress</h3>
            <div className="legend">
              <span className="green-box"></span> Resolved
              <span className="orange-box"></span> Pending
            </div>
          </div>

          <div className="bar-chart">
            {["Jan-Feb", "Mar-Apr", "May-Jun", "Jul-Aug", "Sep-Oct", "Nov-Dec"].map(
              (month, i) => (
                <div className="bar-group" key={i}>
                  <div className="bar resolved"></div>
                  <div className="bar pending"></div>
                  <span>{month}</span>
                </div>
              )
            )}
          </div>
        </div>

      </main>
    </div>
  );
};

export default AdminDashboard;
