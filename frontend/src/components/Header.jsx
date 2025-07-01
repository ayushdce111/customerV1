import React from 'react';
// import {logo} from "../assets/images/logo.png";
import logo from '../assets/images/logo.png';
import { TiThMenu } from "react-icons/ti";
// import Logout from "./user/Logout";


const Header = ({HeaderProps}) => {
    const[setShowSidebar,showLoginSignup]=HeaderProps;
    const isUserActive = localStorage.getItem('isLoggedIn');
    const userDataVar = localStorage.getItem('user');
    // console.log(JSON.parse(userDataVar).name,"<---------userDataVar");
  return (
    <>
        <div className="flex flex-col md:flex-row md:px-25 px-2 py-2  justify-between items-center  gap-6 bg-white/60">
            <div className='shrink-0 w-full md:w-auto flex items-center justify-between '>
                <img src={logo} className='w-22'/>
                <div className='text-center md:hidden'>
                    <span className='inline-block p-2'><TiThMenu size={32} className='cursor-pointer hover:text-[#FE9901]'onClick={()=>{setShowSidebar(prev=>!prev)}} /></span>
                </div>
            </div>
            <div className='flex flex-col-reverse gap-2 sm:flex-col md:flex-row md:items-center sm:gap-6'>
                
                <div className='text-center flex gap-4'>
                    <div className='text-center'>
                    <span className='inline-block px-5 py-3 bg-[#0D3F63] rounded-2xl text-white hover:bg-[#FE9901] hover:text-[#0D3F63] cursor-pointer'>Travel Agent? Join Us</span>
                </div>
                    {isUserActive==="true" ?(
                        <>
                        {/* // console.log(isUserActive,"isUserActive") */}
                        <span className='inline-block px-5 py-3 bg-[#0D3F63] rounded-2xl text-white hover:bg-[#FE9901] hover:text-[#0D3F63] cursor-pointer'>Welcome : {JSON.parse(userDataVar).name}</span>
                        {/* <Logout/> */}
                        </>
                    ):(
                        <span className='inline-block px-5 py-3 bg-[#0D3F63] rounded-2xl text-white hover:bg-[#FE9901] hover:text-[#0D3F63] cursor-pointer' onClick={()=>{showLoginSignup(prev=>!prev)}}>login/SignUp</span>
                    )}
                </div>
                <div className='text-center hidden md:block '>
                    <span className='inline-block p-2'><TiThMenu size={32} className='cursor-pointer hover:text-[#FE9901]'onClick={()=>{setShowSidebar(prev=>!prev)}} /></span>
                </div>
            </div>
            

        </div>
            
    </>
  )
}

export default Header