import React from 'react';
import { Link } from 'react-router-dom';

const BannerThree = () => {
    return (
        <div className="slider-area banner-style-3 bg-image">
            <div className="d-flex align-items-center height-940">
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="inner">
                                <div className="content text-start">
                                    <span className="pre-title">Better Learning Future With Us</span>
                                    <h1 className="title">Education Is About Academic Excellence</h1>
                                    <p className="description">Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit. </p>
                                    <Link className="edu-btn" to="#">Get Started Today <i className="icon-arrow-right-line-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-image">
                                <div className="banner-main-image">
                                    <img className="img-01" src="/images/banner/banner-03/image-01.png" alt="Banner Images" />
                                </div>
                                <img className="img-02" src="/images/banner/banner-03/image-02.png" alt="Banner Images" />
                                <img className="img-03" src="/images/banner/banner-03/image-03.png" alt="Banner Images" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="shape-wrapper">
                        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                            <div className="shape-image shape-image-1">
                                <img src="/images/shapes/shape-11-03.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img src="/images/shapes/shape-01-02.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-3">
                                <img src="/images/shapes/shape-13-06-07.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-4">
                                <img src="/images/shapes/shape-26.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-5">
                                <img src="/images/shapes/shape-05-01.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerThree;