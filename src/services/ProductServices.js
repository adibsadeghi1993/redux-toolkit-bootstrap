export const saveProductsInLocalStorage=(data)=>{
    localStorage.setItem("cartItems",JSON.stringify(data))
}

export const getProductsFromLocalStorage=()=>{
    const data=localStorage.getItem("cartItems")
    const parsedData=JSON.parse(data)
    return parsedData
}

export const saveTotalPriceInLocalStorage=(data)=>{
    localStorage.setItem("totalPrice",JSON.stringify(data))
}

export const getTotalPriceFromLocalStorage=()=>{
    const data=localStorage.getItem("totalPrice")
    const parsedData=JSON.parse(data)
    return parsedData
}