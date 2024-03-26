import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const CartContext = createContext();


export const CartProvider = ({children}) => {
    
    const [cart,setCart] = useState([]);
    const [cartItem,setCartItem] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);



//Calculate Total Price
    useEffect(() =>{
        const total = cart.reduce((pre,cart) => pre + (cart.amount * cart.price),0 );
        setTotalPrice(total);
    },[cart])

//ADD TO CART 
    const addToCart = (product,id) =>{
        const cartItem = cart.find(item => item.id === id);

        if(cartItem) {
            const newCart = [...cart].map(item =>{
                if(item.id === id ){
                    return {...item,amount : item.amount + 1}
                }else{
                    return item;
                }
            })
            setCart(newCart);
        }
else{
    setCart([...cart,{...product,amount : 1}])
}

toast.success('Added successfully!' , {
    autoClose: 1000,

}); 

    }

 //REMOVE FROM CART
    const removeFromCart = (id) =>{
        const newCart = cart.filter(item => item.id !== id);
        setCart(newCart);
        toast.success('Remove successfully!',{
            autoClose : 1000,
        })
    }


 //WHEN WE WILL ADD A PRODUCT TO THE CART ITEMAMOUNT + 1    
    useEffect(() =>{
        const newCart = cart.reduce((pre,currentItem) => (pre + currentItem.amount),0);
        setCartItem(newCart);
    },[cart])




 //REMOVE ALL CART
    const removeAll = () => {
        setCart([]);
    }

 //INCREASE AMOUNT 

 const increaseAmount = (id) => {
    setCart(cart => [...cart].map(item =>{
       return item.id === id ? {...item,amount : item.amount + (item.amount < 1000 ? 1 : 0)} : item
    }))
 }

 //Decrease AMOUNT 

 const decreaseAmount = (id) => {
    setCart(cart => [...cart].map(item =>{
       return item.id === id ? {...item,amount : item.amount - (item.amount > 1 ? 1 : 0)} : item
    }))
 }


    return(
        <CartContext.Provider value={{
        addToCart,
        cart,
        removeFromCart,
        cartItem,
        totalPrice,
        removeAll,
        increaseAmount,
        decreaseAmount
        }}>
            {children}
        </CartContext.Provider>
    )
}