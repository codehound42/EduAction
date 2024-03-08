import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import EventData from '../../data/event/EventData.json';

const EventDetails = () => {
    const { id } = useParams();
    const eventId = parseInt(id, 10);
    const data = EventData.filter(event => event.id === eventId);
    const eventItem = data[0];
    return (
        <>
            <SEO title={ eventItem.title } />
            <Layout>
                <BreadcrumbOne 
                    title="Event Details"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Event Details"
                />
                <div className="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="thumbnail">
                                    <img src={`${process.env.PUBLIC_URL}/images/event/event-details/${eventItem.image}`} alt="Event Thumb" />
                                </div>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className="col-lg-7">
                                <div className="content">
                                    <h3 className="title">{ eventItem.title }</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
                                    <ul className="column-gallery gallery-column-2">
                                        <li><img src="/images/event/event-details/event-gallery-01.jpg" alt="Gallery Images" /></li>
                                        <li><img src="/images/event/event-details/event-gallery-02.jpg" alt="Gallery Images" /></li>
                                    </ul>
                                    <h4>Four major elements that we offer:</h4>
                                    <ul className="list-style-1 mb--20">
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> Struggling to sell one multi-million dollar home currently on the market</li>
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> The point of using Lorem Ipsum is that it has a normal distribution of letters.</li>
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their default model text.</li>
                                        <li><i className="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their default model text.</li>
                                    </ul>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="eduvibe-sidebar">
                                    <div className="eduvibe-widget eduvibe-widget-details">
                                        <h5 className="title">Event Detail</h5>
                                        <div className="widget-content">
                                            <ul>
                                                { eventItem.startDate && <li><span><i className="icon-calendar-2-line"></i> Start Date</span><span>{ eventItem.startDate }</span></li> }
                                                { eventItem.startTime && <li><span><i className="icon-time-line"></i> Start Time</span><span>{ eventItem.startTime }</span></li> }
                                                { eventItem.endDate && <li><span><i className="icon-calendar-2-line"></i> End Date</span><span>{ eventItem.endDate }</span></li> }
                                                { eventItem.endTime && <li><span><i className="icon-time-line"></i> End Time</span><span>{ eventItem.endTime }</span></li> }
                                                { eventItem.going && <li><span><i className="icon-user-line"></i> Ongoing</span><span>{ eventItem.going }</span></li> }
                                                { eventItem.shortLocation && <li><span><i className="icon-map-pin-line"></i> Location</span><span>{ eventItem.shortLocation }</span></li> }
                                            </ul>

                                            <div className="read-more-btn mt--45">
                                                <Link className="edu-btn btn-bg-alt w-100 text-center" to="#">Price: $79.00</Link>
                                            </div>

                                            <div className="read-more-btn mt--15">
                                                <Link className="edu-btn w-100 text-center" to="#">Book Your Seat Now</Link>
                                            </div>

                                            <div className="read-more-btn mt--30 text-center">
                                                <div className="eduvibe-post-share">
                                                    <span>Share: </span>
                                                    <a className="linkedin" href="#"><i className="icon-linkedin"></i></a>
                                                    <a className="facebook" href="#"><i className="icon-Fb"></i></a>
                                                    <a className="twitter" href="#"><i className="icon-Twitter"></i></a>
                                                    <a className="youtube" href="#"><i className="icon-youtube"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="event-widget event-widget-details mt--40">
                                        <h5 className="title">Map</h5>
                                        <div className="widget-content">
                                            <div className="google-map">
                                                <div className="eduvibe-google-map">
                                                    <iframe className="radius-small w-100" title="Google Map" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" height="290" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default EventDetails;