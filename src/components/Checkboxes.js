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
        <div>
             <div>
        <label>
          <input
            type="checkbox"
             value="London"
            name="London"
            checked={checkedValue.includes("London")}
            onChange={inputHandler}
          />
          London
        </label>
        <label>
          <input
            type="checkbox"
            name="Paris"
            value="Paris"
            checked={checkedValue.includes("Paris")}
            onChange={inputHandler}
          />
          Paris
        </label>
        <label>
          <input
            type="checkbox"
            name="Rome"
            value="Rome"
            checked={checkedValue.includes("Rome")}
            onChange={inputHandler}
          />
          Rome
        </label>
        <hr />
      </div>
            
        </div>
    )
}

export default Checkboxes
