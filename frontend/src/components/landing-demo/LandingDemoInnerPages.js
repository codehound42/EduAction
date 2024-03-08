import React from 'react';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';
import { InnerPagesSliderParams } from '../../utils/script';

const LandingDemoInnerPages = () => {
    return (
        <div className="edu-demo-course-layout edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" className="pre-section-title text-center" animateOnce={ true }>
                            <span className="color-primary pretitle">INNER PAGES</span>
                            <h3 className="title"><span className="color-primary">45+</span> Beautiful Pre-built Inner Pages</h3>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            

            <div className="g-5 mt--40">
                <Slider
                    className="landing-inner-pages"
                    { ...InnerPagesSliderParams }
                >
                    <img className="w-100" src="/images/landing-demo/innerpages-1.png" alt="Inner Page 1" />
                    <img className="w-100" src="/images/landing-demo/innerpages-2.png" alt="Inner Page 2" />
                    <img className="w-100" src="/images/landing-demo/innerpages-3.png" alt="Inner Page 3" />
                    <img className="w-100" src="/images/landing-demo/innerpages-4.png" alt="Inner Page 4" />
                    <img className="w-100" src="/images/landing-demo/innerpages-5.png" alt="Inner Page 5" />
                    <img className="w-100" src="/images/landing-demo/innerpages-6.png" alt="Inner Page 6" />
                </Slider>
            </div>
        </div>
    )
}

export default LandingDemoInnerPages;