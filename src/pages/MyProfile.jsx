import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

export const MyProfile = () => {
  const [ userData , setuserData] = useState({
    name:"Vipul Negi",
    image:assets.about_image,
    email: '99vipul**@gmail.com',
    phone : '7983922210',
    address:'Dehradun',
    dob:'28:08:2003',
    gender:'Male',
    dob:'2000-01-20'
  })

  const [isEdit ,setisEdit] = useState(true)
  return (
    <div className='max-w-lg  flex flex-col g-2 text-sm '>
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
        ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setuserData(prev => ({...prev, name:e.target.value}))}/>:
        <p className='font-medium text-3xl  text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr  className=' bg-zinc-400 h-[1px] border-none'/>
      <div className=" ">
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className='text-blue-400'>Email id:</p>
     <p>{userData.email}</p>
     <p>Phone</p>
     {
        isEdit
        ? <input className='bg-gray-300 max-w-52' type="text" value={userData.phone} onChange={e => setuserData(prev => ({...prev, phone:e.target.value}))}/>:
        <p className='text-blue-300'>{userData.phone}</p>
      }
      <p className='font-medium'>Address:</p>
      {
        isEdit
        ? <p>
          <input className='bg-gray-100' onChange={(e)=> setuserData(prev => ({...prev, address: {...prev.address,line1: e.target.value}}))} value={userData.address.line1} type="text" />
          <br />
          <input className='bg-gray-50' onChange={(e)=> setuserData(prev => ({...prev, address: {...prev.address,line1: e.target.value}}))} value={userData.address.line2} type="text" />
        </p>
        : <p className='text-gray-500'>{
          userData.address.line1}
        <br />
        {userData.address.line2}
        </p>

      }
        </div>
      </div>
      <div className="">
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p>Gender:</p>
          {
        isEdit
        ?  <select className='max-w-20 bg-gray-100' onChange={(e) => setuserData(prev => ({...prev , gender: e.target.value}))} value={userData.gender}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
        :
        <p className='text-gray-400'>{userData.gender}</p>
      }
      <p>BirthDay:</p>
      {
        isEdit 
        ? <input className='max-w-28 bg-gray-100 ' type="date" onChange={(e)=>setuserData(prev =>({...prev , dob: e.target.value}))}  value={userData.dob}/>
        : <p className='text-gray-400'>{userData.dob}</p>
      }
        </div>

        <div className="">
          {
            isEdit 
            ? <button className='mt-3 border border-grey-500 px-8 py-2 rounded-full hover:text-white hover:bg-slate-400 transition-all' onClick={()=> setisEdit(false)}>Save Information</button>
            : <button className='mt-3 border border-grey-500 px-8 py-2 rounded-full hover:text-white hover:bg-slate-400 transition-all' onClick={()=> setisEdit(true)}>Edit</button>
          }
        </div>
      </div>
    </div>
  )
}
