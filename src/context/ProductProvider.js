import React, { createContext, useState } from 'react'


import {data} from '../data';


export const ProductContext = createContext();


export const ProductProvider = ({children}) =>{
    const [product,setProduct] = useState(data);
    const [openBar,setOpenBar] = useState(false);

    const handleClick = () =>{
        setOpenBar(!openBar);
    }

    return(
        <ProductContext.Provider value={{setProduct,product,openBar,handleClick}}>
            {children}
            </ProductContext.Provider>
    )
}