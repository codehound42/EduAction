import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';
import { Element } from 'react-scroll';

const BannerLanding = () => {
    return (
        <Element
            name="intro"
            className="slider-area eduvibe-landing-banner bg-image"
        >
            <div className="d-flex align-items-center height-800">
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="inner">
                                <div className="content text-start">
                                    <h1 className="title">EduVibe Online Learning React Education Template</h1>
                                    <p className="description">Ultimate Feature Rich Education React Template for Online Schooling & Distance Learning.</p>
                                    <div className="btn-group-vertical">
                                        <a className="edu-btn left-button" href="https://1.envato.market/vn3rKv" target="_blank">
                                            Get EduVibe <i className="icon-arrow-right-line-right"></i>
                                        </a>
                                        <ScrollTo
                                            className="edu-btn bg-white right-button"
                                            to="demos"
                                            spy={true}
                                            smooth={true}
                                            duration={200}
                                        >
                                            Explore Demo <i className="icon-arrow-right-line-right"></i>
                                        </ScrollTo>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-image">
                                <div className="banner-main-image">
                                    <img className="landing-banner-hero-img" src="/images/banner/landing-demo/tablet-mobile-view.png" alt="Tablet & Mobile View" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="shape-wrapper">
                        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                            <div className="shape-image shape-image-1">
                                <img src="/images/shapes/shape-11-08.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img src="/images/shapes/shape-03.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-3">
                                <img src="/images/shapes/shape-23-02.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default BannerLanding;