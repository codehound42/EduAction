import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaPlay } from 'react-icons/fa';

const VideoPopUpOne = ( props ) => {
    const [toggler, setToggler] = useState( false );
    const videoLink = [
        props.videoLink || 'https://www.youtube.com/watch?v=pNje3bWz7V8'
    ];
    return (
        <div className={ props.wrapperClass || 'thumbnail video-popup-wrapper' }>
            <img className={ props.imgClass } src={`${process.env.PUBLIC_URL}./images/videopopup/${props.imgSrc || 'video-popup-bg-01.jpg'}`} alt="Video PopUp Thumb" />
            
            <button className={`video-play-btn with-animation position-to-top video-popup-activation ${ props.linkClass ? props.linkClass : '' }` } onClick={ () => setToggler( ! toggler ) }><span><FaPlay className="play-icon" /></span></button>

            <FsLightbox 
                toggler={ toggler } 
                sources={ videoLink }
                maxYoutubeVideoDimensions={ { width: 900, height: 550 } }
            />
        </div>
    )
}

export default VideoPopUpOne;