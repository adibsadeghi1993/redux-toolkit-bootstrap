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
        <div className="mt-5">
            <div><p>محصول خود را انتخاب کنید:</p></div>
        <div class="form-check form-check-inline">
  <input class="form-check-input" onChange={(e)=>setCheckedValue(e.target.value)} checked={checkedValue.includes("ساعت")} type="checkbox" id="inlineCheckbox1" value="ساعت"/>
  <label class="form-check-label" for="inlineCheckbox1">ساعت</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input"  onChange={(e)=>setCheckedValue(e.target.value)} checked={checkedValue.includes("کفش")} type="checkbox" id="inlineCheckbox2" value="کفش" />
  <label class="form-check-label" for="inlineCheckbox2">کفش</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input"  onChange={(e)=>setCheckedValue(e.target.value)} checked={checkedValue.includes("لپ تاپ")} type="checkbox" id="inlineCheckbox3" value="لپ تاپ" />
  <label class="form-check-label" for="inlineCheckbox3">لپ تاپ</label>
</div>
      
      </div>
            
     
    )
}

export default Checkboxes
