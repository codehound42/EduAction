import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const InstructorTwo = ({ data }) => {
    return (
        <div className="edu-instructor-grid edu-instructor-2">
            <div className="edu-instructor">
                <div className="inner">
                    <div className="thumbnail">
                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( data.name ) }`}>
                            <img src={`${process.env.PUBLIC_URL}/images/instructor/instructor-02/${data.image}`} alt="Team Member" />
                        </Link>
                    </div>
                    <div className="team-share-info">
                        <a className="linkedin" href={data.linkedInUrl}><i className="icon-linkedin"></i></a>
                        <a className="facebook" href={data.facebookUrl}><i className="icon-Fb"></i></a>
                        <a className="twitter" href={data.twitterUrl}><i className="icon-Twitter"></i></a>
                        <a className="youtube" href={data.youtubeUrl}><i className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="edu-instructor-info">
                <h5 className="title">
                    <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( data.name ) }`}>{data.name}</Link>
                </h5>
                <span className="desc">{data.designation}</span>
            </div>
        </div>
    )
}
export default InstructorTwo;