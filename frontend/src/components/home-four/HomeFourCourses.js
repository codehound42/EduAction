import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';
import CourseTypeFour from '../../components/course/CourseTypeFour';
import CourseData from '../../data/course/CourseData.json';

const HomeFourCourses = ( props ) => {
    return (
        <div className={`eduvibe-home-four-courses edu-course-area edu-section-gap bg-image ${props.classes ? props.classes : '' }`}>
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Featured Courses"
                            title = "Explore Our Popular Courses"
                        />
                    </div>
                </div>

                <div className="row g-5 mt--10">
                    { 
                        CourseData.slice( 0, 4 ).map((item) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                className="col-12 col-sm-6 col-lg-6"
                                animateOnce={true}
                                key={ item.id }
                            >
                                <CourseTypeFour data={item} bgWhite="enable" />
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
                        <img src="/images/shapes/shape-28.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-15-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-03-09.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-04-06.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFourCourses;