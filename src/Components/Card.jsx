import React from 'react'
import { FaBaseballBall } from "react-icons/fa";

const Card = () => {
    return (
        <section className='py-[110px]'>
            <div className="max-w-Container mx-auto">
                <div className="flex justify-between">
                    <div className="bg-[#FDEDE8] h-[135px] w-[357px] py-[30px] px-[10px] rounded-lg">
                        <div className="flex justify-between items-center gap-x-[40px]">
                            <div className="text-[50px]">
                                <FaBaseballBall />
                            </div>
                            <div className="">
                                <h2 className='text-[20px] font-bold pb-[10px]'>Immediate Deployment</h2>
                                <p className='text-[16px] font-pops font-normal'>Et vero eos et accusamus et
                                    iusto odio dignissimos</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FDEDE8] h-[135px] w-[357px] py-[30px] px-[10px] rounded-lg">
                        <div className="flex justify-between items-center gap-x-[40px]">
                            <div className="text-[50px]">
                                <FaBaseballBall />
                            </div>
                            <div className="">
                                <h2 className='text-[20px] font-bold pb-[10px]'>Immediate Deployment</h2>
                                <p className='text-[16px] font-pops font-normal'>Et vero eos et accusamus et
                                    iusto odio dignissimos</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#FDEDE8] h-[135px] w-[357px] py-[30px] px-[10px] rounded-lg">
                        <div className="flex justify-between items-center gap-x-[40px]">
                            <div className="text-[50px]">
                                <FaBaseballBall />
                            </div>
                            <div className="">
                                <h2 className='text-[20px] font-bold pb-[10px]'>Immediate Deployment</h2>
                                <p className='text-[16px] font-pops font-normal'>Et vero eos et accusamus et
                                    iusto odio dignissimos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card
