
import "../public/css/photoPage.css";
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faLock, faCamera, faPlus, faHeart, faComments, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
export const PhotoPage = () => {
    const [title, setTitle] = useState<string>("Natural in Canada")
    const [imgData, setImgData] = useState({ url: `https://picsum.photos/400/600?random=2` })
    const [author, setAuthor] = useState<string>("Danny")
    const [time, setTime] = useState<string>("Jan.12  2021")
    const [place, setPlace] = useState<string>("Canada")
    const [likeAmount, setLikeAmount] = useState<number>(300)
    const [hdrData, sethdrData] = useState({})
    const [commentData, setCommentData] = useState([{ account: 'a', time: '10 mins ago', content: 'There are many resins that I like these', like: 5, dislike: 5 }, { account: 'b', time: '10 mins ago', content: 'There are many resins that I like these', like: 3, dislike: 1 }, { account: 'c', time: '30 mins ago', content: 'There are many resins that I like these', like: 15, dislike: 5 }])
    const [userComment, setUserComment] = useState<string>('')
    const url = useLocation()
    const getSearchData = (searchDataStr: string) => {
        const searchDataArr = searchDataStr.split('&')
        const idArr = searchDataArr[0].split('=')
        const heightArr = searchDataArr[1].split(':')
        const widthArr = searchDataArr[2].split(':')
        return [idArr[1], heightArr[1], widthArr[1]]
    }

    useEffect(() => {
        const searchDataStr = url.search;
        const searchDataArr = getSearchData(searchDataStr)
        console.log(searchDataStr);
        imgData.url = `https://picsum.photos/${searchDataArr[2]}/${searchDataArr[1]}?random=${searchDataArr[0]}`


        setImgData({ ...imgData })
        return () => {

        }
    }, [])

    return (

        <div className="photo-page-wrapper">
            <h1>{title}</h1>
            <div className="photo-page-info">


                <div className="photo-page-authorImg">
                    <FontAwesomeIcon icon={faUserAlt} className="photo-page-icon" />
                </div>
                <div className="photo-page-title">
                    <p>{author}</p>
                    <p>{title}</p>
                </div>
                <div className="photo-page-place">
                    <div>
                        <FontAwesomeIcon icon={faPlus} className="photo-page-icon" />
                        <p>follow</p>

                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLock} className="photo-page-icon" />
                        <p>{place}</p>
                    </div>
                </div>
                <div className="photo-page-like">
                    <FontAwesomeIcon icon={faHeart} className="photo-page-icon" />
                    <p>{likeAmount}</p>

                </div>
            </div>
            <div className="photo-page-hdr">
                <div className="photo-page-photo">
                    <img src={imgData.url} alt="" />
                </div>
                <div className="photo-page-parameter">
                    <FontAwesomeIcon icon={faCamera} className="photo-page-icon" />
                    <p>HDR</p>
                    <div className="parameters">
                        <p>光暈大小:20</p>
                        <hr />
                        <p>亮度臨界值:30</p>
                        <hr />
                        <p>高斯數值:40</p>
                        <hr />
                        <p>曝光度:50</p>
                        <hr />
                        <p>瞳孔適應度:60</p>
                        <hr />
                    </div>
                </div>


            </div>
            <div className="photo-page-comment">
                <div className="photo-page-input-title">
                    <FontAwesomeIcon icon={faUserAlt} className="photo-page-icon" />
                    <h1>Comment</h1>
                </div>

                <hr />
                <div className="photo-page-input-area">
                    <FontAwesomeIcon icon={faUserAlt} className="photo-page-icon" />
                    <div className="photo-page-input">
                        <input type="text" value={userComment} placeholder="LEAVE A COMMENTS..." onChange={(e) => {
                            const v = e.target.value
                            setUserComment(v)
                        }} />
                        <button>Enter</button>
                    </div>
                </div>
                <div className="photo-page-comments">
                    {commentData.map((data, i) => {
                        return (
                            <div className="photo-page-comment">
                                <div className="photo-page-user-info">
                                    <FontAwesomeIcon icon={faUserAlt} className="photo-page-icon" />
                                    <p>{data.account}</p>
                                    <p>{data.time}</p>

                                </div>
                                <div className="photo-page-user-content">
                                    <p>{data.content}</p>
                                    <FontAwesomeIcon icon={faThumbsUp} className="photo-page-icon" />
                                    <p>{data.like}</p>
                                    <FontAwesomeIcon icon={faThumbsDown} className="photo-page-icon" />
                                    <p>{data.dislike}</p>

                                </div>
                                <hr />
                            </div>)
                    })}
                </div>
            </div>
        </div>



    )
}
