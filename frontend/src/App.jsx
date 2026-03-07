import { Routes, Route } from "react-router-dom";
import RoleSelect from "../src/assets/pages/RoleSelect";
import AdminLogin from "../src/assets/pages/AdminLogin";
import TeacherLogin from "../src/assets/pages/TeacherLogin";
import StudentComingSoon from "../src/assets/pages/StudentComingSoon";
import TeacherDashboard from "./assets/pages/Dashboard/Pages/TeacherDashboard";
import AdminDashboard from "./assets/pages/Dashboard/Pages/AdminDashboard";
import TeacherRegister from "./assets/pages/TeacherRegister";
import WaitingApproval from "./assets/pages/Dashboard/Pages/WaitingApproval";
import "./App.css"
import TeacherAddDelete from "./assets/pages/Dashboard/Pages/TeacherAddDelete";
import AdminAddDelete from "./assets/pages/Dashboard/Pages/AdminAddDelete";
import FillHostelVisit from "./assets/pages/Dashboard/Pages/FillHostelVisit";
import SubmissionTeacher from "./assets/pages/Dashboard/Pages/SubmissiomTeacher";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoleSelect />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/teacher-login" element={<TeacherLogin />} />
      <Route path="/student" element={<StudentComingSoon />} />
      <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/teacher-registraion" element={<TeacherRegister />} />
      <Route path="/waiting-approval" element={<WaitingApproval />} />
      <Route path="/TeacherAddDelete" element={<TeacherAddDelete />} />
      <Route path="/Admin-AddDelete" element={<AdminAddDelete />} />
      <Route path="/fill-report" element={<FillHostelVisit />} />
      <Route path="/submission-report" element={<SubmissionTeacher />} />
      
      


    </Routes>
  );
}

export default App;
