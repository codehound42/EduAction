import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import TestimonialThree from '../testimonial/TestimonialThree';

const TestimonialSectionThree = () => {
    return (
        <div className="eduvibe-home-five-testimonial edu-testimonial-area testimonial-style-5 edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <ScrollAnimation 
                            animateIn="fadeIn"
                            animateOut="fadeInOut"
                            className="banner-thumbnail"
                            animateOnce={ true }
                        >
                            <img src="/images/testimonial-section/testimonial-section-03.jpg" alt="Testimonial Images" />
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <div className="content-wrapper pb_md--50 pb_sm--50">
                            <SectionTitle
                                classes = "text-start mb--40"
                                slogan = "Testimonials"
                                title = "Our Students Feedback"
                            />

                            <TestimonialThree item="3" arrows="disable" rating="disable" fade="disable" dots="enable" details2="enable" className="edu-slick-button slick-button-left" itemClass="testimonial-card-box variation-3" />
                            <div className="comment-images">
                                <img src="/images/testimonial-section/comment-icon.png" alt="Comment images" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-32-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-03-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-09-01.png" alt="Shape Thumb" />
                    </div>
                </div>

            </div>
            <div className="main-image">
                <img src="/images/testimonial-section/testimonial-bg-line-shape.png" alt="Shape Images" />
            </div>
        </div>
    )
}

export default TestimonialSectionThree;