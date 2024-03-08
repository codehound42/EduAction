import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';

const InstructorThree = ({ data, classes }) => {
    return (
        <ScrollAnimation 
            animateIn="fadeInUp"
            animateOut="fadeInOut"
            animateOnce={true}
            className={ classes || 'col-lg-3 col-md-6 col-sm-6 col-12' }
        >
            <div className="edu-instructor-grid edu-instructor-3 edu-instructor-3-visible edu-instructor-hover-visible">
                <div className="edu-instructor">
                    <div className="inner">
                        <div className="thumbnail">
                            <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( data.name ) }`}>
                                <img src={`${process.env.PUBLIC_URL}/images/instructor/instructor-03/${data.image}`} alt="Team Member" />
                            </Link>
                        </div>
                        <div className="edu-instructor-info">
                            <h5 className="title">
                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( data.name ) }`}>{data.name}</Link>
                            </h5>
                            <span className="desc">{data.designation}</span>
                            <div className="team-share-info bg-transparent">
                                <a className="linkedin" href={data.linkedInUrl}><i className="icon-linkedin"></i></a>
                                <a className="facebook" href={data.facebookUrl}><i className="icon-Fb"></i></a>
                                <a className="twitter" href={data.twitterUrl}><i className="icon-Twitter"></i></a>
                                <a className="youtube" href={data.youtubeUrl}><i className="icon-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default InstructorThree;