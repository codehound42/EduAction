import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import ComingSoonOne from '../coming-soon/ComingSoonOne';

const AboutUsTwoCountDown = () => {
    return (
        <div className="edu-countdown-area edu-section-gap bg-image">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                        <div className="countdown-style-1">
                            <SectionTitle
                                classes = "text-center text-white mb--60"
                                slogan = "Upcoming Courses"
                                title = "Interested In Taking Admission The Next Batch"
                            />
                            <div className="countdown">
                                <ComingSoonOne time={Date.now() + 2443678888} renderB="enable" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsTwoCountDown;