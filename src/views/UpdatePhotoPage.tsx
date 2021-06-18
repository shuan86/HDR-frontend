import "../public/css/updatePhotoPage.css";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'


export const UpdatePhotoPage = () => {
    const [filter, setFilter] = useState("information")
    const [topic, setTopic] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [location, setLocation] = useState<string>('')
    const [halo, setHalo] = useState<number>(0)
    const [brighness, setBrighness] = useState<number>(0)
    const [gaussian, setGaussian] = useState<number>(0)
    const [exposure, setExposure] = useState<number>(0)
    const [pupil, setPupil] = useState<number>(0)


    return (
        <div className="update-photo-wrapper">
            <div className="update-photo-area">
                <div className="update-area">
                    <FontAwesomeIcon icon={faUpload} size="6x" />
                    <p>Click Here to Upload</p>
                </div>
            </div>
            <div className="update-photo-parameter">
                <div className="update-photo-filter">
                    <h1 className={filter == 'information' ? 'update-photo-blue' : 'update-photo-gray'} onClick={() => {
                        setFilter("information")
                    }}>Information</h1>
                    <h1 className={filter == 'hdr' ? 'update-photo-blue' : 'update-photo-gray'} onClick={() => {
                        setFilter("hdr")
                    }}>HDR</h1>

                </div>
                <hr />
                <div className="update-photo-information" style={{ display: filter != "information" && 'none' }}>
                    <div>
                        <p>Topic</p>
                        <input type="text" value={topic} onChange={(e) => {
                            setTopic(e.target.value)
                        }} />
                    </div>
                    <div>
                        <p>Description</p>
                        <input type="textarea" className="update-photo-description" value={description} onChange={(e) => {
                            setDescription(e.target.value)
                        }} />

                    </div>
                    <div>
                        <p>Location</p>
                        <input type="text" value={location} onChange={(e) => {
                            setLocation(e.target.value)
                        }} />
                    </div>

                </div>
                <div className="update-photo-hdr" style={{ display: filter != "hdr" && 'none' }}>
                    <div>
                        <p>光暈大小</p>
                        <input type="number" value={halo} onChange={(e) => {
                            setHalo(e.target.valueAsNumber)
                        }} />
                    </div>
                    <div>
                        <p>亮度臨界值</p>
                        <input type="number" value={brighness} onChange={(e) => {
                            setBrighness(e.target.valueAsNumber)
                        }} />

                    </div>
                    <div>
                        <p>高斯數值</p>
                        <input type="number" value={gaussian} onChange={(e) => {
                            setGaussian(e.target.valueAsNumber)
                        }} />
                    </div>
                    <div>
                        <p>曝光度</p>
                        <input type="number" value={exposure} onChange={(e) => {
                            setExposure(e.target.valueAsNumber)
                        }} />
                    </div>
                    <div>
                        <p>瞳孔適應度</p>
                        <input type="number" value={pupil} onChange={(e) => {
                            setPupil(e.target.valueAsNumber)
                        }} />
                    </div>
                </div>
                <button>Update</button>

            </div>
        </div>


    )
}
