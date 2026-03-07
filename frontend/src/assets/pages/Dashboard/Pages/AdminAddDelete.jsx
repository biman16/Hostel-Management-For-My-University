import React from 'react'
import {LoggedInHeaderAndSideBar} from '../../../componants/LoggedInHeaderAndSideBar'
import { FaSearch, FaUserAlt } from 'react-icons/fa'
import logo from "../../../photos/logo.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';



const AdminAddDelete = () => {
    const navigate = useNavigate();

    const backToAdminDash = () => {
        navigate(-1)
    }

  return (
    <div>
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


        <div className=' flex items-center justify-between'>
            <div className='shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] rounded-md cursor-pointer text-[30px] md:text-[60px]'><IoMdArrowRoundBack onClick={backToAdminDash}/></div>
            <div className='flex-1 text-center font-bold text-[#1F4B5E] md:text-[50px]'>Manage Admin</div>
        </div>


        <div className='w-full flex justify-center mt-10'>
            <div className='w-[90%] md:w-[90%] bg-gray-200 rounded-[40px] shadow-xl p-8'>
                <div className=' lg:flex gap-5'>
                <div className='flex flex-col w-full'>
                    <label className='text-[20px] md:text-[24px] font-semibold mb-2'>Admin Username</label>
                    <input type="text"
                            placeholder='Enter Admin name'
                            className='bg-gray-400 rounded-full px-6 py-3 outline-none text-gray-700'
                             />
                </div>

                <div className="flex flex-col w-full">
                    <label className="text-[20px] md:text-[24px] font-semibold mb-2">
                    Admin Password
                    </label>
                    <input
                    type="password"
                    placeholder="Enter Admin password"
                    className="bg-gray-400 rounded-full px-6 py-3 outline-none text-gray-700"
                    />
                </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white text-[22px] font-semibold px-10 py-3 rounded-full cursor-pointer">
                        Add
                    </button>
                </div>

            </div>
        </div>



{/* List of Addmins */}


        <div className='w-full flex justify-center mt-20'>
            <div className='w-[90%] md:w-[90%] bg-gray-200 rounded-[40px] shadow-xl p-8'>
                <div className=''>
                    <div className='text-center text-[20px] md:text-[24px] font-semibold'>List Of Admins</div>
                    <div className='flex w-[40%] border border-purple-500 bg-gray-400 items-center rounded-full px-6 py-2 mt-5'><input type="text"
                                placeholder='Search Admin'
                                className='w-[90%] text-[15px] md:text-[22px] ' />
                         <FaSearch />

                    </div>

                    <div>
                        <div className='bg-gray-300 items-center rounded-[15px] px-6 py-2 mt-5'>
                            <div className='w-full grid grid-cols-3 font-semibold border-b pb-2 text-[22px] md:text-[30px]'>
                                <span>Sl No.</span>
                                <span className='text-center'>Admin Name</span>
                                <span className='text-right'>Action</span>
                            </div>

                            <div className='w-full grid grid-cols-3 font-semibold mt-5 text-[17px] md:text-[25px]'>
                                <span>1</span>
                                <span className='text-center'>Biman Das</span>
                                <span className='text-right'>Approve</span>

                                <span>1</span>
                                <span className='text-center'>Biman Das</span>
                                <span className='text-right'>Approve</span>
                                
                            </div>
                        </div>
                    </div>
                 </div>   
                


            </div>
        </div>


       </main> 
    </div>
  )
}

export default AdminAddDelete