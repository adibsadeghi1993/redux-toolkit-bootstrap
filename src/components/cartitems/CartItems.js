import React from 'react'
import {useSelector} from "react-redux"

const CartItems = () => {
    const {cartItems} = useSelector(state => state.products)
    return (
        <div>
            
            
        </div>
    )
}

export default CartItems
