import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import CounterUpOne from '../counterup/CounterUpOne';
import SectionTitle from '../sectionTitle/SectionTitle';
import CourseTypeThree from '../../components/course/CourseTypeThree';
import CourseData from '../../data/course/CourseData.json';

const HomeThreeCourse = () => {
    return (
        <div className="edu-counterup-and-course-area">

            <CounterUpOne />
            
            <div className="edu-course-area eduvibe-home-three-course counterup-overlay-top bg-image edu-section-gapTop edu-section-gapBottom">
                <div className="container eduvibe-animated-shape">
                    <div className="row">
                        <div className="col-lg-12">
                            <SectionTitle
                                classes = "text-center"
                                slogan = "Popular Courses"
                                title = "Our Popular Courses"
                            />
                        </div>
                    </div>
                    <div className="row g-5 mt--25">
                        { 
                            CourseData.slice( 0, 6 ).map((item) => (
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    className="col-12 col-sm-12 col-xl-4 col-md-6"
                                    animateOnce={true}
                                    key={ item.id }
                                >
                                    <CourseTypeThree data={item} bgWhite="enable" />
                                </ScrollAnimation>
                            ) )
                        }
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="load-more-btn mt--60 text-center">
                                <Link className="edu-btn" to="/course-1">View All Courses<i className="icon-arrow-right-line-right"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="/images/shapes/shape-07.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src="/images/shapes/shape-04.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="/images/shapes/shape-28.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-4">
                            <img src="/images/shapes/shape-03-09.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-5">
                            <img src="/images/shapes/shape-15-03.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeThreeCourse;