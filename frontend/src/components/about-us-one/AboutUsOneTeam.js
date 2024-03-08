import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import InstructorOne from '../instructor/InstructorOne';
import InstructorData from '../../data/instructor/InstructorData.json';

const AboutUsOneTeam = () => {
    const TeamMembers = InstructorData.slice(0, 8);
    return (
        
        <div className="eduvibe-about-one-team edu-team-area edu-section-gap team-area-shape-position bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Skilled Instructor"
                            title = "Introduce Our Life Coaches"
                        />
                    </div>
                </div>
                <div className="row row--20">
                    { 
                        TeamMembers.map((item) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-3 col-md-6 col-sm-6 col-12 mt--45"
                                key={item.id}
                            >
                                <InstructorOne data={item} />
                            </ScrollAnimation>
                        ))
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-08-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-16-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-04-02.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>

            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape-image shape-image-2">
                    <img src="/images/shapes/shape-24-02.png" alt="Shape Thumb" />
                </div>
            </div>
        </div>
    )
}

export default AboutUsOneTeam;