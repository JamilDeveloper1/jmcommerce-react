import React from 'react'
import {MdLocalShipping} from 'react-icons/md'
import {HiIdentification} from 'react-icons/hi'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
function AboutCom() {
  return (
    <div className='w-full p-5 bg-black gap-3 flex-col lg:flex-row flex items-center justify-around my-10'>
      <div className=' w-full lg:w-[23%]  h-[160px]  flex justify-around items-center bg-[#333] '>
      <MdLocalShipping className='text-[#ff7654] text-6xl'/>
      <div className='text-white'>
        <p className=' text-lg sm:text-xl xl:text-2xl font-bold'>Free Shipping</p>
        <p>Above 5$ Only</p>
      </div>
      </div>

      <div className='w-full lg:w-[23%] h-[160px]  flex justify-around items-center bg-[#333] '>
      <HiIdentification className='text-[#ff7654] text-6xl'/>
      <div className='text-white'>
        <p className='text-lg  sm:text-xl xl:text-2xl font-bold'>High Quality</p>
        <p>100% Guarantee</p>
      </div>
      </div>


      <div className='w-full lg:w-[23%] h-[160px]  flex justify-around items-center bg-[#333] '>
      <FaRegMoneyBillAlt className='text-[#ff7654] text-6xl'/>
      <div className='text-white'>
        <p className='text-lg sm:text-xl xl:text-2xl font-bold'>Huge Savings</p>
        <p>At Lowest Price</p>
      </div>
      </div>

      <div className='w-full lg:w-[23%] h-[160px]  flex justify-around  items-center bg-[#333] '>
      <MdLocalShipping className='text-[#ff7654] text-6xl'/>
      <div className='text-white'>
        <p className='text-lg lg:text-xl xl:text-2xl font-bold'>Easy Returns</p>
        <p>No Questions</p>
      </div>
      </div>


    </div>
  )
}

export default AboutCom