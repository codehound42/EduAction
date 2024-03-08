import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import TestimonialOne from '../testimonial/TestimonialOne';

const TestimonialSectionFour = () => {
    return (
        <div className="eduvibe-testimonial-one edu-testimonial-area edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Testimonial"
                            title = "What Our Student Says"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--25">
                    <div className="col-lg-6 col-12">
                        <div className="satisfied-learner">
                            <div className="thumbnail">
                                <img src="/images/testimonial-section/testimonial-01.jpg" alt="Education Images" />
                            </div>
                            <div className="trophy-content bounce-slide">
                                <div className="icon">
                                    <img src="/images/testimonial-section/trophy.png" alt="Trophy Images" />
                                </div>
                                <div className="content">
                                    <h6 className="text">50K+</h6>
                                    <span>Satisfied Learners</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <TestimonialOne item="3" />
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-13.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-13-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-02-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSectionFour;