import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';

const InstructorPageThree = () => {
    const [visible, setVisible] = useState( 'team3' );
    return (
        <>
            <SEO title="Instructor 3" />
            <Layout>
                <BreadcrumbOne 
                    title="Instructor 3"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Instructor-3"
                />
                <div className="edu-intructor-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">SKILLED INSTRUCTOR</span>
                                    <h3 className="title">Introduce Our Life Coaches</h3>
                                </div>
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

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team5' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team5' ) }>
                                    <div className="edu-instructor">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Douglas Lage' ) }`}>
                                                    <img src="/images/instructor/instructor-03/instructor-5.jpg" alt="team images" />
                                                </Link>
                                            </div>
                                            <div className="edu-instructor-info">
                                                <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Douglas Lage' ) }`}>Douglas Lage</Link></h5>
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
                                <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team6' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team6' ) }>
                                    <div className="edu-instructor">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Linda Bacote' ) }`}>
                                                    <img src="/images/instructor/instructor-03/instructor-6.jpg" alt="team images" />
                                                </Link>
                                            </div>
                                            <div className="edu-instructor-info">
                                                <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Linda Bacote' ) }`}>Linda Bacote</Link></h5>
                                                <span className="desc">Web Developer</span>
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
                                <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team7' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team7' ) }>
                                    <div className="edu-instructor">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'John Moss' ) }`}>
                                                    <img src="/images/instructor/instructor-03/instructor-7.jpg" alt="team images" />
                                                </Link>
                                            </div>
                                            <div className="edu-instructor-info">
                                                <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'John Moss' ) }`}>John Moss</Link></h5>
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

                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className={`edu-instructor-grid edu-instructor-3 edu-instructor-3-visible${ visible === 'team8' ? ' eduvibe-hover-active' : '' }`} onMouseOver={ () => setVisible( 'team8' ) }>
                                    <div className="edu-instructor">
                                        <div className="inner">
                                            <div className="thumbnail">
                                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Alice McCoy' ) }`}>
                                                    <img src="/images/instructor/instructor-03/instructor-8.jpg" alt="team images" />
                                                </Link>
                                            </div>
                                            <div className="edu-instructor-info">
                                                <h5 className="title"><Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( 'Alice McCoy' ) }`}>Alice McCoy</Link></h5>
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
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default InstructorPageThree;