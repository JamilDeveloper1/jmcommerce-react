import React, { useContext } from 'react'
import {AiOutlineShopping} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductProvider'
import { CartContext } from '../context/CartProvider';

function Navbar() {
    const {handleClick} = useContext(ProductContext);
    const {cartItem,totalPrice} = useContext(CartContext);
  return (
    <div className={`w-full  h-16 p-5 flex items-center justify-between  border-b border-slate-300`}>
        <div className='flex items-center gap-5'>
        <Link to='/' className='text-xl max-[280px]:text-sm  max-[223px]:text-xs    sm:text-2xl font-bold'>JM<span className='text-[#ff7654]'>COMMERCE</span></Link>
        </div>
        <div className='flex items-center justify-between w-[80px] sm:w-[100px] '>
           <p>{parseFloat(totalPrice).toFixed(2)}$</p>
        <div onClick={handleClick} className=' cursor-pointer relative'>
<AiOutlineShopping  className=' text-3xl '/>
<span className='absolute top-0 right-0 bg-[#ff7654] text-xs w-4 leading-4 text-center rounded-full'>{cartItem}</span>
    </div>
    </div>
    </div>
  )
}

export default Navbar