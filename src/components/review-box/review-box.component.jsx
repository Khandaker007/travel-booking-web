import React from 'react'

import './review-box.style.scss'

const ReviewBox = ({image, text, userName, userDate, rating}) => (
    <figure className="review">
        <blockquote className="review__text">{text}</blockquote>
        <figcaption className="review__user">
            <img src={image} alt="user review photo" className="review__photo" />
            <div className="review__user-box">
                <p className="review__user-name">{userName}</p>
                <p className="review__user-date">{userDate}</p>
            </div>
            <div className="review__rating">{rating}</div>
        </figcaption>
    </figure>
)

export default ReviewBox;