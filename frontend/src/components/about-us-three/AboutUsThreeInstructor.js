import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import SectionTitle from '../sectionTitle/SectionTitle';

const AboutUsThreeInstructor = () => {
    const [visible, setVisible] = useState( 'team3' );
    return (
        
        <div className="eduvibe-about-three-team edu-instructor-area edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Team Member"
                            title = "Meet Our Instructor"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team1' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team1' ) }>
                            <div className="edu-instructor">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'James Carlson' ) }`}>
                                            <img src="/images/instructor/instructor-03/instructor-1.jpg" alt="team images" />
                                        </Link>
                                    </div>
                                    <div className="edu-instructor-info">
                                        <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'James Carlson' ) }`}>James Carlson</Link></h5>
                                        <span className="desc">WordPress Expert</span>
                                        <div className="team-share-info bg-transparent">
                                            <a className="linkedin" href="#"><i className="icon-linkedin"></i></a>
                                            <a className="facebook" href="#"><i className="icon-Fb"></i></a>
                                            <a className="twitter" href="#"><i className="icon-Twitter"></i></a>
                                            <a className="youtube" href="#"><i className="icon-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team2' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team2' ) }>
                            <div className="edu-instructor">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Nancy Phipps' ) }`}>
                                            <img src="/images/instructor/instructor-03/instructor-2.jpg" alt="team images" />
                                        </Link>
                                    </div>
                                    <div className="edu-instructor-info">
                                        <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Nancy Phipps' ) }`}>Nancy Phipps</Link></h5>
                                        <span className="desc">Digital Marketer</span>
                                        <div className="team-share-info bg-transparent">
                                            <a className="linkedin" href="#"><i className="icon-linkedin"></i></a>
                                            <a className="facebook" href="#"><i className="icon-Fb"></i></a>
                                            <a className="twitter" href="#"><i className="icon-Twitter"></i></a>
                                            <a className="youtube" href="#"><i className="icon-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team3' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team3' ) }>
                            <div className="edu-instructor">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Troy Hall' ) }`}>
                                            <img src="/images/instructor/instructor-03/instructor-3.jpg" alt="team images" />
                                        </Link>
                                    </div>
                                    <div className="edu-instructor-info">
                                        <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Troy Hall' ) }`}>Troy Hall</Link></h5>
                                        <span className="desc">PHP Expert</span>
                                        <div className="team-share-info bg-transparent">
                                            <a className="linkedin" href="#"><i className="icon-linkedin"></i></a>
                                            <a className="facebook" href="#"><i className="icon-Fb"></i></a>
                                            <a className="twitter" href="#"><i className="icon-Twitter"></i></a>
                                            <a className="youtube" href="#"><i className="icon-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team4' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team4' ) }>
                            <div className="edu-instructor">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Isabelle Bruner' ) }`}>
                                            <img src="/images/instructor/instructor-03/instructor-4.jpg" alt="team images" />
                                        </Link>
                                    </div>
                                    <div className="edu-instructor-info">
                                        <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Isabelle Bruner' ) }`}>Isabelle Bruner</Link></h5>
                                        <span className="desc">UI Designer</span>
                                        <div className="team-share-info bg-transparent">
                                            <a className="linkedin" href="#"><i className="icon-linkedin"></i></a>
                                            <a className="facebook" href="#"><i className="icon-Fb"></i></a>
                                            <a className="twitter" href="#"><i className="icon-Twitter"></i></a>
                                            <a className="youtube" href="#"><i className="icon-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-25-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-15-05.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsThreeInstructor;