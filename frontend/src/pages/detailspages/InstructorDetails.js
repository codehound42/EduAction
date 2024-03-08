import React from 'react';
import TrackVisibility from 'react-on-screen';
import CountUp from 'react-countup';
import Slider from 'react-slick';
import { useParams, Link } from 'react-router-dom';
import { slugify } from '../../utils';
import { InstructorCourseSliderParams } from '../../utils/script';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Skill from '../../components/progressbar/ProgressbarItem';
import CourseTypeTwo from '../../components/course/CourseTypeTwo';
import InstructorData from '../../data/instructor/InstructorData.json';
import CourseData from '../../data/course/CourseData.json';

const InstructorDetails = () => {
    const { slug } = useParams();

    const data = InstructorData.filter(instructor => slugify( instructor.name ) === slugify( slug ) );
    const teamMember = data[0];

    const courses = CourseData.map(course => {
        return {
            ...course,
            instructor: slugify(course.instructor) === slug ? course.instructor : ''
        }
    }).filter(course => course.instructor.length > 0);

    return (
        <>
            <SEO title={ teamMember.name } />
            <Layout>
                <BreadcrumbOne 
                    title="Instructor Profile"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Instructor Profile"
                />
                <div className="edu-instructor-profile-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-4 pr--55">
                                <div className="instructor-profile-left">
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <img src={`${process.env.PUBLIC_URL}../images/instructor/instructor-01/${teamMember.image}`} alt="Team Member" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title">{teamMember.name}</h5>
                                            <span className="subtitle">{teamMember.designation}</span>
                                            <div className="contact-with-info">
                                                <p><span>Email:</span> <a href={`mailto:${teamMember.mail}`}>{teamMember.mail}</a></p>
                                                <p><span>Phone:</span> <a href={`tel:${teamMember.phone}`}>{teamMember.phone}</a></p>
                                            </div>
                                            <ul className="social-share bg-transparent justify-content-center medium-size">
                                                <li><a href={teamMember.facebookUrl}><i className="icon-Fb"></i></a></li>
                                                <li><a href={teamMember.linkedInUrl}><i className="icon-linkedin"></i></a></li>
                                                <li><a href={teamMember.pinterest}><i className="icon-Pinterest"></i></a></li>
                                                <li><a href={teamMember.twitterUrl}><i className="icon-Twitter"></i></a></li>
                                            </ul>
                                            <div className="contact-btn">
                                                <Link to="/contact-me" className="edu-btn">Contact Me
                                                    <i className="icon-arrow-right-line-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <div className="instructor-profile-right">
                                    <div className="inner">
                                        <div className="section-title text-start">
                                            <span className="pre-title">About Me</span>
                                            <h3 className="title">Hello, I’m { teamMember.name }</h3>
                                            <p className="description mt--40">{ teamMember.details }</p>
                                        </div>

                                        { teamMember.experience && teamMember.experience.length > 0 && 
                                            <div className="edu-skill-style mt--65">
                                                <div className="section-title text-start mb--30">
                                                    <span className="pre-title">Skillset</span>
                                                    <h3 className="title">Courses Progress</h3>
                                                </div>
                                                <div className="rbt-progress-style-1 row g-5">
                                                    { teamMember.experience.map((progress, i) => (
                                                        <div className="col-lg-6" key={i}>
                                                            <TrackVisibility
                                                                once
                                                                className="single-progress"
                                                            >
                                                                <Skill progress={progress} /> 
                                                            </TrackVisibility>
                                                        </div>
                                                    ) ) }
                                                </div>
                                            </div>
                                        }

                                        { teamMember.features && teamMember.features.length > 0 && 
                                            <div className="course-statistic-wrapper bg-color-primary ptb--50 mt--65 radius-small">
                                                <div className="row align-items-center g-5">
                                                    { teamMember.features.map((item, i) => (
                                                        <div className="col-lg-4 colmd-6 col-12 line-separator" key={i}>
                                                            <div className="course-statistic text-center">
                                                                <div className="inner">
                                                                    <TrackVisibility once>
                                                                        { ( { isVisible } ) => isVisible && item.isDecimal !== true ? <span className="total"><CountUp end={item.number} duration={1} delay={.1} start={0} /></span> : ''
                                                                            
                                                                        }
                                                                    </TrackVisibility>
                                                                    <TrackVisibility once>
                                                                        { ( { isVisible } ) => isVisible && item.isDecimal === true ? <span className="total"><CountUp end={item.number} duration={ 1 } delay={.1} start={ 0 } decimals={ 1 } /></span> : ''
                                                                            
                                                                        }
                                                                    </TrackVisibility>
                                                                    <p>{ item.title }</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) ) }
                                                </div>
                                            </div>
                                        }

                                        { courses && courses.length > 0 && 
                                            <div className="edu-course-wrapper pt--65">
                                                <div className="section-title text-start mb--20">
                                                    <span className="pre-title">Courses</span>
                                                    <h3 className="title">Course By : { teamMember.name }</h3>
                                                </div>
                                                <Slider 
                                                    className="instructor-profile-courses course-activation course-activation-item-2 slick-gutter-15 edu-slick-button"
                                                    { ...InstructorCourseSliderParams }
                                                >
                                                    {
                                                        courses.map( ( course ) => (
                                                            <div key={ course.id } className="eduvibe-course-two-single">
                                                                <CourseTypeTwo data={ course } />
                                                            </div>
                                                        ) )
                                                    }
                                                </Slider>
                                            </div>
                                        }
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
export default InstructorDetails;