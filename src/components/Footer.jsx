import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductProvider'
import SocialMedia from './SocialMedia';

function Footer() {
  const {handleClick} = useContext(ProductContext);
  return (
    <div className='w-full  mt-28 bg-slate-800 p-5 '>
    <div className=' flex flex-col gap-5 md:flex-row justify-between '>
      <div className='flex flex-col w-full md:w-1/4 gap-3'>
        <p className='font-bold text-2xl text-white'>JM<span className='text-[#ff7654]'>COMMERCE</span></p> 
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ut repudiandae corporis enim porro nemo.
        </p>
      </div>
      <div className='text-white flex flex-col gap-3'>
        <p className='text-xl font-bold text-[#ff7654]'>Quick Links</p>
        <Link to='/jmcommerce-react'>Home</Link>
        <Link to='/jmcommerce-react/products'>All Products</Link>
        <p onClick={handleClick} className='cursor-pointer'>Cart</p>
      </div>
      <div className='w-full md:w-1/4 flex flex-col gap-3 text-white'>
        <p className='text-xl font-bold text-[#ff7654]'>Download Our Mobile App</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis vero corporis doloremque culpa cumque. Deserunt.
        </p>
      </div>
</div>
<SocialMedia/>
    </div>
  )
}

export default Footer