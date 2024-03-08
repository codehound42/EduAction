import React, { useState, useEffect } from 'react';
import { useFilterContext } from '../../context/filter_context';
import SortCourse from '../../components/course/SortCourse';
import CourseTypeThree from './CourseTypeThree';

const CourseItemsForFilter = () => {
    const { filtered_courses: courses, searchbycourse, filters } = useFilterContext();
    const [page, setPage] = useState( 0 );
    const coursesPerPage = 10;

    const paginate = ( items ) => {
        const perPage = coursesPerPage;
        const numberOfPages = Math.ceil( items.length / perPage );
      
        const newCourses = Array.from( { length: numberOfPages }, ( _, index ) => {
            const start = index * perPage;
            return items.slice( start, start + perPage )
        } )
      
        return newCourses;
    }

    const data = paginate( courses );

    const nextPage = () => {
        setPage( ( oldPage ) => {
            let nextPage = oldPage + 1;
            if ( nextPage > data.length - 1 ) {
                nextPage = 0;
            }
            return nextPage;
        } )
    }
      
    const prevPage = () => {
        setPage( ( oldPage ) => {
            let prevPage = oldPage - 1;
            if ( prevPage < 0 ) {
                prevPage = data.length - 1;
            }
            return prevPage;
        } )
    }
    
    const handlePage = ( index ) => {
        setPage( index );
    }

    useEffect( () => {
        setPage( 0 );
    }, [searchbycourse, filters] );

    return (
        <>
            <SortCourse showPerPage={ coursesPerPage } />
            
            <div className="row g-5 mt--10">
                { data[page] !== undefined &&
                    data[page].map( ( course ) => {
                    return (
                        <div key={ course.id } className="col-lg-6 col-md-6">
                            <CourseTypeThree data={ course } />
                        </div>
                    )
                } ) }
            </div>

            { data.length > 1 && 
                <div className="row">
                    <div className="col-lg-12 mt--60">
                        <div className="nav">
                            <ul className="edu-pagination">
                                <li className="prev-btn">
                                    <button onClick={ prevPage }>
                                        <i className="ri-arrow-drop-left-line"></i>
                                    </button>
                                </li>
                                { data.map( ( _, index ) => {
                                    return (
                                        <li 
                                            key={ index }
                                            className={ `page-item ${ index === page ? ' active' : '' }` }
                                        >
                                            <button onClick={ () => handlePage( index ) }>
                                                { index + 1}
                                            </button>
                                        </li>
                                        
                                    )
                                } ) }
                                <li className="next-btn">
                                    <button onClick={ nextPage }>
                                        <i className="ri-arrow-drop-right-line"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CourseItemsForFilter;