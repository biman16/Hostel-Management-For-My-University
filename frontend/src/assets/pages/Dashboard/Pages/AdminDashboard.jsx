import "../Styling/AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="side-icon active">🏠</div>
        <div className="side-icon">💬</div>
        <div className="side-icon">🔔</div>
        <div className="side-icon">📅</div>
        <div className="side-icon">🚪</div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">

        {/* Top Bar */}
        <div className="admin-topbar">
          <div className="logo">Logo</div>
          <div className="profile">👤</div>
        </div>

        <h1 className="admin-title">Dashboard</h1>

        {/* Cards */}
        <div className="admin-cards">
          <div className="admin-card purple">
            <span className="card-number">1</span>
            <h3>Admins</h3>
            <p>Add & Delete Admin</p>
            <button>Start Now →</button>
          </div>

          <div className="admin-card blue">
            <span className="card-number">2</span>
            <h3>Teachers</h3>
            <p>Add & Delete Teachers</p>
            <button>Start Now →</button>
          </div>

          <div className="admin-card dark">
            <span className="card-number">3</span>
            <h3>Forms</h3>
            <p>View & Download Form</p>
            <button>Start Now →</button>
          </div>

          <div className="admin-card red">
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
