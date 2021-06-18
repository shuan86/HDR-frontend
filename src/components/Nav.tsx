import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import logo from "../public/img/logo.jpg"
import "../public/css/nav.css"
import { useIsNotFirst } from "../hooks/useIsNotFirst";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

export const Nav = () => {
    const [searchVal, setsearchVal] = useState<string>("Search HDR")
    const isNotFirst = useIsNotFirst()
    const history = useHistory()
    return (
        <div className="nav-wrapper">
            <div className="logo" onClick={() => {
                history.push('/')
            }}>
                <img src={logo} alt="" className="logo-img" />
            </div>

            <div className="search  ">
                <div className="m-6 ">
                    <select>
                        <option>All</option>
                        <option>Park</option>
                        <option>Building</option>
                    </select>
                </div>
                <p className="line "></p>
                <div className="m-6 ">
                    <input className="search-input" type="text" value={searchVal} onFocus={() => {
                        if (isNotFirst == false) {
                            setsearchVal("")
                            console.log("123");

                        }
                    }} onChange={(e) => {
                        const v = e.target.value
                        setsearchVal(v)
                    }} />
                </div>
            </div>
            <div className="update" ><FontAwesomeIcon icon={faUpload} onClick={() => {
                console.log('s');

                history.push('/updataPhoto')
            }} /></div>

            <div className="login ">
                <button className="login-btn" onClick={() => {
                    history.push('/login')
                }}>login</button>
                <button className="signUp-btn" onClick={() => {
                    history.push('/enroll')
                }}>Sign up</button>
            </div>

        </div>
    )
}

