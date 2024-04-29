import React from 'react'
import Lg from "../assets/logo.png"
import { FaDownload } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=''>
        <div className="max-w-Container mx-auto">
            <div className="flex justify-between items-center">
                <div className="">
                    <img src={Lg} alt="logo" />
                </div>
                <div className="">
                    <ul className='flex items-center gap-x-10 font-pops capitalize text-[16px]'>
                        <li className=''><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">service</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
                <div className="flex items-center gap-x-2 bg-[#EA580C] px-[25px] py-[15px] rounded-2xl">
                    <div className="">
                    <FaDownload className='text-white'/>
                    </div>
                    <div className=" font-pops capitalize text-[16px] text-white"><a href="">download</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
