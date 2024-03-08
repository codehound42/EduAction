import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

const GalleryItem = ({ data }) => {
    const [toggler, setToggler] = useState(false);
    return (
        <div className="edu-gallery-grid-item grid-metro-item cat--1 cat--3">
            <div className="edu-gallery-grid">
                <div className="inner">
                    <div className="thumbnail">
                        <img className="w-100" src={`${process.env.PUBLIC_URL}./images/gallery/gallery-images/${ data.thumb }`} alt="Gallery Thumb" />
                    </div>
                </div>
                
                <button className="zoom-icon" onClick={ () => setToggler(!toggler) }><i className="icon-zoom-in-line"></i></button>
                <FsLightbox toggler={ toggler } sources={data.image} />

                <div className="hover-action">
                    <div className="hover-content">
                        <div className="hover-text">
                            <h6 className="title">{ data.title }</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GalleryItem;