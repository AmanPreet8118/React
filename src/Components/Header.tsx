import React from 'react'
import Logo from '../images/Logo-2.png'
import shopping from '../images/shopping-cart.svg'
import './Headercss.css'
import profile from '../images/noun_profile_2068277.svg'
function Header() {
    return (
        <div>
            <div className="head">
                <div className="logo">
                  <img src={Logo} alt="logo" />
                </div>
                <div className="course1">
                   <article>
                       Courses
                   </article>
                   </div>
                <div className="wish">
                   <article>
                       My Wishlist
                   </article>
                </div>
                <div className="cartlogo">
                  <img src={shopping} alt="shopping" />
                </div>
                <div className="profile">
                    <img src={profile} alt="profile" />
                </div>
            </div>
        </div>
    )
}

export default Header
