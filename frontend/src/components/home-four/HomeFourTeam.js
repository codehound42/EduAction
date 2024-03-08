import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import InstructorOne from '../instructor/InstructorOne';
import InstructorData from '../../data/instructor/InstructorData.json';

const HomeFourTeam = () => {
    const TeamMembers = InstructorData.slice(0, 4);
    return (
        <div className="eduvibe-home-four-team bg-image edu-team-area">
            <div className="container eduvibe-animated-shape">
                <div className="row">
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
                        TeamMembers.map( ( item ) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-3 col-md-6 col-sm-6 col-12 mt--45"
                                key={item.id}
                            >
                                <InstructorOne data={item} />
                            </ScrollAnimation>
                        ) )
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-07-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-04-06.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-31.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFourTeam;