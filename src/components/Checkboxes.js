import React from 'react'

const Checkboxes = ({setCheckedValue,checkedValue}) => {

    const inputHandler=(e)=>{
        const city=e.target.name
        const exist=checkedValue.indexOf(city)
        console.log(exist)
        if(exist===-1){
         const updatedCheckedValue=[...checkedValue,city]
         console.log(updatedCheckedValue)
         setCheckedValue(updatedCheckedValue)
         console.log(checkedValue)

        }else {
          const filteredCheckedValue=checkedValue.filter((item)=>item !== city)
          setCheckedValue(filteredCheckedValue)
        }
       
    }
    return (
        <div className="mt-4">
          
        <label >
          <input
            type="checkbox"
             value="کفش"
            name="کفش"
            className="me-1"
            checked={checkedValue.includes("کفش")}
            onChange={inputHandler}
          />
         کفش
        </label>
        <label className="ms-2">
          <input
            type="checkbox"
            name="ساعت"
            value="ساعت"
            className="me-1"
            checked={checkedValue.includes("ساعت")}
            onChange={inputHandler}
          />
         ساعت
        </label>
        <label className="ms-2">
          <input
            type="checkbox"
            name="لپ تاپ"
            value="لپ تاپ"
            className="me-1"
            checked={checkedValue.includes("لپ تاپ")}
            onChange={inputHandler}
          />
          لپ تاپ
        </label>
      
      </div>
            
     
    )
}

export default Checkboxes
