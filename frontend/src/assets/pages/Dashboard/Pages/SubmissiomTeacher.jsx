import React from 'react'
import { TeacherLoggedInHeaderAndSideBar } from '../../../componants/LoggedInHeaderAndSideBar'
import { FaCloudDownloadAlt, FaUserAlt } from 'react-icons/fa'
import logo from "../../../photos/logo.png";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';


const SubmissionTeacher = () => {
    const navigate = useNavigate();

    const backToTeacherDash = ()=> {
        navigate(-1)
    }


  return (
    <div>
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


    <div className=' flex items-center justify-between'>
            <div className='shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] rounded-md cursor-pointer text-[30px] md:text-[60px]'><IoMdArrowRoundBack onClick={backToTeacherDash}/></div>
            <div className='flex-1 text-center font-bold text-[#1F4B5E] md:text-[50px]'>Submitted Forms</div>
    </div>

    <div className='flex justify-end text-[40px]'>
    <FaCloudDownloadAlt className='transition duration-300 ease-in-out hover:scale-110 cursor-pointer'/>
    </div>

    <div className='w-full mt-5'>
      <div className='h-[70vh] overflow-y-auto p-5'>
        <div className='w-full bg-gray-300 rounded-[20px] px-5 py-2 text-[30px]'>
                        <div className='w-full grid grid-cols-3 font-semibold border-b pb-2 text-[22px] md:text-[30px]'>
                                <span>Teacher Name</span>
                                <span className='text-center'>Subordinate Teacher</span>
                                <span className='text-right'>Date</span>

                            </div>

                            <div className='w-full grid grid-cols-3 font-semibold mt-5 text-[17px] md:text-[25px]'>
                                <span>1</span>
                                <span className="text-center">Biman Chandr Das</span>
                                <span className='text-right flex justify-end items-center gap-2 '><span className='border-b-2 border-blue-500 md:border-none mb-3'>Approve</span> <span className='hidden md:inline text-[20px] md:text-[40px] '><IoMdArrowRoundForward /></span>
                                </span>

                                <span>1</span>
                                <span className="text-center">Biman Chandr Das</span>
                                <span className='text-right flex justify-end items-center gap-2 '><span className='border-b-2 border-blue-500 md:border-none mb-3'>Approve</span> <span className='hidden md:inline text-[20px] md:text-[40px] '><IoMdArrowRoundForward /></span>
                                </span>

                                <span>1</span>
                                <span className="text-center">Biman Chandr Das</span>
                                <span className='text-right flex justify-end items-center gap-2 '><span className='border-b-2 border-blue-500 md:border-none mb-3'>Approve</span> <span className='hidden md:inline text-[20px] md:text-[40px] '><IoMdArrowRoundForward /></span>
                                </span>
                                

                                
                                
                          </div>
        </div>
      </div>
    </div>

    


    </main>
    </div>


    </div>
  )
}

export default SubmissionTeacher