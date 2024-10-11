import { useNavigate} from 'react-router-dom'
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

export const Contact = () => {
  const navigate = useNavigate()
  return (
    <div className="">

    <div className='text-center text-2xl pt-10 text-gray-500 '>
      <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
    </div>
    <div className="m-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
      <img className='w-full max-w-[360px]' src={assets.contact_image} alt="" />

      <div className=" flex flex-col justify-center items-start gap-6">
        <p className='font-semibold text-lg text-gray-600 '>Our Office</p>
        <p className='text-gray-500'>HIT Dehradun Maldevta Road <br /> Uttarakhand ,India</p>
        <p className='text-gray-500'>7983922210</p>
        <p className='font-semibold text-lg text-gray-600'>99vipul**@gmail.com</p>
        <p className='text-gray-500 '>Learn mare about My self </p>
        <button onClick={()=>navigate('/about')} className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white duration-500'>Explore Job</button>
      </div>
    </div>
    </div>
  )
}
