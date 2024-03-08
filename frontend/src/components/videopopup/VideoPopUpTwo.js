import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import { FaPlay } from 'react-icons/fa';

const items = [
    {
        title: 'Flexible Classes',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim',
        icon: 'icon-student'
    },
    {
        title: 'Offline Mode',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim',
        icon: 'icon-square'
    },
    {
        title: 'Flexible Learning',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim',
        icon: 'icon-research'
    },
    {
        title: 'Educator Support',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim',
        icon: 'icon-clock'
    }
];

const VideoPopUpTwo = () => {
    const [toggler, setToggler] = useState(false);
    const videoLink = ['https://www.youtube.com/watch?v=pNje3bWz7V8'];
    return (
        <div className="edu-feature-area eduvibe-home-one-video edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row row--35">
                    <div className="col-lg-5 col-12 order-2 order-lg-1">
                        <div className="inner mt_md--40 mt_sm--40">
                            <SectionTitle
                                classes = "text-start"
                                slogan = "Why Choose US"
                                title = "Our Core Features"
                            />
                            <div className="feature-list-wrapper mt--10">
                                { items.map( ( data , i ) => (
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        className="feature-list mt--35 mt_mobile--15"
                                        animateOnce={ true }
                                        key={ i }
                                    >
                                        <div className="icon">
                                            <i className={ data.icon }></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">{ data.title }</h6>
                                            <p>{ data.info }</p>
                                        </div>
                                    </ScrollAnimation>
                                ) ) }
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7 col-12 order-1 order-lg-2">
                        <div className="feature-thumbnail">
                            <div className="main-image video-popup-wrapper video-popup-two">
                                <img src={`${process.env.PUBLIC_URL}./images/videopopup/choose-us-image-01.jpg`} alt="Video PopUp Thumb" />

                                <button className="video-play-btn with-animation position-to-top btn-large video-popup-activation eduvibe-video-play-icon color-secondary" onClick={ () => setToggler( ! toggler ) }><span><FaPlay className="play-icon" /></span></button>
                            </div>

                            <div className="circle-image">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-14.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-11-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
            <div className="video-lightbox-wrapper">
                <FsLightbox 
                    toggler={ toggler } 
                    sources={ videoLink }
                    maxYoutubeVideoDimensions={{ width: 900, height: 550 }}
                />
            </div>
        </div>
    )
}

export default VideoPopUpTwo;