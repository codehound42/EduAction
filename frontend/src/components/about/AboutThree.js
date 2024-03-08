import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';

const features = [
    {
        icon: 'icon-award-fill',
        title: '2000+ Verified Course'
    },
    {
        icon: 'icon-video-fill',
        title: '256+ Free Videos'
    },
    {
        icon: 'icon-user-fill',
        title: 'Expert Instructors'
    },
    {
        icon: 'icon-flag-fill',
        title: 'Big Student Community'
    }
];

const AboutThree = () => {
    return (
        <div className="edu-choose-us-area-one  choose-us-style-1 edu-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="thumbnail">
                            <img src="/images/about/about-03/choose-us-image-01.png" alt="Choose Us Images" />
                        </div>
                    </div>
        
                    <div className="col-xl-6 col-lg-6 offset-xl-1">
                        <div className="inner  mt_md--40 mt_sm--40">
                            <SectionTitle
                                classes = "text-start"
                                slogan = "Why You Will Choose Guidence"
                                title = "Creating A Community Of Life Long Learners"
                            />

                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={ true }
                            >
                                <p className="line-before mb--5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                            </ScrollAnimation>
                            <div className="feature-style-2">
                                { features.map( ( item, i ) => (
                                    <ScrollAnimation 
                                        animateIn="fadeInUp"
                                        animateOut="fadeInOut"
                                        animateOnce={ true }
                                        className="single-feature" 
                                        key={ i }
                                    >
                                        <div className="icon">
                                            <i className={ item.icon }></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="feature-title">{ item.title }</h6>
                                        </div>
                                    </ScrollAnimation>
                                ) ) }
                            </div>
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="read-more-btn mt--60"
                                animateOnce={ true }
                            >
                                <Link className="edu-btn" to="/course-1">Explore Courses<i className="icon-arrow-right-line-right"></i></Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutThree;