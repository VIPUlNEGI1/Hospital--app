import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg py-6 md:px-10 lg:px-20'>
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10w] md:mb-[-30px]">
        {/* first section */}
       <p className=' text-3xl md:4xl lg:text-5xl text-white font-semibold leading-tight mb:leading-tight lg:leading-tight'>
         Book Appointment <br />
         With Trusted Doctors
         </p>
      <div className="flex flex-col md:flex items-center gap-3 text-white text-sm font-light">
      <img className='w-28' src={ assets.group_profiles} alt="" />
      <p>We are provided Top  of the Doctors of the better treatment, <br className='hidden sm:block' /> we are belive in satisfaction of our pecients </p>
      </div>
     <a href="#sepciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
     Book appointment  <img className='w-3' src={assets.arrow_icon} alt="" />
     </a>
            </div> 


      <div className="md:w-1/2 relative">
{/* secound section */}
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
        </div> 

      <div className="">
        {/* third section */}
      </div>
    </div>
  )
}

export default Header