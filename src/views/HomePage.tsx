import "../public/css/homePage.css";
import React, { useState, useEffect } from 'react';
import { PhotoCard } from '../components/PhotoCard'
import { useHistory } from "react-router-dom";
import { useIsNotFirst } from '../hooks/useIsNotFirst'


export const HomePage = () => {
    const columnArr = Array.from({ length: 3 })
    const photoArr = Array.from({ length: 10 })
    const [imgIdArr, setImgIdArr] = useState<number[]>([])
    let count: number = 0
    const history = useHistory()
    const random = (max: number) => {
        let v = (Math.floor(Math.random() * max));
        v = v >= 4 ? 4 : v
        return v
    }
    const isNotFirst = useIsNotFirst()
    useEffect(() => {
        let tmpIdArr = []
        for (let i = 0; i < columnArr.length; i++) {
            for (let j = 0; j < photoArr.length; j++) {
                tmpIdArr.push(random(i + 3))
            }
        }
        setImgIdArr(pre => isNotFirst == false ? tmpIdArr : pre)
        return () => {
        }
    }, [])

    return (

        <div className="home-wrapper">
            <div className="home-filter">
                <select>
                    <option>Newest Post</option>
                    <option>Park</option>
                    <option>Building</option>
                </select>
            </div>

            <div className="photos">
                {columnArr.map((v, i) => {
                    let cn = `photos-column${i + 1}`
                    return (
                        <div className={cn}>
                            {photoArr.map((v, j) => {
                                count++
                                const id = imgIdArr[count]
                                const height = (id + 2) * 100
                                const width = 300

                                //onClick={() => history.push('photoPage')}random(i + 1)random(i + 1)
                                return (<div onClick={() => {
                                    history.push({ pathname: `/photoPage/`, search: `?id=${id}&height:${height}&width:${width}` })
                                    console.log(id);
                                }}>

                                    <PhotoCard imgSrc={`https://picsum.photos/300/${(id + 2) * 100}?random=${id}`
                                    } key={i * j} />
                                </div>)
                            })}
                        </div>
                    )
                })}
            </div>

        </div>

    )
}
