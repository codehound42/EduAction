import React from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';
import TrackVisibility from 'react-on-screen';
import SectionTitle from '../sectionTitle/SectionTitle';

const FeatureItems = [
    {
        title: 'Learners & counting',
        number: 449,
        image: 'about-image-01.png'
    },
    {
        title: 'Courses & Video',
        number: 330,
        image: 'about-image-02.png'
    },
    {
        title: 'Certified Students',
        number: 275,
        image: 'about-image-03.png'
    },
    {
        title: 'Winning Award',
        number: 378,
        image: 'about-image-04.png'
    }
];

const AboutOne = ( { wrapperClass } ) => {
    return (
        <div className={`eduvibe-home-two-counter bg-color-white ${ wrapperClass || 'edu-section-gap' }`}>
            <div className="container eduvibe-animated-shape">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-6">
                        <div className="row g-5 pr--75">
                            { FeatureItems.map( ( data , i ) => (
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="col-lg-6 col-md-6 col-sm-6 col-12"
                                    animateOnce={ true }
                                    key={ i }
                                >
                                    <div className="edu-counterup">
                                        <div className="inner">
                                            <div className="icon">
                                                <img src={`${process.env.PUBLIC_URL}./images/about/about-01/${ data.image }`} alt="Icon Thumb" />
                                            </div>
                                            <div className="content">
                                                <TrackVisibility once className="counter" tag="h3">
                                                    { ( { isVisible } ) => isVisible && 
                                                        isVisible ? <CountUp className="eduvibe-about-counterup" end={data.number} duration={1.5} delay={.1} start={0} /> : ''
                                                        
                                                    }
                                                </TrackVisibility>
                                                <span>{data.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ) ) }
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-us-2">
                            <div className="inner">
                                <SectionTitle
                                    classes = "text-left"
                                    slogan = "Why Choose Us"
                                    title = "Creating A Community Of Life Long Learners"
                                />
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={ true }
                                >
                                    <p className="description mt--40 mb--30">There are many variations of passages of the Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                </ScrollAnimation>

                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="feature-style-4"
                                    animateOnce={ true }
                                >
                                    <div className="edu-feature-list">
                                        <div className="icon">
                                        <img src={`${process.env.PUBLIC_URL}./images/about/about-01/smile.png`} alt="Icon Thumb" />
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Trusted By Thousands</h6>
                                            <p>There are many variations of passages of the Ipsum available, but the majority have suffered alteration</p>
                                        </div>
                                    </div>

                                    <div className="edu-feature-list color-var-2">
                                        <div className="icon">
                                            <i className="icon-Support"></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">Unlimited Resources With Strong Support</h6>
                                            <p>There are many variations of passages of the Ipsum available, but the majority have suffered alteration</p>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-11.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutOne;