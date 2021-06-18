import "../public/css/loginPage.css";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons'


export const LoginPage = () => {



    return (
        <div className="login-wrapper">
            <div className="login-form">
                <h1>Login</h1>
                <div className="login-form-account">
                    <FontAwesomeIcon icon={faUserAlt} size="1x" className="login-form-icon" />
                    <input type="text" placeholder="Account" name="account" required />
                </div>
                <div className="login-form-password">
                    <FontAwesomeIcon icon={faLock} size="1x" className="login-form-icon" />

                    <input type="password" placeholder="Password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </div>
        </div>


    )
}
