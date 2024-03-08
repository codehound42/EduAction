import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import InstructorTwo from '../instructor/InstructorTwo';
import InstructorData from '../../data/instructor/InstructorData.json';

const AboutUsTwoInstructor = () => {
    const TeamMembers = InstructorData.slice(0, 3);
    return (
        <div className="eduvibe-about-us-two-instructor edu-elements-area edu-section-gap">
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
                <div className="row g-5 mt--5">
                    { 
                        TeamMembers.map( ( item ) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-4 col-md-6 col-sm-6 col-12 mt--45"
                                key={ item.id }
                            >
                                <InstructorTwo data={ item } />
                            </ScrollAnimation>
                        ))
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-03-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-08.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-34.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-27-02.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsTwoInstructor;