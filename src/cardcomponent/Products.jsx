import React from 'react';
import ProductsCarts from './ProductsCarts';


const Products = ({items,id}) => {
  
  return (
    <div className='flex flex-wrap justify-center gap-10 my-8'>
      {
        items.map((item) =>{
          return(
            <ProductsCarts  key={item.id} {...item}/>
          )
        })
      }
    </div>
  )
}

export default Products
