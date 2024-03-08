import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';

const AboutFour = () => {
    return (
        <div className="edu-about-area about-style-3 edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 pr--80">
                        <ScrollAnimation 
                            animateIn="fadeIn"
                            animateOut="fadeInOut"
                            className="gappery-wrapper"
                            delay={150}
                            animateOnce={ true }
                        >
                            <div className="row g-5 align-items-end">
                                <div className="col-lg-5 col-md-6">
                                    <div className="gallery-image mt--85">
                                        <img className="w-100" src="/images/about/about-04/gallery-1.jpg" alt="Gallery Images" />
                                        <div className="icon-badge">
                                            <i className="icon-ribbon"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-6">
                                    <div className="gallery-image">
                                        <img className="w-100" src="/images/about/about-04/gallery-2.jpg" alt="Gallery Images" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="gallery-image gallery-image-3 text-center">
                                        <img src="/images/about/about-04/gallery-3.jpg" alt="Gallery Images" />
                                        <div className="student-like-status bounce-slide">
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
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="col-lg-6">
                        <div className="inner">
                            <SectionTitle
                                classes = "text-start"
                                slogan = "About Us"
                                title = "Creating A Community Of Life Long Learners"
                            />

                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={ true }
                            >
                                <p className="description mt--40">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra. Facilisi sit miam mauris non iaculis elit fusce amet nunc in odio molestie.</p>
                            </ScrollAnimation>

                            <div className="feature-style-5 row g-5">
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="col-lg-12 col-xl-6"
                                    animateOnce={ true }
                                >
                                    <div className="edu-feature-list">
                                        <div className="icon">
                                            <i className="icon-Board"></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Flexible Classes</h6>
                                            <p className="description">There are many variations of passages of the Ipsum available for now</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="col-lg-12 col-xl-6"
                                    animateOnce={ true }
                                >
                                    <div className="edu-feature-list">
                                        <div className="icon">
                                            <i className="icon-Bag"></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Educator Support</h6>
                                            <p className="description">There are many variations of passages of the Ipsum available for now</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="read-more-btn mt--60 mt_lg--30 mt_md--30 mt_sm--30"
                                    animateOnce={ true }
                            >
                                <Link className="edu-btn" to="#">Learn More <i className="icon-arrow-right-line-right"></i></Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-21.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-13-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-15-02.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour;