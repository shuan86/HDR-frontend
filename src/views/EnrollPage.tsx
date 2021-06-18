import "../public/css/enrollPage.css";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons'
export const EnrollPage = () => {



    return (
        <div className="enroll-wrapper">
            <div className="enroll-form">
                <h1>Enroll</h1>
                <div className="enroll-form-account">
                    <FontAwesomeIcon icon={faUserAlt} size="1x" className="enroll-form-icon" />
                    <input type="text" placeholder="Account" required />
                </div>
                <div className="enroll-form-password">
                    <FontAwesomeIcon icon={faLock} size="1x" className="enroll-form-icon" />

                    <input type="password" placeholder="Password" required />
                </div>
                <div className="enroll-form-repassword">
                    <FontAwesomeIcon icon={faLock} size="1x" className="enroll-form-icon" />

                    <input type="password" placeholder="Password" required />
                </div>
                <div className="enroll-form-email">
                    <FontAwesomeIcon icon={faLock} size="1x" className="enroll-form-icon" />

                    <input type="text" placeholder="Email" required />
                </div>
                <div className="enroll-form-key">
                    <FontAwesomeIcon icon={faLock} size="1x" className="enroll-form-icon" />

                    <input type="text" placeholder="Public key" required />
                </div>
                <button type="submit">enroll</button>
            </div>
        </div>


    )
}
