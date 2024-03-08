import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

const LandingDemoCourses = () => {
    return (
        <div className="edu-demo-course-layout edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" className="pre-section-title text-center" animateOnce={ true }>
                            <span className="color-primary pretitle">Course Layout</span>
                            <h3 className="title"><span className="color-primary">05</span> Responsive Course Layouts</h3>
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
                        <div className="single-demo inner-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/course-1"}>
                                        <img src="/images/landing-demo/course-1.jpg" alt="Course 1 Preview" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo inner-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/course-2"}>
                                        <img src="/images/landing-demo/course-2.jpg" alt="Course 2 Preview" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation 
                        animateIn="fadeInUp"
                        animateOut="fadeInOut"
                        className="col-lg-4 col-md-6 col-sm-6 col-12"
                        animateOnce={ true }
                    >
                        <div className="single-demo inner-demo">
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link className="thumbnail-link" to={process.env.PUBLIC_URL + "/course-3"}>
                                        <img src="/images/landing-demo/course-3.jpg" alt="Course 3 Preview" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-05-06.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image scene shape-image-2">
                        <img src="/images/shapes/shape-13-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image scene shape-image-3">
                        <img src="/images/shapes/shape-07-03.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingDemoCourses;