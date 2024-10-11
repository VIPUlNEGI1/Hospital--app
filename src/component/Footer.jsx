import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <div>
        <div className=" flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-40 text-sm">
            {/* first section */}
            <div  >
                <img className="mb-5 w-40 "  src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat recusandae nam. Obcaecati asperiores fugit, ad esse dolorum necessitatibus aut cum voluptatem excepturi.</p>
            </div>
            {/* secound section */}
            <div className="">
                <p className='text-xl font-medium mb-5'> Company</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            {/* third section */}
            <div className="">
                <p className='text-xl font-medium mb-5'>Get In Touch</p>
                <ul className='flex flex-col gap-2 text-gray-600'>

                <li>7983922210</li>
                <li>99vipul**@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className="">
            {/* copyright */}
            <hr />
            <p className='py-5 text-center text-sm'>Copyright 2424@ Prescript - All Right Reserved </p>
        </div>
    </div>
  )
}

export default Footer