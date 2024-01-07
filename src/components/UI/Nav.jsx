import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className='text-xl font-semibold flex w-full justify-between items-center h-16'>
      <h1>ecommerce</h1>
      <div className='flex gap-6 items-center'>
        <NavLink>catalog</NavLink>
        <NavLink><FaShoppingCart/></NavLink>
        <NavLink>user</NavLink>
      </div> 
    </nav>
  )
}

export default Nav
