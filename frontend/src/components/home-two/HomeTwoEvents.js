import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import EventOne from '../event/EventOne';
import EventData from '../../data/event/EventData.json';

const HomeTwoEvents = () => {
    const EventItems = EventData.slice(0, 3);
    return (
        <div className="edu-event-area eduvibe-home-two-event edu-section-gap bg-image video-gallery-overlay-area">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Let’s Learn Together"
                            title = "Upcoming Educational Events"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--25">
                    { 
                        EventItems.map( ( item ) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-12"
                                key={ item.id }
                            >
                                <EventOne data={ item } bgWhite="enable" />
                            </ScrollAnimation>
                        ) )
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-03-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-02-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-05-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-13-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-1">
                        <span className="shape-dot"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTwoEvents;