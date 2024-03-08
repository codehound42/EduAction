import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTopButton from './ScrollTopButton';

const FooterOne = () => {
    return (
        <>
            <footer className="eduvibe-footer-one edu-footer footer-style-default">
                <div className="footer-top">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="edu-footer-widget">
                                    <div className="logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}>
                                            <img className="logo-light" src="/images/logo/logo-white.png" alt="Footer Logo" />
                                        </Link>
                                    </div>
                                    <p className="description">It is a long established fact that a reader will be distracted by the readable content of a
                                        page when looking at its layout. The point of using Lorem Ipsum.</p>
                                    <ul className="social-share">
                                        <li><a href="#"><i className="icon-Fb"></i></a></li>
                                        <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                        <li><a href="#"><i className="icon-Pinterest"></i></a></li>
                                        <li><a href="#"><i className="icon-Twitter"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget explore-widget">
                                    <h5 className="widget-title">Explore</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/about-us-1"><i className="icon-Double-arrow"></i>About Us</Link></li>
                                            <li><Link to="/event-grid"><i className="icon-Double-arrow"></i>Upcoming Events</Link></li>
                                            <li><Link to="/blog-standard"><i className="icon-Double-arrow"></i>Blog & News</Link></li>
                                            <li><Link to="/faq"><i className="icon-Double-arrow"></i>FAQ Question</Link></li>
                                            <li><Link to="/testimonial"><i className="icon-Double-arrow"></i>Testimonial</Link></li>
                                            <li><Link to="/privacy-policy"><i className="icon-Double-arrow"></i>Privacy Policy</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h5 className="widget-title">Useful Links</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/contact-us"><i className="icon-Double-arrow"></i>Contact Us</Link></li>
                                            <li><Link to="/pricing"><i className="icon-Double-arrow"></i>Pricing Plan</Link></li>
                                            <li><Link to="/instructor-details/james-carlson"><i className="icon-Double-arrow"></i>Instructor Profile</Link></li>
                                            <li><Link to="/purchase-guide"><i className="icon-Double-arrow"></i>Purchase Guide</Link></li>
                                            <li><Link to="/course-1"><i className="icon-Double-arrow"></i>Popular Courses</Link></li>
                                            <li><Link to="/event-details/1"><i className="icon-Double-arrow"></i>Event Details</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget">
                                    <h5 className="widget-title">Contact Info</h5>
                                    <div className="inner">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                                <li><i className="icon-map-pin-line"></i>275 Quadra Street Victoria Road, New York
                                                </li>
                                                <li><i className="icon-phone-fill"></i><a href="tel: + 1 (237) 382-2839">+ 1 (237) 382-2839</a></li>
                                                <li><i className="icon-phone-fill"></i><a href="tel: + 1 (237) 382-2840">+ 1 (237) 382-2840</a></li>
                                                <li><i className="icon-mail-line-2"></i><a target="_blank" href="mailto:yourmailaddress@example.com">yourmailaddress@example.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shape-dot-wrapper shape-wrapper d-md-block d-none">
                            <div className="shape-image shape-image-1">
                                <img src="/images/shapes/shape-21-01.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img src="/images/shapes/shape-35.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area copyright-default">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-center">
                                    <p>Copyright 2022 <a href="#">EduVibe</a> Designed By <a href="https://themeforest.net/user/devsvibe">DevsVibe</a>. All Rights
                                        Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <ScrollTopButton />
        </>
    )
}

export default FooterOne;