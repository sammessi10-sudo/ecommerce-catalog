import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios, { all } from 'axios';

const Products = () => {
    const fetchProducts = async() => {                  // Function to fetch all the products through axios.
        const url = 'https://dummyjson.com/products';  
        const res = await axios.get(url)
        const data = await res.data;
        
        return data;
    }
    
    const {data: allProducts, isLoading, isError, isSuccess} = useQuery({      // Fetching all the products through useQuery.
        queryFn: fetchProducts,
        queryKey: ['products']
    })
    

    return (
    <div className='h-full w-full grid grid-cols-5 p-2 overflow-scroll gap-4'>
        {isSuccess && allProducts.products.map(product =>       // Checking if the data is fetched, then mapping the data to individual products. 

        <div key={product.id} className='flex flex-col bg-zinc-950'>
            <div >
                {<img src={product.images[0]} className='object-contain h-44 w-full rounded-sm border-1px-solid'/>} 
            </div>
            <div>
                <h1 className='bg-red-500'>{product.title}</h1>
                <p className=' bg-slate-500'>in-stock - {product.stock}</p>
            </div>
            <div>
                <p>{product.rating}</p>
            </div>
        </div>

    )}
    </div>
  )
}

export default Products