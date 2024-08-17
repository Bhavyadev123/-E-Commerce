import { useState } from 'react';
import React,{createContext} from "react";
import all_product from '../Components/assests/all_product'
//import WomenCategory from "../Components/WomenCategory";


export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart = {};
    for(let index = 0; index < all_product.length; index++){
        cart[index] = 0;
    }
    return cart;

}

const ShopContextProvider = (props)=>{
    const [cartItems,setCartItems] = useState(getDefaultCart());    
    //console.log(cartItems)

    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    // const addToCart = (productId, size) => {
    //     setCartItems((prevItems) => {
    //         return {
    //             ...prevItems,
    //             [productId]: {
    //                 quantity: (prevItems[productId]?.quantity || 0) + 1,
    //                 size: size,
    //             },
    //         };
    //     });
    // };
    
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCartAmount = () =>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount +=itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }
    const getTotalCartItems = ()=>{
        let totalItem =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem +=cartItems[item]
            }
        }
        return totalItem;
    }


    const contextValue = {getTotalCartItems, getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
            
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;

