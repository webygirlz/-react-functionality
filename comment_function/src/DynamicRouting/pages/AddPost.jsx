import React,{useEffect,useState} from 'react'
import './Home.css';
import { NavLink } from 'react-router-dom';
function AddPost() {
    const [blogData,setBlogData] = useState([]);

    useEffect(()=>{
    
             const  fetchData =async()=>{
             const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            console.log(data)
            setBlogData(data)
            }
            fetchData();
           
        },[])
  return (
    <div className='homeContainer'>
    {blogData.map((item)=>(
        <>
      <div className='homeContainer'>
        <h2 key={item.id}>{item.title}</h2>
        <NavLink to ={`/addPost/${item.id}`} state={{data:item}}>see more details</NavLink>
        </div>
        
      </>
    ))}

     </div>
  )
}

export default AddPost
