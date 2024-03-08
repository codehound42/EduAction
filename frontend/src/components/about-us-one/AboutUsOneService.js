import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import FeatureOne from '../feature/FeatureOne';

const AboutUsOneService = () => {
    return (
        <div className="eduvibe-about-us-one-service edu-service-area edu-section-gapBottom bg-color-white service-bg-position">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "What We Offer"
                            title = "Learn New Skills When And <br /> Where You Like"
                        />
                    </div>
                </div>

                <FeatureOne />

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-04-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-02-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsOneService;