import React, { useState } from 'react'
import './ToggleBtn.css'
function ToggleBtn() {
    const [isOn,setIsOn] = useState(false);
   
    const handleToogle =()=>{
            setIsOn(prev=> !prev)
    }
  return (
    <div>
      this is toggle btn
      <label className='switch'>
        <input type='checkbox' checked={isOn}  onChange={handleToogle}></input>
        <span className='slider'></span>
      </label>
    </div>
  )
}

export default ToggleBtn;