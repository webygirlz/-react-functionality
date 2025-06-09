import React, { useEffect, useRef, useState } from 'react'
import './Opt.css';
function Opt() {

  const OTP_DIGITS_COUNT  = 5
    const [inputArr,setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill(""));
    
    const refArr = useRef([]);

    useEffect(()=>{
    refArr.current[0]?.focus();
    },[])

     const handleOnChange =(value,index)=>{
      if(isNaN(value)) return;

      const newValue = value.trim();
      const newArray =[...inputArr];
      newArray[index] = newValue.slice(-1);
      setInputArr(newArray);
     
      newValue && refArr.current[index+1]?.focus();
     }

     const handleOnKeyDown=(e,index)=>{
       if(!e.target.value && e.key === "Backspace"){
        refArr.current[index - 1]?.focus();
       }
     }
  return ( 
    <div className="App">
      <h1>Vaildate OTP</h1>
      {inputArr.map((input,index)=>(
       <input className='opt-input' key={index} type="text" value={inputArr[index]} onChange={(e)=> handleOnChange(e.target.value,index)} ref={(input)=>(refArr.current[index] = input)}
       onKeyDown={(e)=>handleOnKeyDown(e,index)}
       />
      ))}
    </div>
  )
}

export default Opt

