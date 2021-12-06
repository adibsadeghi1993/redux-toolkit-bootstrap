
export const saveDataInLocalStorage=(data)=>{
    localStorage.setItem("userInfo",JSON.stringify(data))
}
export const getDataFromLocalStorage=()=>{
    const data=localStorage.getItem("userInfo")
    const parsedData=JSON.parse(data)
    return parsedData
}