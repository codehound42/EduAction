import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTopButton from './ScrollTopButton';
import { FaArrowRight, FaMap } from 'react-icons/fa';

const FooterOne = () => {
    return (
        <>
            <footer className="eduvibe-footer-one edu-footer footer-style-default">
                <div className="">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5 pt--30">
                            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                                <div className="edu-footer-widget">
                                    <div className="logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}>
                                            <img className="logo-light" src="/images/logo/logo-white.png" alt="Footer Logo" />
                                        </Link>
                                    </div>
                                    <p className="description">From idea to product, in 1 hackathon.</p>
                                    <p className="description"><FaMap className="" style={{ marginRight: '10px' }} />Canary WharfLondon, GB</p>
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
                                    <h5 className="widget-title">SOLUTION</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Students</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Teachers</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Reporters</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Podcasters</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget quick-link-widget">
                                    <h5 className="widget-title">Tech</h5>
                                    <div className="inner">
                                        <ul className="footer-link link-hover">
                                        <li><Link to="/"><i className="icon-Double-arrow"></i>AI</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>ML</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Stability AI</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Other</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="edu-footer-widget">
                                    <h5 className="widget-title">COMPANY</h5>
                                    <div className="inner">
                                        <div className="widget-information">
                                            <ul className="information-list">
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Emil</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Nadav</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Basem</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Jeremy</Link></li>
                                            <li><Link to="/"><i className="icon-Double-arrow"></i>Maciek</Link></li>
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
                                    <p>© Copyright 2024. All rights reserved.</p>
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