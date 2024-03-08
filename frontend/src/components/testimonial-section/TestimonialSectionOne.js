import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TestimonialTwo from '../testimonial/TestimonialTwo';
import SectionTitle from '../sectionTitle/SectionTitle';

const TestimonialSectionOne = () => {
    return (
        <div className="eduvibe-home-four-testimonial edu-testimonial-area edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-6">
                        <ScrollAnimation 
                            animateIn="fadeIn"
                            animateOut="fadeInOut"
                            className="testimonial-left-image pr--80"
                            animateOnce={ true }
                        >
                            <div className="thumbnail">
                                <div className="circle-image-wrapper">
                                    <img className="radius-round" src="/images/testimonial-section/client-banner-left.jpg" alt="Testimonial Section Thumb" />
                                    <div className="circle-image">
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    <div className="col-lg-6">
                        <div className="testimonial-wrapper">
                            <SectionTitle
                                classes = "text-start mb--40"
                                slogan = "Testimonial"
                                title = "Our Students Feedback"
                            />
                            <TestimonialTwo />
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-01-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-25-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-11-04.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSectionOne;