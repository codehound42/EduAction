import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';

const items = [
    {
        title: 'Flexible Classes',
        info: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        icon: 'icon-Hand---Book'
    },
    {
        title: 'Learn From Anywhere',
        info: 'It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.',
        icon: 'icon-Campus'
    }
];

const HomeOneAbout = () => {
    return (
        <Element
            name="about-us"
            className="edu-about-area about-style-1 edu-section-gap bg-color-white"
        >
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-5">
                        <div className="about-image-gallery">
                            <img className="img-fluid" src="/images/ai/ai-logo.png" alt="AI" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="inner">
                            <SectionTitle
                                slogan = "EduActive"
                                title = "Made in Encode London AI Hackathon, 08-10/03/2024"
                            />
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={ true }
                            >
                            </ScrollAnimation>
                            
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="read-more-btn"
                                animateOnce={ true }
                            >
                                <a className="edu-btn" href="https://www.encode.club/ai-hackathon" target="_blank">Know About Us<i className="icon-arrow-right-line-right"></i></a>
                            </ScrollAnimation>
                            <div className="shape shape-6 about-parallax-2 d-xl-block d-none">
                                <img src="/images/shapes/shape-07.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default HomeOneAbout;