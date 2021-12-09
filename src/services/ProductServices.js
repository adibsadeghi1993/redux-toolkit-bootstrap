export const saveProductsInLocalStorage=(data)=>{
    localStorage.setItem("cartItems",JSON.stringify(data))
}

export const getProductsFromLocalStorage=()=>{
    const data=localStorage.getItem("cartItems")
    const parsedData=JSON.parse(data)
    return parsedData
}