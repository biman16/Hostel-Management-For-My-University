import React from 'react'
import { HiBellAlert } from "react-icons/hi2";
import { IoHome, IoLogOut } from "react-icons/io5";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

export const LoggedInHeaderAndSideBar = () => {
    const navigate = useNavigate();

    const toHome = ()=> {
        navigate("/admin-dashboard")
    }


  return (
    <div>
              
      <aside className="dashboard-sidebar">
        <div className="side-icon"><IoHome onClick={toHome}/><span>Home</span></div>
        <div className="side-icon"><BiSolidMessageSquareDetail /><span>Message</span></div>
        <div className="side-icon"><HiBellAlert /><span>Notification</span></div>
        <div className="side-icon"><SlCalender /><span>Calender</span></div>
        <div className="side-icon"><IoLogOut /><span>Log Out</span></div>
      </aside>
    </div>
  )
}




export const TeacherLoggedInHeaderAndSideBar = () => {
    const navigate = useNavigate();

    const toHome = ()=> {
        navigate("/teacher-dashboard")
    }


  return (
    <div>
              
      <aside className="dashboard-sidebar">
        <div className="side-icon"><IoHome onClick={toHome}/><span>Home</span></div>
        <div className="side-icon"><BiSolidMessageSquareDetail /><span>Message</span></div>
        <div className="side-icon"><HiBellAlert /><span>Notification</span></div>
        <div className="side-icon"><SlCalender /><span>Calender</span></div>
        <div className="side-icon"><IoLogOut /><span>Log Out</span></div>
      </aside>
    </div>
  )
}



