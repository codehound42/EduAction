import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { slugify } from '../../utils';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseInfo from '../../components/course/CourseInfo';
import CourseData from '../../data/course/CourseData.json';
import InstructorData from '../../data/instructor/InstructorData.json';
import CurriculumTabContent from '../../data/course/CurriculumTabContent.json';

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const CurriculumContent = () => {
    const [activeId, setActiveId] = useState( '0' );

    function toggleActive( id ) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <Accordion bsPrefix="edu-accordion-02" defaultActiveKey={activeId} flush>
            {
                CurriculumTabContent.map( ( accordion, i ) => (
                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                        <div className="edu-accordion-header">
                            <CustomToggle eventKey={i.toString()}>{ accordion.title }</CustomToggle>
                        </div>
                        <Accordion.Body bsPrefix="edu-accordion-body">
                            <ul>
                                { 
                                    accordion.content.map( ( title, index ) => (
                                        <li key={index}>
                                            <div className="text"><i className="icon-draft-line"></i>{title}</div>
                                            <div className="icon"><i className="icon-lock-password-line"></i></div>
                                        </li>
                                    ) )
                                
                                }
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ) )
            }
        </Accordion>
    )
}

const CourseDetailsTwo = () => {
    const { id } = useParams();
    const courseId = parseInt( id, 10 );
    const data = CourseData.filter( course => course.id === courseId );
    const courseItem = data[0];

    const indexOfInstructor = InstructorData.findIndex( function( instructor ) {
        return slugify( instructor.name ) === slugify( courseItem.instructor );
    } );
    const instructor = InstructorData[indexOfInstructor];
    const instructorExcerpt = instructor.details.substring(0, 157) + "...";

    return (
        <>
            <SEO title={ courseItem.title } />
            <Layout>
                <BreadcrumbOne 
                    title="Course Details"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Details"
                />
                <div className="edu-course-details-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="main-image thumbnail">
                                    <img className="radius-small" src={`${process.env.PUBLIC_URL}/images/course/course-details/${courseItem.image}`} alt="Course Thumb" />
                                </div>
                            </div>
                        </div>

                        <div className="row g-5">
                            <div className="col-xl-8 col-lg-7">
                                <div className="course-details-content">

                                    <div className="content-top">
                                        <div className="author-meta">
                                            <div className="author-thumb">
                                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( courseItem.instructor ) }`}>
                                                    <img src={`${process.env.PUBLIC_URL}/images/instructor/instructor-small/${instructor.image}`} alt="Author Thumb" />
                                                    <span className="author-title">By { courseItem.instructor }</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="edu-rating rating-default eduvibe-course-rating-stars">
                                            <div className="rating eduvibe-course-rating-stars">
                                                <i className="icon-Star"></i>
                                                <i className="icon-Star"></i>
                                                <i className="icon-Star"></i>
                                                <i className="icon-Star"></i>
                                                <i className="icon-Star"></i>
                                            </div>
                                            <span className="rating-count">({courseItem.review} Review)</span>
                                        </div>
                                    </div>

                                    <h3 className="title">{ courseItem.title }</h3>

                                    <div className="course-details-card">
                                        <div className="course-details-two-content">
                                            <div dangerouslySetInnerHTML={{__html: courseItem.details}} />
                                        </div>
                                    </div>

                                    <div className="course-details-card mt--40">
                                        <div className="course-details-two-content">
                                            <CurriculumContent />
                                        </div>
                                    </div>

                                    <div className="course-details-card mt--40">
                                        <div className="course-author-wrapper">
                                            <div className="thumbnail">
                                                <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( courseItem.instructor ) }`}>
                                                    <img src={`${process.env.PUBLIC_URL}/images/instructor/course-details/${instructor.image}`} alt="Author Thumb" />
                                                </Link>
                                            </div>
                                            <div className="course-details-two-content author-content">
                                                <h6 className="title">
                                                    <Link to={process.env.PUBLIC_URL + `/instructor-details/${slugify( courseItem.instructor ) }`}>{instructor.name}</Link>
                                                </h6>
                                                <span className="subtitle">{instructor.designation}</span>
                                                <p>{ instructorExcerpt }</p>
                                                <ul className="social-share border-style">
                                                    <li><a href={instructor.facebookUrl}><i className="icon-Fb"></i></a></li>
                                                    <li><a href={instructor.linkedInUrl}><i className="icon-linkedin"></i></a></li>
                                                    <li><a href={instructor.pinterest}><i className="icon-Pinterest"></i></a></li>
                                                    <li><a href={instructor.twitterUrl}><i className="icon-Twitter"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="course-details-card mt--40">
                                        <div className="course-details-two-content">
                                            <div className="row row--30">
                                                <div className="col-xl-4 col-lg-5">
                                                    <div className="rating-box">
                                                        <div className="rating-number">{courseItem.rating}</div>
                                                        <div className="rating eduvibe-course-rating-stars">
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                            <i className="icon-Star"></i>
                                                        </div>
                                                        <span>({courseItem.review} Review)</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 col-lg-7">
                                                    <div className="review-wrapper">

                                                        <div className="single-progress-bar">
                                                            <div className="rating-text">
                                                                5 <i className="icon-Star"></i>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={ {width: '100%'} } aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="rating-value">1</span>
                                                        </div>

                                                        <div className="single-progress-bar">
                                                            <div className="rating-text">
                                                                4 <i className="icon-Star"></i>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={ {width: '0%'} } aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="rating-value">0</span>
                                                        </div>

                                                        <div className="single-progress-bar">
                                                            <div className="rating-text">
                                                                3 <i className="icon-Star"></i>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={ {width: '0%'} } aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="rating-value">0</span>
                                                        </div>

                                                        <div className="single-progress-bar">
                                                            <div className="rating-text">
                                                                2 <i className="icon-Star"></i>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={ {width: '0%'} } aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="rating-value">0</span>
                                                        </div>

                                                        <div className="single-progress-bar">
                                                            <div className="rating-text">
                                                                1 <i className="icon-Star"></i>
                                                            </div>
                                                            <div className="progress">
                                                                <div className="progress-bar" role="progressbar" style={ {width: '0%'} } aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <span className="rating-value">0</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-wrapper pt--40">
                                                <div className="section-title">
                                                    <h5 className="mb--25">Reviews</h5>
                                                </div>
                                                <div className="edu-comment">
                                                    <div className="thumbnail">
                                                        <img src="/images/course/student-review/student-1.png" alt="Student Thumb" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <div className="comment-top">
                                                            <h6 className="title">Elen Saspita</h6>
                                                            <div className="rating eduvibe-course-rating-stars">
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-Star"></i>
                                                                <i className="icon-Star"></i>
                                                            </div>
                                                        </div>
                                                        <span className="subtitle">“ Outstanding Course ”</span>
                                                        <p>As Thomas pointed out, Chegg’s survey appears more like a scorecard that details obstacles and challenges that the current university undergraduate student population is going through in their universities and countries.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <CourseInfo data={courseItem}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default CourseDetailsTwo;