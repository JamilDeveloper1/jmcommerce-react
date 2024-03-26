import React, { useContext} from 'react'

import {BsArrowRight} from 'react-icons/bs'
import CartItem from '../components/CartItem'
import { ProductContext } from '../context/ProductProvider'
import { CartContext } from '../context/CartProvider';
function SideBar() {
    const {openBar,handleClick} = useContext(ProductContext);

    const {cartItem,totalPrice,removeAll} = useContext(CartContext);
    return (


    <div className={` ${ openBar ? 'right-0' : '-right-full'  }  w-full bg-[#0000004d] z-50 flex justify-end  
     fixed top-0 bottom-0`}>
<div className='bg-white p-3 w-full md:w-1/2 lg:w-1/3 overflow-y-scroll '>
        <div className='   p-3 flex items-center justify-between border-b border-slate-200'>
        <p className='font-bold'>Shopping Cart({cartItem})</p>
            <BsArrowRight onClick={handleClick} className='cursor-pointer text-2xl'/>
        </div>
        <CartItem/>
  <div className='p-3'>
   <p className='font-bold'>Total Price : {parseFloat(totalPrice).toFixed(2)}$</p>   
  </div>
  <div onClick={removeAll} className='flex font-bold items-center text-white bg-red-500 justify-center border p-1 mx-3 rounded-md cursor-pointer border-slate-300'>
    Clear All
  </div>
  <div  className='flex mt-3 font-bold items-center bg-black text-white justify-center border p-1 mx-3  rounded-md cursor-pointer border-slate-300'>
    Checkout
  </div>
   </div>
    </div>
  )
}

export default SideBar