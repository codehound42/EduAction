import React from 'react';
import { Link as ScrollTo } from 'react-scroll';
import ScrollTopButton from './ScrollTopButton';

const LandingDemoFooter = () => {
    return (
        <>
            <footer className="pv-footer edu-section-gap">
                <div className="container eduvibe-animated-shape">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner text-center">
                                <h3 className="title color-white mb--50">Build Best Educational Sites <br /> with EduVibe React Template</h3>
                                <div className="button-group">
                                    <a className="edu-btn purchase-btn" href="https://1.envato.market/e4x0yZ" target="_blank">
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

                    <div className="work-shop d-xl-block d-none">
                        <div className="inner">
                            <div className="thumbnail">
                                <img src="/images/banner/banner-01/workshop.png" alt="Workshop Images" />
                            </div>
                            <div className="content">
                                <h6 className="title">Design Workshop</h6>
                                <span className="time">Today at 6:00 am</span>
                                <div>
                                    <a className="edu-btn btn-secondary btn-small" href="#">Join Now<i className="icon-arrow-right-line-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-trophy d-lg-block d-none">
                        <div className="trophy-content">
                            <div className="icon">
                                <img src="/images/testimonial-section/trophy.png" alt="Trophy Images" />
                            </div>
                            <div className="content">
                                <h6 className="text">50K+</h6>
                                <span>Satisfied Learners</span>
                            </div>
                        </div>
                    </div>

                    <div className="student-like-status d-xl-block d-none">
                        <div className="inner">
                            <div className="icon">
                                <i className="icon-Smile"></i>
                            </div>
                            <div className="content">
                                <h6 className="title">900K</h6>
                                <span className="subtitle">Total Students</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-info d-xl-block d-none">
                        <div className="inner bounce-slide">
                            <div className="name">Shophia D. <span>/ Professior</span></div>
                            <div className="rating-wrapper d-flex">
                                <div className="rating eduvibe-course-rating-stars">
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                    <i className="icon-Star"></i>
                                </div>
                                <span>(2567)</span>
                            </div>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape shape-1">
                            <img src="/images/landing-demo/footer-shop.jpg" alt="Shop Single" />
                        </div>
                        <div className="shape shape-2">
                            <img src="/images/landing-demo/footer-student.jpg" alt="Student" />
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTopButton />
        </>
    )
}

export default LandingDemoFooter;