import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios, { all } from 'axios';
import ProductCard from './ProductCard';

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
    

    // Checking if the data is fetched, then mapping the data to individual products. 
    return (
    <div className='h-full w-full grid grid-cols-5 p-2 overflow-scroll gap-4'>
        {isSuccess && allProducts.products.map(product => <ProductCard product={product}/>)}       
    </div>
  )
}

export default Products