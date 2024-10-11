import React, { useState } from 'react'

export const Login = () => {
  const [state, setstate] = useState('Sing up')

  const [ email ,setemail] =useState('')
  const[password ,setpassword] = useState('')
  const[name , setname] = useState('')

  const onsubmitHandler = async(event) =>{
event.preventDefault()
  }
  return (
   <form className='min-h-[80vh] flex items-center'>
   <div className="flex flex-col gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
    <p className='text-2xl font-semibold'>{ state === 'Sing up' ? 'Create Account' : 'Login'}</p>
    <p>Please {state === 'Sing up' ? 'sing up' : 'log in'} to book appoiment</p>
  {
    state === 'Sing up' &&
   <div className=" w-full ">
 <p>Full Name</p>
 <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=> setname(e.target.value)}  value={name}/>
   </div>
  }
   
   <div className="w-full">
 <p>Email</p>
 <input className='border border-zinc-300 rounded w-full p-2 mt-1'  type="email" onChange={(e)=> setemail(e.target.value)}  value={email}/>
   </div>
   
   <div className="w-full">
 <p>Password</p>
 <input className='border border-zinc-300 rounded w-full p-2 mt-1'  type="password" onChange={(e)=> setpassword(e.target.value)}  value={password}/>
   </div>
   

   <button className='bg-blue-600 text-white w-full py-2 rounded-md text-base'>{state === 'Sing up' ? 'Create Account' : 'Login'}</button>
  {
    state === 'Sing up'
    ? <p>Already have a account? <span onClick={()=>setstate('Login')} className='text-blue-500 cursor-pointer'>Login here</span> </p>
    :
    <p>Create a new account?  <span onClick={()=>setstate('Sing up')} className='text-blue-500 cursor-pointer'> click here</span></p>
  }
   </div>

   </form>
  )
}
