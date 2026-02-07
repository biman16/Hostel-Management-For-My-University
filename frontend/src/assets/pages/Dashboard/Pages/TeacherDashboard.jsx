import "../Styling/TeacherDashboard.css";

const TeacherDashboard = () => {
  return (
    <div className="dashboard-layout">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icon active">🏠</div>
        <div className="sidebar-icon">📅</div>
        <div className="sidebar-icon">📤</div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        {/* Top Bar */}
        <div className="topbar">
          <div className="logo">Logo</div>
          <div className="profile">👤</div>
        </div>

        {/* Heading */}
        <h1 className="dashboard-title">Dashboard</h1>

        {/* Cards */}
        <div className="card-row">
          <div className="dash-card blue">
            <h3>Fill Form</h3>
            <p>Fill the visit report</p>
            <button>Start →</button>
          </div>

          <div className="dash-card green">
            <h3>Submissions</h3>
            <p>Your submissions</p>
            <button>Start →</button>
          </div>

          <div className="dash-card orange">
            <h3>Report</h3>
            <p>Your overall report</p>
            <button>Start →</button>
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
