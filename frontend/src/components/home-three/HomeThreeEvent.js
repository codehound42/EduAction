import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import EventTwo from '../../components/event/EventTwo';
import EventData from '../../data/event/EventData.json';

const HomeThreeEvent = () => {
    const EventItems = EventData.slice(0, 3);
    return (
        <div className="eduvibe-home-three-event edu-event-area bg-color-white edu-section-gap">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Upcomming Event"
                            title = "Let’s Join Our Community"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    { 
                        EventItems.map( ( item ) => (
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                <EventTwo key={item.id} data={item} shadow="enable" />
                            </div>
                        ) )
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-13-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-05-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeThreeEvent;