import React from 'react'
import { TeacherLoggedInHeaderAndSideBar } from '../../../componants/LoggedInHeaderAndSideBar'
import { FaUserAlt } from 'react-icons/fa'
import logo from "../../../photos/logo.png";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { MdCloudUpload } from "react-icons/md";


const FillHostelVisit = () => {
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
            <div className='flex-1 text-center font-bold text-[#1F4B5E] md:text-[50px]'>Fill Hostel Visit Report Form</div>
    </div>


    <div className='w-full flex justify-center mt-10'>
        <div className='h-[75vh] overflow-y-auto md:h-[100vh] md:overflow-visible w-[100%] md:w-[90%] bg-gray-200 rounded-[15px] shadow-xl p-8'>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>
                <div className='flex flex-col items-start w-full'>
                    <label className='text-[20px] md:text-[25px]'>Date & Time</label>
                    <input type="date"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-2 px-5'/>
                </div>

                <div className='flex flex-col items-start w-full'>
                    <label className='text-[20px] md:text-[25px]'>Hostel Name</label>
                    <input type="text"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-2 px-5 text-[19px] md:text-[22px]'/>
                </div>



                <div className='flex flex-col items-start w-full'>
                    <label className='text-[20px] md:text-[25px]'>Teacher Name</label>
                    <input type="text"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-2 px-5 text-[19px] md:text-[22px]'/>
                </div>




                <div className='flex flex-col items-start w-full'>
                    <label className='text-[20px] md:text-[25px]'>Subordinate Teacher Name</label>
                    <input type="text"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-2 px-5 text-[19px] md:text-[22px]'/>
                </div>
            </div>







                <div className='flex flex-col items-start w-full mt-5'>
                    <label className='text-[20px] md:text-[25px]'>General Comments</label>
                    <input type="text"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-5 px-5 text-[19px] md:text-[22px]'/>
                </div>


                <div className='flex flex-col items-start w-full mt-5'>
                    <label className='text-[20px] md:text-[25px]'>Maintanance required</label>
                    <input type="text"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-5 px-5 text-[19px] md:text-[22px]'/>
                </div>  

                <div className='flex flex-col items-start w-full mt-5'>
                    <label className='text-[20px] md:text-[25px]'>Complaints</label>
                    <input type="text"
                            placeholder='' 
                            className='bg-gray-400 rounded-[15px] w-[70%] py-5 px-5 text-[19px] md:text-[22px]'/>
                </div>

                <button className='bg-violet-400 mt-4 border border-black rounded-[15px] px-5 py-2 cursor-pointer flex items-center gap-2'>Upload Image <MdCloudUpload /></button>

                <div className='flex justify-center '>
                    <button className='bg-white mt-8 border border-blue-800 rounded-[30px] px-5 py-2 cursor-pointer text-blue-800 text-[30px] font-bold transition duration-300 ease-in-out hover:scale-110'>Submit</button>
                </div>
        </div>
    </div>


    </main>
    </div>


    </div>
  )
}

export default FillHostelVisit