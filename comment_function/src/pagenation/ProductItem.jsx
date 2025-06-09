import './pagination.css';

function ProductItem({image,title,}) {
  return (
    <div className='productContainer'>
     <h1>{title}</h1>
     <img className='ProductItem-img' src={image} alt="img"/>
     
    </div>
  )
}

export default ProductItem
