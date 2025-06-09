import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import './pagination.css';
function Pagenation() {
    const [products,setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(0);
    const PAGE_SIZE =10; 


    const getProduct =async ()=>{
     try{
        const response = await fetch('https://dummyjson.com/products?limit=300')
        const data =await response.json();
        console.log(data)
        setProducts(data?.products);
        
     }
     catch(err){
        console.log("error is",err)
     }
    }

    useEffect(()=>{
       getProduct(); 
       console.log(products);
    },[]);


    const total_products =products.length;
    const numOfPage = Math.ceil(total_products/PAGE_SIZE);
    const start = currentPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const handlePageChange=(number)=>{
      setCurrentPage(number)
    } 
    const goToNextPage=()=>{
      setCurrentPage((prev)=> prev + 1)
    }
    const goToPrevicePage=()=>{
      setCurrentPage((prev)=> prev -1)
    }

  return !products.length?
  (
    <h1>Loading.....</h1>
  ):
  (
    <>
    <h1>Pagination</h1><br/>
    <div>
      <button disabled={currentPage === 0} onClick={()=>goToPrevicePage()}>previce</button>
        {[...Array(numOfPage).keys()].map((number)=>(
            <button className={`number ${number === currentPage ? "active" : ""}`}onClick={()=> handlePageChange(number)} key={number}>{number}</button>
        ))}
        <button disabled={currentPage === (numOfPage-1)} onClick={()=> goToNextPage()}>next</button>
    </div>
    <div className='main'>
    {products.slice(start,end).map((item)=>(
        <ProductItem key={item.id} image={item.thumbnail} title={item.title}/>
    ))}
    </div>  
    </> 
   
  )
  
}
export default Pagenation;