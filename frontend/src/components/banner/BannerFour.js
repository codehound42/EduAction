import React from 'react';
import { Link } from 'react-router-dom';

const BannerFour = () => {
    return (
        <div className="slider-area banner-style-4 bg-image">
            <div className="wrapper d-flex align-items-center home-four-banner-wrapper">
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="inner mt_md--10 mt_sm--10">
                                <div className="content text-start">
                                    <span className="pre-title">Learn New Things Daily</span>
                                    <h1 className="title">Education Is A Path To Success In Life</h1>
                                    <p className="description">Sed eu volutpat arcu, a tincidunt nulla quam, feugiat sit amet ipsum a, dapibus porta velit. </p>
                                    <div className="read-more-btn">
                                        <Link className="edu-btn" to="#">Get Started Today <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="banner-image">
                                <div className="thumbnail">
                                    <img src="/images/banner/banner-04/banner-03.png" alt="Banner Images" />
                                </div>
                                <div className="round-images">
                                    <img src="/images/banner/banner-04/hero-04-round.png" alt="Shape Images" />
                                </div>
                                <div className="learner-badge">
                                    <div className="badge-inner">
                                        <span className="viewer">28K</span>
                                        <span>Enrolled</span>
                                        <span>Learner</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ul className="social-text-share">
                        <li><a href="#">be</a></li>
                        <li><a href="#">tw</a></li>
                        <li><a href="#">li</a></li>
                        <li><a href="#">fb</a></li>
                    </ul>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="/images/shapes/shape-05-03.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src="/images/shapes/shape-05-04.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="/images/shapes/shape-19-04.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-4">
                            <img src="/images/shapes/shape-01-04.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-5">
                            <img src="/images/shapes/shape-01-03.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-6">
                            <img src="/images/shapes/shape-06.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-left">
                        <img src="/images/shapes/shape-13-08.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-right">
                        <img src="/images/shapes/shape-13-09.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerFour;