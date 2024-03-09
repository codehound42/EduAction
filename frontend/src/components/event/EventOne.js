import React from 'react';
import { Link } from 'react-router-dom';

const EventOne = ({ data, bgWhite }) => {
    return (
        <div className={`edu-event event-list radius-small ${bgWhite === 'enable' ? 'bg-white' : '' }`}>
            <div className="inner">

                <div className="content">
                    <div className="content-left">
                        <h5 className="title">
                            <Link to={process.env.PUBLIC_URL + `/event-details/${data.id}`}>{data.title}</Link>
                        </h5>
                        <ul className="event-meta">

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