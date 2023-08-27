import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductProvider';
import { CartContext } from '../context/CartProvider';

function ProductsDetail() {
  const {id} = useParams();
  const {product} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  const prd = product.find(item => item.id === parseInt(id));
  const {title,image,price,description,category} = prd;
  return (
    <div className='flex   md:h-[770px]  justify-around p-3  flex-col gap-3 items-center md:items-start md:flex-row md:pt-40'>
      <img src={image} className=' w-[300px] h-[300px]' alt="" />
      <div className='flex flex-col w-11/12 md:w-1/2'>
      <p className='mb-3 text-xl sm:text-2xl font-bold'>{title}</p>
      <p className='font-bold text-xl'>${price} + <span className='text-lg font-normal'>Free Shipping</span></p><br />
      <p>{description}</p>
      <div className='w-4/5  border-b pb-5 border-slate-300'>
      <button onClick={()=>addToCart(prd,prd.id)} className='mt-3 w-[160px] rounded-md p-1 bg-[#ff7654]'>ADD TO CART</button>
    </div>
    <p className='mt-2'>Category : <span className='font-bold'>{category}</span></p>
    </div>
    </div>
  )
}

export default ProductsDetail