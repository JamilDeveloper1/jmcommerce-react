import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductProvider';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { data } from '../data';


function Products() {
    const {product,setProduct} = useContext(ProductContext);
    const [sort,setSort] = useState();
    const filteProduct = [...new Set(product.map(item => item.category))]
    const [cat,setCat] = useState(data);

    const filterThem = (id) => {
        const newProduct = product.filter(item => item.category === id);
        setProduct(newProduct);
    }
 
    const [itemOffset, setItemOffset] = useState(0);

 const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = product.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(product.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % product.length;
    setItemOffset(newOffset);
  };









  return (
    <div className='flex p-5 justify-between flex-col lg:flex-row  mb-20 xl:h-[700px]'>
        <div className='w-full lg:w-1/5 flex items-center justify-center flex-col gap-3 pt-3 '>
    {
        filteProduct.map(item =>(
            <button onClick={() => filterThem(item)} className='shadow-md border shadow-[#00000033] w-4/5 p-1'>{item}</button>
        ))
    }
    <button onClick={() =>setProduct(cat)} className='shadow-md border shadow-[#00000033] w-4/5 p-1'>All</button>
    
    <div>
        
    </div>
    </div>
    <div className=' flex flex-col items-center w-full lg:w-4/5 justify-between'>
        <div className='flex justify-center gap-5 flex-col p-10 lg:flex-row lg:justify-between  lg:w-11/12 '>
            <p className='max-[260px]:text-lg text-2xl lg:text-3xl font-bold text-[#ff7654]'>SHOP / ALL PRODUCTS</p>

            <select className='outline-none' onChange={(e) => setSort(e.target.value)}>
                <option disabled selected>Default Sorting</option>
                <option value="inc">Sort by price: low to high</option>
                <option value="dec">Sort by price: high to low</option>
            </select>
        </div>
    <div className='flex w-4/5 items-center justify-center flex-wrap  gap-3'>
{
    currentItems.sort((a,b) => sort === "inc" ? a.price-b.price : sort === "dec" ? b.price - a.price : null )
    .map(item => (
        <Link to={`/jmcommerce-react/product/${item.id}`} key={item.id}>
        <div  className=' max-[260px]:w-[200px]   w-[250px]  h-[250px] shadow-md shadow-[#00000046] flex items-center justify-center gap-3 flex-col'>
            <img src={item.image} className='w-[100px] h-[120px]' alt="" />
            <p>{item.title.substring(0,25)}</p>
            <p>{item.price}$</p>
        </div>
        </Link>
    ))
}
    </div>
    <ReactPaginate
    className='flex items-center justify-center gap-3 mt-5'
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>

    </div>
  )
}

export default Products