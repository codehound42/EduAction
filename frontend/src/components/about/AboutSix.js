import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';

const AboutSix = () => {
    const [toggler, setToggler] = useState( false );
    const videoLink = ['https://www.youtube.com/watch?v=pNje3bWz7V8'];
    return (
        <>
            <div className="edu-workshop-area eduvibe-home-three-video workshop-style-1 edu-section-gap bg-image bg-color-primary">
                <div className="container eduvibe-animated-shape">
                    <div className="row gy-lg-0 gy-5 row--60 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="workshop-inner">
                                <SectionTitle
                                    classes = "text-white"
                                    slogan = "Free Workshop"
                                    title = "Join Our Free Workshops"
                                />

                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={ true }
                                >
                                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit amet, consect adipi scing elit, sed do eiusmod tempor incididunt ut sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="read-more-btn"
                                    animateOnce={ true }
                                >
                                    <Link className="edu-btn btn-white" to="/event-list">More Upcomming Workshop<i className="icon-arrow-right-line-right"></i></Link>
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail video-popup-wrapper">
                                <img className="radius-small w-100" src={`${process.env.PUBLIC_URL}./images/videopopup/video-popup-bg-02.jpg`} alt="Video PopUp Thumb" />
                                <button className="video-play-btn with-animation position-to-top video-popup-activation color-secondary size-60" onClick={ () => setToggler( ! toggler ) }>
                                    <span><FaPlay className="play-icon" /></span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="/images/shapes/shape-09-01.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src="/images/shapes/shape-04-05.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="/images/shapes/shape-13-02.png" alt="Shape Thumb" />
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

export default AboutSix;