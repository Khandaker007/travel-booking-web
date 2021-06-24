import React from 'react'

import './header.style.scss'

// LOGO
import logo from '../../assets/logo/ToiToi-logo.png'
// SVG ICON
import search from '../../assets/icon/magnifying-glass.svg'
import bookmark from '../../assets/icon/bookmark.svg'
import chat from '../../assets/icon/chat.svg'
// IMAGE
import user from '../../assets/image/Khandaker-nabiul.jpg'

const Header = () => (
    <div className="header">
        <img src={logo} alt="logo" className='logo' />
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder='Search hotels'/>
            <button className="search__button">
                <img src={search} alt="" className="search__icon" />
            </button>
        </form>
        <nav className="user-nav">
            <div className="user-nav__icon-box">
                <img src={bookmark} alt="bookmark icon" className="user-nav__icon" />
                <span className="user-nav__notification">7</span>
            </div>
            <div className="user-nav__icon-box">
                <img src={chat} alt="chat icon" className="user-nav__icon" />
                <span className="user-nav__notification">13</span>
            </div>
            <div className="user-nav__user">
                <img src={user} alt="user image" className="user-nav__user-img" />
                <span className="user-nav__user-name">Ninad</span>
            </div>
        </nav>

    </div>
)

export default Header;