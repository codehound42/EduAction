import React from 'react';
import Slider from 'react-slick';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import EventTwo from '../../components/event/EventTwo';
import EventData from '../../data/event/EventData.json';
import { ThreeColumnCarousel } from '../../utils/script';

const EventCarousel = () => {
    return (
        <>
            <SEO title="Event Carousel" />
            <Layout>
                <BreadcrumbOne 
                    title="Event Carousel"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Event Carousel"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">UPCOMMING EVENT</span>
                                    <h3 className="title">Let’s Join Our Community</h3>
                                </div>
                                
                                <Slider 
                                    className="eduvibe-event-one-carousel-wrapper mt--40 mb--50 edu-slick-button"
                                    { ...ThreeColumnCarousel }
                                >
                                    { 
                                        EventData.slice( 0, 6 ).map((item) => (
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={item.id}>
                                                <EventTwo  data={item} classes="eduvibe-event-one-carousel-item" shade="enable" />
                                            </div>
                                        ) )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default EventCarousel;