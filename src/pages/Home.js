import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import AboutCom from '../components/AboutCom';
import {AiOutlineStar} from 'react-icons/ai'


function Home() {
    const {product} = useContext(ProductContext);
  return (
    <div className='p-5' data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1000">
        <div className='w-full h-[500px] flex flex-col justify-evenly md:flex-row items-center md:justify-around'>
            <img className='w-4/5 md:w-[450px]  lg:w-[600px] '  src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg" alt="" />
       <div className='w-11/12  md:w-1/3 flex flex-col gap-3'>
        <h1 className='font-bold text-2xl'>Welcome to the JM<span className='text-[#ff7654]'>COMMERCE</span></h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eveniet eligendi in nihil repudiandae nesciunt.
        </p>
        <Link to='/jmcommerce-react/products'>
        <button className='w-[130px] hover:bg-transparent hover:text-[#ff7654] flex items-center p-2 rounded-sm justify-between bg-[#ff7654]'>Go Shopping<AiOutlineShoppingCart/></button>
       </Link>
       </div>
        </div>
        <AboutCom/>
        <h1 className='mt-48 mb-28 text-center font-bold text-2xl md:text-4xl' >Best Selling Products</h1>
    <div className='flex w-full items-center flex-wrap justify-center gap-5 mt-3 '>
        {
            product.filter(item => item.category === "men's clothing"  )
            .map(item => (
                <Link to={`/jmcommerce-react/product/${item.id}`} key={item.id} id={item.id}>
                <div  className=' justify-between p-1 max-[260px]:w-[220px]  w-[250px] h-[250px] flex items-center flex-col gap-3'>
                    <img src={item.image} className='hover:scale-105 w-[100px] h-[120px] '   alt="" />
                    <p className='hover:underline'>{item.title.substring(0,20)}</p>
                    <p>{item.price}$</p>
                    <div className='flex items-center '>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    </div>
                    </div>
                    </Link>
            ))
        }
    </div>







    <h1 className='mt-52 mb-28 text-center font-bold text-2xl md:text-4xl' >Trending Products</h1>
    <div className='flex w-full items-center flex-wrap justify-center gap-5 mt-3 '>
        {
            product.filter(item => item.category === "electronics"  )
            .map(item => (
                <Link to={`/jmcommerce-react/product/${item.id}`} key={item.id} id={item.id}>
                <div  className=' justify-between p-1   w-[250px] h-[250px] flex items-center flex-col gap-3'>
                    <img src={item.image} className='hover:scale-105 w-[100px] h-[120px] '   alt="" />
                    <p className='hover:underline'>{item.title.substring(0,20)}</p>
                    <p>{item.price}$</p>
                    <div className='flex items-center '>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    </div>
                    </div>
                    </Link>
            ))
        }
    </div>











    </div>
  )
}

export default Home