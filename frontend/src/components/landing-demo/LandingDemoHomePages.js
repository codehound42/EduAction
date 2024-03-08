import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import ScrollAnimation from 'react-animate-on-scroll';

const LandingDemoHomePages = () => {
    return (
        <Element
            name="demos"
            className="landing-home-demo-area edu-section-gap bg-color-white"
        >
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" className="pre-section-title text-center" animateOnce={ true }>
                            <span className="color-primary pretitle">Homepages</span>
                            <h3 className="title"><span className="color-primary">05</span> Creative & Trendy Homepages</h3>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="row g-5 mt--10">
                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/home-1"}>
                                        <img src="/images/landing-demo/home-01.jpg" alt="Home Page 1 Preview Thumb" />
                                    </Link>
                                    <div className="hover-action">
                                        <Link className="edu-btn" to={process.env.PUBLIC_URL + "/home-1"}>Explore <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                                <h5 className="title">
                                    <Link to={process.env.PUBLIC_URL + "/home-1"}>
                                        EduVibe Home 01
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/home-2"}>
                                        <img src="/images/landing-demo/home-02.jpg" alt="Home Page 2 Preview Thumb" />
                                    </Link>
                                    <div className="hover-action">
                                        <Link className="edu-btn" to={process.env.PUBLIC_URL + "/home-2"}>Explore <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                                <h5 className="title">
                                    <Link to={process.env.PUBLIC_URL + "/home-2"}>
                                        EduVibe Home 02
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/home-3"}>
                                        <img src="/images/landing-demo/home-03.jpg" alt="Home Page 3 Preview Thumb" />
                                    </Link>
                                    <div className="hover-action">
                                        <Link className="edu-btn" to={process.env.PUBLIC_URL + "/home-3"}>Explore <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                                <h5 className="title">
                                    <Link to={process.env.PUBLIC_URL + "/home-3"}>
                                        EduVibe Home 03
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/home-4"}>
                                        <img src="/images/landing-demo/home-04.jpg" alt="Home Page 4 Preview Thumb" />
                                    </Link>
                                    <div className="hover-action">
                                        <Link className="edu-btn" to={process.env.PUBLIC_URL + "/home-4"}>Explore <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                                <h5 className="title">
                                    <Link to={process.env.PUBLIC_URL + "/home-4"}>
                                        EduVibe Home 04
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/home-5"}>
                                        <img src="/images/landing-demo/home-05.jpg" alt="Home Page 5 Preview Thumb" />
                                    </Link>
                                    <div className="hover-action">
                                        <Link className="edu-btn" to={process.env.PUBLIC_URL + "/home-5"}>Explore <i className="icon-arrow-right-line-right"></i></Link>
                                    </div>
                                </div>
                                <h5 className="title">
                                    <Link to={process.env.PUBLIC_URL + "/home-5"}>
                                        EduVibe Home 05
                                    </Link>
                                </h5>
                            </div>
                        </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/"}>
                                        <img src="/images/landing-demo/coming-soon.jpg" alt="Coming Soon Preview Thumb" />
                                    </Link>
                                </div>
                                <h5 className="title">
                                    Coming Soon
                                </h5>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
                
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-03-10.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-29-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-04-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-16-02.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default LandingDemoHomePages;