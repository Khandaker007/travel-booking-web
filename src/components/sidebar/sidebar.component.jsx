import React from 'react'

import './sidebar.style.scss'

// ICON
import home from '../../assets/icon/home.svg'
import aircraft from '../../assets/icon/aircraft-take-off.svg'
import key from '../../assets/icon/key.svg'
import map from '../../assets/icon/map.svg'

const Sidebar = () => (
    <div className="content">
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item side-nav__item--active">
                    <a href="#" className="side-nav__link">
                        <img src={home} alt="home " className="side-nav__icon" />
                        <span>Home</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__link">
                        <img src={aircraft} alt="aircraft icon" className="side-nav__icon" />
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <img src={key} alt="key icon" className="side-nav__icon" />
                        <span>Rental car</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="" className="side-nav__link">
                        <img src={map} alt="map icon" className="side-nav__icon" />
                        <span>Tours</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; 2021 by Ninad. Design by other.
            </div>
        </nav>
    </div>
)

export default Sidebar;