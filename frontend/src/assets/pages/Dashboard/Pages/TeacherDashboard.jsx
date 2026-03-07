import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import logo from "../../../photos/logo.png";
import { TeacherLoggedInHeaderAndSideBar } from "../../../componants/LoggedInHeaderAndSideBar";
import { useNavigate } from "react-router-dom";
import { IoFileTrayStacked } from "react-icons/io5";
import { MdPendingActions, MdReport } from "react-icons/md";


const TeacherDashboard = () => {
  const navigate = useNavigate();

  const HostelReportForm = ()=> {
    navigate("/fill-report")
  }

  const SubmissionDetails = ()=> {
    navigate("/submission-report")
  }
  


  return (
    <div className="dashboard-layout">

    <TeacherLoggedInHeaderAndSideBar />

      {/* Main Content */}
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


        <h1 className="text-[50px]  dashboard-title">Dashboard</h1>


        {/* Cards */}
        <div className="dashboard-cards">
          <div className="dashboard-card purple">
          <span className="card-number">1</span>


          <div className="flex items-center gap-3 p-2">
            <IoFileTrayStacked className="text-[50px] md:text-[65px]" />
            <div>
              <h3>Fill Form</h3>
              <p>Fill the visit report</p>
            </div>
            </div>
            <button onClick={HostelReportForm} className="flex items-center justify-between ">Start <span><FaArrowRight /></span></button>
          </div>

          <div className="dashboard-card green">
          <span className="card-number">2</span>
          <div className="flex items-center gap-3 p-2">
          <MdPendingActions className="text-[50px] md:text-[65px]"/>
          <div>
            <h3>Submissions</h3>
            <p>Your submissions</p>
            </div>
            </div>
            <button onClick={SubmissionDetails} className="flex items-center justify-between" >Start <span><FaArrowRight /></span></button>
          </div>

          <div className="dashboard-card red">
          <span className="card-number">3</span>
          <div className="flex items-center gap-3 p-2">
            <MdReport className="text-[50px] md:text-[65px]" />
            <div>
              <h3>Report</h3>
              <p>Your overall report</p>
            </div>
            </div>
            <button className="flex items-center justify-between ">Start <span><FaArrowRight /></span></button>
            
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-card">
          <h3>Performance Trends</h3>
          <p>Average submission: 40</p>

          <div className="fake-chart">
            <div className="line"></div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default TeacherDashboard;
