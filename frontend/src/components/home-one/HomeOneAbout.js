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
                    <div className="col-lg-6">
                        <div className="about-image-gallery">
                            <img className="image-1" src="/images/about/about-09/about-image-01.jpg" alt="About Main Thumb" />
                            <div className="image-2">
                                <img src="/images/about/about-09/about-image-02.jpg" alt="About Parallax Thumb" />
                            </div>
                            <div className="badge-inner">
                                <img className="image-3" src="/images/about/about-09/badge.png" alt="About Circle Thumb" />
                            </div>
                            <div className="shape-image shape-image-1">
                                <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner">
                            <SectionTitle
                                slogan = "About Us"
                                title = "Creating A Community Of Life Long Learners"
                            />
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={ true }
                            >
                                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc
                                null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.</p>
                            </ScrollAnimation>
                            { items && items.length > 0 &&
                                <div className="about-feature-list">
                                    { items.map( ( data , i ) => (
                                        <ScrollAnimation 
                                            animateIn="fadeInUp"
                                            animateOut="fadeInOut"
                                            className="our-feature"
                                            animateOnce={ true }
                                            key={i}
                                        >
                                            <div className="our-feature">
                                                <div className="icon">
                                                    <i className={ data.icon }></i>
                                                </div>
                                                <div className="feature-content">
                                                    <h6 className="feature-title">{ data.title }</h6>
                                                    <p className="feature-description">{ data.info }</p>
                                                </div>
                                            </div>
                                        </ScrollAnimation>
                                    ) ) }
                                </div>
                            }
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="read-more-btn"
                                animateOnce={ true }
                            >
                                <Link className="edu-btn" to="/about-us-1">Know About Us<i className="icon-arrow-right-line-right"></i></Link>
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