import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaPlay } from 'react-icons/fa';
import SectionTitle from '../sectionTitle/SectionTitle';
import FeatureTwo from '../feature/FeatureTwo';

const AboutUsTwoService = () => {
    const [toggler, setToggler] = useState( false );
    const videoLink = ['https://www.youtube.com/watch?v=pNje3bWz7V8'];
    return (
        <>
            <div className="edu-service-area service-wrapper-3">
                <div className="about-us-two-service-wrapper edu-section-gapTop bg-image position-relative">
                    <div className="eduvibe-about-us-two-service">
                        <div className="container eduvibe-animated-shape">
                            <div className="row">
                                <div className="col-lg-12">
                                    <SectionTitle
                                        classes = "text-center"
                                        slogan = "What We Offer"
                                        title = "Learn New Skills When And <br /> Where You Like"
                                    />
                                </div>
                            </div>

                            <FeatureTwo />

                            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                                <div className="shape-image shape-image-1">
                                    <img src="/images/shapes/shape-29.png" alt="Shape Thumb" />
                                </div>
                                <div className="shape-image shape-image-2">
                                    <img src="/images/shapes/shape-02-06.png" alt="Shape Thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    <div className="eduvibe-about-us-two-video">
                        <div className="container eduvibe-animated-shape">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="video-gallery-wrapper edu-section-gapTop video-section-overlayto-another">
                                        <div className="video-gallery-1">
                                            <div className="thumbnail video-popup-wrapper">
                                                <img className="radius-small w-100" src={`${process.env.PUBLIC_URL}./images/videopopup/video-popup-bg-01.jpg`} alt="Video PopUp Thumb" />
                                                <button className="video-play-btn with-animation position-to-top video-popup-activation btn-secondary-color size-80" onClick={ () => setToggler( ! toggler ) }>
                                                    <span><FaPlay className="play-icon" /></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                                <div className="shape-image shape-image-1">
                                    <img src="/images/shapes/shape-07-01.png" alt="Shape Thumb" />
                                </div>
                                <div className="shape-image shape-image-2">
                                    <img src="/images/shapes/shape-03-02.png" alt="Shape Thumb" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FsLightbox 
                toggler={ toggler } 
                sources={ videoLink }
                maxYoutubeVideoDimensions={ { width: 900, height: 550 } }
            />
        </>
    )
}

export default AboutUsTwoService;