import React, { useEffect, useState } from 'react'
import './Search.css'
function Search() {
    const [result,setResult] = useState();
    const [input,setInput] = useState([]);
    const [showResult,setShowResult] = useState(false);
    const [cache,setCache] = useState({});

     const getData = async()=>{
        if(cache[input]){
            console.log('cache retune ',input)
            setResult(cache[input]);
            return;
        }
     console.log("Api call",input);
     const response = await fetch('https://dummyjson.com/recipes/search?q=' +input);
     const data = await response.json();
    //  console.log("here is the data that we are getting from fetch request",data)
    setResult(data?.recipes);
    //  we do not want to replace the data we want to append the data so firtly we get previce data and then add new data
    setCache((prev)=>({...prev,[input]:data?.recipes})) 
    }
    // getData()

    useEffect(()=>{
    const getdatatime = setTimeout( getData ,300);

    return ()=> {
        clearTimeout(getdatatime);
    }
    },[input])
   
  return (
    <>
    <div className='container'>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}
         onFocus={()=> setShowResult(true)}
         onBlur={()=> setShowResult(false)}
         /> 
        <div className='result-container'>
            {showResult && result?.map((recipe)=>(
               <span className='result' key={recipe.id}>{recipe.name}</span>
            ))}
        </div>
    </div>     
    </>
  )
}

export default Search;


// how can we caches the data
// there are diffrenet way to caches the result ofcouse it in depent on  u how u want to do or if there is alredy mention it.
// using loacal state, session ,usig localstroge
