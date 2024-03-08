import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TestimonialThree from '../testimonial/TestimonialThree';
import SectionTitle from '../sectionTitle/SectionTitle';

const TestimonialSectionTwo = ( props ) => {
    return (
        <div className={`eduvibe-home-three-testimonial edu-testimonial-area testimonial-four-wrapper edu-section-gap bg-image ${props.classes ? props.classes : '' }`}>
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-8">
                        <ScrollAnimation 
                            animateIn="fadeIn"
                            animateOut="fadeInOut"
                            className="testimonial-activation pr--55 pr_lg--0 pr_md--0 pr_sm--0"
                            animateOnce={true}
                        >
                            <div className="testimonial-card-box variation-2">
                                <TestimonialThree />
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-four-right-content">
                            <SectionTitle
                                classes = "text-start"
                                slogan = "Testimonials"
                                title = "Students Feedback"
                            />
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                            >
                                <p className="description mt--25 mb--25">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis dictum et nec.</p>
                                <h6 className="subtitle">People Love To Learn With Us</h6>
                            </ScrollAnimation>

                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="row g-5"
                                animateOnce={true}
                            >
                                <div className="col-lg-6 col-md-6">
                                    <div className="feature-style-3">
                                        <div className="feature-content">
                                            <h6 className="feature-title">90%</h6>
                                            <p className="feature-description">Students Complete Course Successfully </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="feature-style-3">
                                        <div className="feature-content">
                                            <h6 className="feature-title">9/10</h6>
                                            <p className="feature-description">Users reported better learning outcomes.</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-04-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-08.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-19-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-16-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSectionTwo;