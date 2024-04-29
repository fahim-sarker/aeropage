import React from 'react'
import { FaRegBell } from "react-icons/fa";
import Ba from "../assets/ban.png"

const Banner = () => {
    return (
        <section className='py-[50px]'>
            <div className="max-w-Container mx-auto">
                <div className="flex justify-between">
                    <div className=" pt-[120px]">
                        <div className="flex items-center gap-x-2">
                            <div className="bg-[antiquewhite] p-[5px] rounded-full text-[16px]">
                                <FaRegBell />
                            </div>
                            <div className=" font-pops text-[16px] font-medium">
                                <a href="#">Startup Business</a>
                            </div>
                        </div>
                        <h2 className='pt-[30px] font-pops text-[30px] font-bold w-[456px]'>Empowering startups to fuel
                            their business growth</h2>
                        <p className='font-pops text-[18px] font-regular w-[529px] my-[20px]'>Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet,
                            velit
                            nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
                            <a className='bg-[#EA580C] px-[40px] py-[10px] text-white capitalize rounded-lg' href="#">get started</a>
                    </div>
                    <div className="">
                        <img src={Ba} alt="banner" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
