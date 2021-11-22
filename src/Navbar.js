import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <h3>ShopCart</h3>
                    <div className='nav-container'>
                        <Link to='/'>Home</Link>
                        <Link to='/addproducts'>Add Products</Link>
                        <Link to='/editproductslist'>Edit List</Link>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar
