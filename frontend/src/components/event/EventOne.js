import React from 'react';
import { Link } from 'react-router-dom';

const EventOne = ({ data, bgWhite }) => {
    return (
        <div className={`edu-event event-list radius-small ${bgWhite === 'enable' ? 'bg-white' : '' }`}>
            <div className="inner">
                <div className="thumbnail">
                    <Link to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>
                        <img src={`${process.env.PUBLIC_URL}/images/event/event-01/${data.image}`} alt="Event Thumb" />
                    </Link>
                </div>
                <div className="content">
                    <div className="content-left">
                        <h5 className="title">
                            <Link to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>{data.title}</Link>
                        </h5>
                        <ul className="event-meta">
                            <li><i className="icon-calendar-2-line"></i>{data.startDate}</li>
                            <li><i className="icon-time-line"></i>{data.startTime}</li>
                            <li><i className="icon-map-pin-line"></i>{data.location}</li>
                        </ul>
                    </div>
                    <div className="read-more-btn">
                        <Link className="edu-btn btn-dark" to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>Book A Seat<i className="icon-arrow-right-line-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventOne;