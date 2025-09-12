import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
// Import SVG files
// import BoxIcon from '../logo/box-solid-full.svg';
import CartIcon from '../logo/cart-shopping-solid-full.svg';
import UserIcon from '../logo/circle-user-solid-full (1).svg';
import HeartIcon from '../logo/heart-regular-full.svg';


export default function Header() {
    return (
        <>
            <div className='header'>

                <div className='leftSubHeader'>
                    <Link to={'/'}>Men</Link>
                    <Link to={'/Women'}>Women</Link>
                    <Link to={'/Sneakers'}>Sneakers</Link>
                </div>
                <div className='centerLogo'>
                    <img  src="https://tss-static-images.gumlet.io/non-member-logo2.gif" alt="Logo" className='logo'></img>
                </div>

                <div className='rightSubHeader'>
                    <div className='textBox'>
                        <input type="search" placeholder="What are you looking for?    " />
                        <img src={UserIcon} alt="User" className="icon" />  
                    </div>
                    
                    <img src={UserIcon} alt="User" className="icon" />
                    <img src={CartIcon} alt="Cart" className="icon" />
                    <img src={HeartIcon} alt="Wishlist" className="icon" />
                   
                </div>


            </div>


        </>
    )
}
