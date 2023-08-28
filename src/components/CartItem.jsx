import React, { useContext } from 'react'
import { CartContext} from '../context/CartProvider'

import {AiOutlineCloseCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
function CartItem() {

    const {cart,removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext);




if(cart.length === 0 ){
    return(
        <div className='flex flex-col gap-1 items-center justify-center h-[70%]'>
            Your cart is empty 
            <a href='/jmcommerce-react/products' className='border p-1 rounded-md bg-[#ff7654]'>Go Shopping</a>
            
        </div>
    )
}



  return (
    <div className='p-3 flex flex-col gap-3 h-[70%]'>
{
    cart.map(item => (
        <div className='flex justify-between gap-1 border-b border-slate-300 p-1'>
            <img src={item.image} width='40' alt="" />
            <div className='w-3/4'>
                <Link to={`/product/${item.id}`}>
            <p className='hover:underline'>{item.title.substring(0,20)}</p>
            </Link>
            <div className='flex  gap-1 items-center  justify-between'>
                <div className='border border-slate-300 w-[60px] flex items-center justify-between px-1'>
                    <button onClick={() =>decreaseAmount(item.id)}>-</button> <p>{(item.amount)}</p> <button onClick={() =>increaseAmount(item.id)}>+</button>
                </div>
            {/* <p className='max-[333px]:text-sm'> {item.amount } x ${item.price}</p> */}
            <p className='max-[333px]:text-sm'>{parseFloat(item.amount * item.price).toFixed(2)}$</p>
        
        </div>
        </div>
        <AiOutlineCloseCircle onClick={()=>removeFromCart(item.id)} className='text-xl cursor-pointer hover:text-red-300'/>
        </div>
    ))
}
    </div>
  )
}

export default CartItem