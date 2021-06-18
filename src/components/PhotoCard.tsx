import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import "../public/css/photoCard.css";
export const PhotoCard = ({ imgSrc }) => {
    const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false)
    // const [imgSrc, setImgSrc] = useState<string>('https://picsum.photos/300/400?random=1')

    const onMouseEnter = () => {
        setIsMouseEnter(true)
    }
    const onMouseLeave = () => {
        setIsMouseEnter(false)
    }
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className="photo-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <div className="photo-card-img">
                <img src={imgSrc} />
            </div>
            <div className={isMouseEnter ? 'photo-card-footer' : 'disapper'}>
                <h2 >Topic</h2>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="photo-card-icon1" />
                <h2 className="photo-card-place">place</h2>
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="photo-card-icon2" />
                <h2 className="photo-card-like">0</h2>
            </div>
        </div>
    )
}
