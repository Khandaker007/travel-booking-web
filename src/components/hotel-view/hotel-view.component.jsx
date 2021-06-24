import React from 'react'

import './hotel-view.style.scss'

// COMPONENTS
import ReviewBox from '../review-box/review-box.component'
import BackButton from '../back-button/back-button.component'

// IMAGE
import hotel1 from '../../assets/image/hotel-1.jpg'
import hotel2 from '../../assets/image/hotel-2.jpg'
import hotel3 from '../../assets/image/hotel-3.jpg'
import user1 from '../../assets/image/user-1.jpg'
import user2 from '../../assets/image/user-2.jpg'
import user3 from '../../assets/image/user-3.jpg'
import user4 from '../../assets/image/user-4.jpg'
import user5 from '../../assets/image/user-5.jpg'
// ICON
import star from '../../assets/icon/star.svg'
import locationPin from '../../assets/icon/location-pin.svg'
import rightArrow from '../../assets/icon/chevron-thin-right.svg'

const HotelView = () => (
    <main className="hotel-view">
        <div className="gallery">
            <figure className="gallery__item">
                <img src={hotel1} alt="hotel photo 1" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src={hotel2} alt="hotel photo 2" className="gallery__photo" />
            </figure>
            <figure className="gallery__item">
                <img src={hotel3} alt="hotel photo 3" className="gallery__photo" />
            </figure>
        </div>
        <div className="overview">
            <h1 className="overview__heading">
                Hotel grand sultan
            </h1>
            <div className="overview__stars">
                <img src={star} alt="icon star" className="overview__icon-star" />
                <img src={star} alt="icon star" className="overview__icon-star" />
                <img src={star} alt="icon star" className="overview__icon-star" />
                <img src={star} alt="icon star" className="overview__icon-star" />
                <img src={star} alt="icon star" className="overview__icon-star" />
            </div>
            <div className="overview__location">
                <img src={locationPin} alt="icon location" className="overview__icon-location" />
                <a href="#" className="overview__link-location">Sylhet, Srimongol</a>
            </div>
            <div className="overview__rating">
                <div className="overview__rating-average">9.2</div>
                <div className="overview__rating-count">576 votes</div>
            </div>
        </div>
        <div className="detail">
            <div className="description">
                <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                </p>
                <br />
                <p className="paragraph">
                Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                </p>

                <ul className="list">
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Close to the tea farm
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Breakfast included
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Free airport shuttle
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Free wifi in all rooms
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Air condition and heating
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Pets allowed
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        We speak all languages
                    </li>
                    <li className="list__item">
                        {/* <img src={rightArrow} alt="arrow icon" className="list__icon-arrow" /> */}
                        Perfect for families
                    </li>
                </ul>
                <div className="recommend">
                    <p className="recommend__count">
                        Jon and other 3 user recommends this hotel.
                    </p>
                    <div className="recommend__users">
                        <img src={user1} alt="user photo 1" className="recommend__user-photo" />
                        <img src={user2} alt="user photo 2" className="recommend__user-photo" />
                        <img src={user3} alt="user photo 3" className="recommend__user-photo" />
                        <img src={user4} alt="user photo 4" className="recommend__user-photo" />
                        <img src={user5} alt="user photo 5" className="recommend__user-photo" />
                    </div>
                </div>
            </div>
            <div className="user-review">
                <ReviewBox 
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.'
                    image={user1} 
                    userName='Nick Smith'
                    userDate='Jun 24th, 2021'
                    rating='8.5'
                />
                <ReviewBox 
                    text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.'
                    image={user4} 
                    userName='jesika jones'
                    userDate='Jan 15th, 2021'
                    rating='9.5'
                />
                <a href="#" className="btn-more">show more <span>&rarr;</span></a>
            </div>
        </div>
        <div className="book">
            <p className="book__header">
                good news! we have 4 free rooms for your selected date!
            </p>
            <button className="book__button">
                <span className='visible'>book now</span>
                <span className='invisible'>only 4 rooms left</span>
            </button>
        </div>

        <BackButton/>
    </main>
)

export default HotelView;