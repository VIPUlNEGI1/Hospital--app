import React, { useState }  from 'react'

import { assets } from '../assets/assets_frontend/assets'
import{NavLink, useNavigate} from 'react-router-dom'

export default function Navbar() {
   const navigate = useNavigate();

   const[showMenue, setshowMenue] = useState(false)
   const[token , settoken] = useState(true)
    return (
      <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1 '>Home</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto'/>
        </NavLink>
        
   
        <NavLink to={'/Doctors'}>
          <li className='py-1 '>All Docters</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto'/>
        </NavLink>

        <NavLink to={'/about'}>
          <li className='py-1 '>About</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto'/>
        </NavLink>

        <NavLink to={'/contact'}>
          <li className='py-1 '>Contact</li>
          <hr className='border-none outline-none h-0.5  w-3/5 m-auto'/>
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {
          token 
          ? <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5' src={ assets.dropdown_icon} alt="" />
            <div className=" absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className=" min-w-48 bg-slate-100 rounded flex flex-col gap-4 p-4">
                <p  onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'> My Profile</p>
                <p onClick={()=>navigate('/my-appointment')} className='hover:text-black cursor-pointer' >My Appomients</p>
                <p onClick={()=> settoken(false)} className='hover:text-black cursor-pointer'> Log out</p>
              </div>
            </div>
          </div>
          :<button onClick={()=> navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block' >Create account</button>
        }
        <img onClick={()=>setshowMenue(true)} className='w-6  md:hidden' src={assets.menu_icon} alt="" />
      {/* mobole menu */}

      <div className={ ` ${showMenue ? 'fixed w-full' : 'h-0 w-0'} md-hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all `}>
        <div className="flex items-center justify-between px-5 py-6">
          <img className='w-36' src={assets.logo} alt="" />
          <img className='w-7' onClick={()=> setshowMenue(false)} src={assets.cross_icon} alt="" />
        </div>
      
        <ul className='  flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
          <NavLink className="px-4 py-2 rounded inline-block " onClick={()=> setshowMenue(false)} to='/'>Home</NavLink>
          <NavLink className="px-4 py-2 rounded inline-block " onClick={()=> setshowMenue(false)} to='/Doctors'>All Doctors</NavLink>
          <NavLink className="px-4 py-2 rounded inline-block " onClick={()=> setshowMenue(false)} to='/about'>About</NavLink>
          <NavLink className="px-4 py-2 rounded inline-block " onClick={()=> setshowMenue(false)} to='/contact'>Contact</NavLink>
        </ul>
      </div>
      </div>
  </div>
    );
}
