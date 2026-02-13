import { Routes, Route } from "react-router-dom";
import RoleSelect from "../src/assets/pages/RoleSelect";
import AdminLogin from "../src/assets/pages/AdminLogin";
import TeacherLogin from "../src/assets/pages/TeacherLogin";
import StudentComingSoon from "../src/assets/pages/StudentComingSoon";
import TeacherDashboard from "./assets/pages/Dashboard/Pages/TeacherDashboard";
import AdminDashboard from "./assets/pages/Dashboard/Pages/AdminDashboard";
import TeacherRegister from "./assets/pages/TeacherRegister";

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


    </Routes>
  );
}

export default App;
