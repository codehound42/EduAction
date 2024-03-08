import React from 'react';
import { Link } from 'react-router-dom';

const EventTwo = ({ data, shade, shadow, classes }) => {
    return (
        <div className={`edu-event event-grid-1 radius-small ${ classes ? classes : ''} ${ shade === 'enable' ? 'bg-shade' : '' } ${ shadow === 'enable' ? 'eduvibe-event-two-shadow' : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>
                        <img src={`${process.env.PUBLIC_URL}/images/event/event-02/${data.image}`} alt="Event Thumb" />
                    </Link>
                    <div className="top-position status-group left-top">
                        <span className="eduvibe-status status-06">{data.startDate}</span>
                    </div>
                </div>
                <div className="content">
                    <ul className="event-meta">
                        <li><i className="icon-map-pin-line"></i>{data.location}</li>
                    </ul>
                    
                    <h5 className="title">
                        <Link to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>{data.title}</Link>
                    </h5>
                    <div className="read-more-btn">
                        <Link className="btn-transparent" to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>Get Ticket<i className="icon-arrow-right-line-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventTwo;