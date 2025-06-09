import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
function Home() {

    const navigate = useNavigate()
    
  return (
    <div>
      <h1>blog page</h1>
      <button onClick={()=> navigate('/addPost')}>click</button>
    </div>
  )
}

export default Home
