import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = ({product}) => {
  return (
    <div key={product.id} className='flex flex-col bg-zinc-950 border border-white rounded-sm p-2'>
        <div>
            {<img src={product.images[0]} className='object-contain h-44 w-full rounded-sm border-1px-solid'/>} 
        </div>
        <div className=' text-lg h-10 flex justify-between items-center'>
            <span>{product.title}</span>
            <span>{product.rating}</span>
        </div>
        <div className='flex justify-between text-lg'>
            <p>$ {product.price}</p>
            <button className='bg-white text-black px-3 rounded-sm'><FaShoppingCart/></button>
        </div>
    </div>
  )
}

export default ProductCard