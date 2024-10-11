import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import {Link} from 'react-router-dom'
export default function SpecialityMenue() {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800 ' id='sepciality'>
   <h1 className='text-3x-l font-medium'>Find by Speciality</h1>
     <p className='sm:w-1/3 text-center text-sm '>This is our extensive list of trusted Doctors, schudule your appointment</p>
     <div className=" flex sm:justify-center gap-4 pt-5 w-full overflow-scroll ">
     {specialityData.map((item,index)=>(
      <Link onClick={()=>''} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ' key={index} to={`/Doctors/${item.speciality}`}>
    <img className='w-16 sm:w-24 mb-2' src={item.image} alt="" />
    <p>{item.speciality}</p>
      </Link>
     ))}
     </div>
    </div>
  )
}
