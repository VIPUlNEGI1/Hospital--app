import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

export const About = () => {
  return (
    <div className='text-center text-2xl pt-10  text-gray-500 '>
      <div className="">
      <p>About <span className='text-gray-800 font-medium '>US</span></p>

      </div>
<div className=" my-10 flex flex-col md:flex-row gap-12">
  <img className='
    w-1/3   md:max-[360px] ' src={assets.about_image}alt="" />


  <div className=" justify-center ga-6 md:w-2/4  text-gray-600  text-sm">

    <p>Hello, I'm Vipul Negi, a passionate web developer with a strong focus on honing my skills through hands-on projects. Currently, I'm pursuing a Bachelor's in Computer Applications (BCA) at HIT College, where I combine my academic learning with practical web development. Over time, I've developed and worked on numerous projects that help me improve 

</p>
    <p>my coding abilities and keep up with the latest trends in web technologies. My goal is to continually grow as a developer, and every project I create is an opportunity to expand my expertise and bring innovative ideas to life.</p>
 <br />
  <b className='text-gray-600'>MY Vision & Project</b>
  <br />
    <p>This project is one of the best I've worked on in web development. Built in a React environment, it allowed me to deepen my understanding of React and create a dynamic, interactive web application. It’s a great showcase of my skills and passion for learning new technologies.</p>
  </div>

</div>
  <div className="text-xl my-4">
    <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
  </div>

  <div className="flex flex-col md:flex-row mb-20 ">
    <div className=" border px-10 md:px-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
      <b>Efficiency</b>

    <p>My work efficiency is very high, allowing me to deliver quality results quickly while focusing on continuous learning and improvement. </p>
    </div>

    <div className=" border px-10 md:px-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
      <b>productive</b>

    <p>I'm highly productive, consistently delivering quality results while learning and growing as a developer.</p>
    </div>

    <div className=" border px-10 md:px-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-300 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer" >
      <b>problem solving</b>

    <p> I’m highly productive and excel at problem-solving, which helps me deliver efficient, high-quality results.</p>
    </div>
  </div>
    </div>
  )
}
