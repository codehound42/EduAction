import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import HowItWorksOne from '../how-it-works/HowItWorksOne';

const HomeFiveProgress = () => {
    return (
        <div className="eduvibe-home-five-progress  edu-service-area edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "What We Offer"
                            title = "How Does Edulamp Work?"
                        />
                    </div>
                </div>

                <HowItWorksOne />

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-07-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-04-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-13-11.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFiveProgress;