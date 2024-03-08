import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollTo } from 'react-scroll';

const BannerOne = () => {
    return (
        <div className="slider-area banner-style-1 bg-image height-940 d-flex align-items-center">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 row--40 align-items-center">
                    <div className="order-2 order-xl-1 col-lg-12 col-xl-6">
                        <div className="banner-left-content">
                            <div className="inner">
                                <div className="content">
                                    <span className="pre-title">Excellence in Education</span>
                                    <h1 className="title">Start Better Learning Future From Here</h1>
                                    <p className="description">Learning is a life-long journey that in fact we never find the
                                        terminate stop. Stop searching, enjoy the process.</p>
                                    <div className="read-more-btn">
                                        <Link className="edu-btn" to="#">Get Started Today <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 order-xl-2 col-lg-12 col-xl-6 banner-right-content">
                        <div className="row g-5">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="edu-card card-type-6 radius-small">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link to="/course-details/2">
                                                <img className="w-100" src="images/banner/banner-01/banner-course.jpg"
                                                    alt="Course Meta" />
                                            </Link>
                                            <div className="top-position status-group left-top">
                                                <span className="eduvibe-status status-01 bg-primary-color">UI Design</span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <ul className="edu-meta meta-04">
                                                <li><i className="icon-file-list-3-line"></i>39 Lessons</li>
                                                <li><i className="icon-time-line"></i>8 Hours 28 min</li>
                                            </ul>
                                            <h6 className="title"><Link to="/course-details/2">Learning How To Write As A Professional Author</Link></h6>
                                            <div className="card-bottom">
                                                <p>Nunc laoreet, lectue dapibus maximus sapien and tincidunted  nequed for an finibu euarcu.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="work-shop">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src="/images/banner/banner-01/workshop.png" alt="Workshop Images" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Design Workshop</h6>
                                            <span className="time">Today at 6:00 am</span>
                                            <div>
                                            <Link className="edu-btn btn-secondary btn-small" to="/event-details/1">Join Now<i className="icon-arrow-right-line-right"></i></Link>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="video-thumbnail eduvibe-hero-one-video">
                                    <div className="thumbnail">
                                        <img className="w-100" src="/images/banner/banner-01/video-image.png" alt="Video Images" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape shape-1">
                        <img src="/images/shapes/shape-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-2">
                        <img src="/images/shapes/shape-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-3">
                        <img src="/images/shapes/shape-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-4">
                        <img src="/images/shapes/shape-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-5">
                        <img src="/images/shapes/shape-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-6">
                        <img src="/images/shapes/shape-05-05.png" alt="Shape Thumb" />
                    </div>
                </div>

                <div className="shape-round">
                    <img src="/images/banner/banner-01/shape-27.png" alt="Shape Images" />
                </div>

            </div>

            <div className="scroll-down-btn">
                <ScrollTo
                    className="round-btn"
                    to="about-us"
                    spy={true}
                    smooth={true}
                    duration={200}
                >
                    <i className="icon-arrow-down-s-line"></i>
                </ScrollTo>
            </div>
        </div>

    )
}
export default BannerOne;