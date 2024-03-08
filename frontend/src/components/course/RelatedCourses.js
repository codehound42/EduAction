import React from 'react';
import Slider from 'react-slick';
import CourseData from '../../data/course/CourseData.json';
import { ThreeColumnCarousel2 } from '../../utils/script';
import CourseTypeOne from '../../components/course/CourseTypeOne';

const RelatedCourses = ( { courseID } ) => {
    const coursIndex = courseID - 1;
    const catts = CourseData[coursIndex].categories;

    const similarCourseIndexes = CourseData.reduce(
        ( arr, e, i ) => ( 
            ( e.categories.some( r=> catts.includes( r ) ) ) && 
            arr.push( i + 1), arr 
        ), 
        []
    );

    const removeCurrentCourseIndex = similarCourseIndexes.indexOf( courseID );
    if ( removeCurrentCourseIndex > -1 ) {
        similarCourseIndexes.splice( removeCurrentCourseIndex, 1 );
    }

    const commonCourses = CourseData.filter( element => similarCourseIndexes.includes(element.id) );

    return (
        // based on common categories.
        <>
            { commonCourses && commonCourses.length > 0 && 
                <div className="edu-course-wrapper pt--65">
                    <div className="section-title text-start mb--20">
                        <span className="pre-title">Related Courses</span>
                        <h3 className="title">Courses You May Like</h3>
                    </div>
                    <Slider 
                        className="mt--40 edu-slick-button slick-activation-wrapper eduvibe-course-one-carousel"
                        { ...ThreeColumnCarousel2 }
                    >
                        {
                            commonCourses.map( ( course ) => (
                                <div className="single-slick-card" key={ course.id }>
                                    <CourseTypeOne data={course} />
                                </div>
                            ) )
                        }
                    </Slider>
                </div>
            }
        </>
    )
}

export default RelatedCourses;