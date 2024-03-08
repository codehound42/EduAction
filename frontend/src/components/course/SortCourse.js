import React from 'react'
import { useFilterContext } from '../../context/filter_context';

const SortCourse = ( { showPerPage } ) => {
    const {
        filtered_courses: courses,
        searchbycourse,
        updateSearch
    } = useFilterContext();
    let visibleItems = showPerPage;
    const totalCourses = courses.length;
    if ( totalCourses <= visibleItems ) {
        visibleItems = totalCourses;
    }

    const sortTitle = 'Showing <span>' + visibleItems + '</span> of <span>' + totalCourses +'</span> Courses';
    
    return (
        <div className="row g-5 align-items-center">
            <div className="col-lg-4 col-md-6 col-12">
                <div className="short-by">
                    <p dangerouslySetInnerHTML={{__html: sortTitle}}></p>
                </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
                <div className="edu-search-box-wrapper text-start text-md-end">
                    <div className="edu-search-box">
                        <form action="#">
                            <input
                                type='text'
                                name='searchbycourse'
                                id='searchbycourse'
                                placeholder='Search Course...'
                                className="search-input"
                                value={ searchbycourse }
                                onChange={ updateSearch }
                            />
                            <button className="search-button">
                                <i className="icon-search-line"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SortCourse;