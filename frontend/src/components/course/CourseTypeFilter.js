import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import CourseTypeOne from './CourseTypeOne';
import CourseData from '../../data/course/CourseData.json';

const CourseTypeFilter = ( { itemToShow, showLoadMore, incrementPerClick } ) => {
    const FilterControls = [...new Set( CourseData.map( item => item.filterParam ) ) ];
    FilterControls.unshift( 'All' );
    const numberOfCourses = itemToShow || 6;
    const dataIncrement = incrementPerClick || 3;
    const [noMorePost, setNoMorePost] = useState( false );
    const [dataVisibleCount, setDataVisibleCount] = useState( numberOfCourses );
    const [activeFilter, setActiveFilter] = useState( '' );
    const [visibleItems, setVisibleItems] = useState( [] );
    useEffect( () => {
        setActiveFilter( FilterControls[0].toLowerCase() );
        setVisibleItems( CourseData.filter( ( item ) => item.id <= dataVisibleCount ) );
    }, [] );

    const handleChange = ( e ) => {
        e.preventDefault();
        setActiveFilter( e.target.textContent.toLowerCase() );
        let tempData;
        if ( e.target.textContent.toLowerCase() === FilterControls[0].toLowerCase() ) {
            tempData = CourseData.filter( ( data ) => data.id <= dataVisibleCount );
        } else {
            tempData = CourseData.filter( ( data ) => data.filterParam.toLowerCase() === e.target.textContent.toLowerCase() &&
            data.id <= dataVisibleCount );
        }
        setVisibleItems( tempData );
    }

    const handleLoadMoreBtn = (e) => {
        e.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;
        if ( dataVisibleCount >= CourseData.length ) {
            setNoMorePost( true );
        } else {
            setDataVisibleCount( tempCount );
            setVisibleItems( CourseData.filter( ( data ) => data.id <= tempCount ) );
        }
    }

    return (
        <>
            <div className="row g-5 align-items-center mb--45 mb--30 mt_md--30 mt_sm--30">
                <div className="col-lg-6">
                    <div className="section-title text-start">
                        <span className="pre-title">Who We Are</span>
                        <h3 className="title">We Offer The Best Carrier</h3>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end">
                        {FilterControls.map( ( filter, i ) => (
                            <button
                                onClick={handleChange}
                                key={i}
                                className={
                                    filter.toLowerCase() === activeFilter
                                    ? "is-checked"
                                    : " "
                                }
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row g-5">
                {
                    visibleItems.map((item) => (
                        <div className="col-12 col-sm-12 col-xl-4 col-md-6" key={ item.id }>
                            <CourseTypeOne data={item} />
                        </div>
                    ) )
                }
            </div>

            { showLoadMore === 'enable' &&
                <div className="row text-center mt--60">
                    <div className="col-lg-12">
                        <button
                            className="edu-btn"
                            onClick={ handleLoadMoreBtn }
                            disabled={ noMorePost ? 'disabled' : null }
                        >
                            { 
                                noMorePost ? (
                                    'All Courses Displayed'
                                ) : (
                                    <span>
                                        Load More 
                                        <span className="eduvibe-spin-icon">
                                            <FaSpinner />
                                        </span>
                                    </span>
                                )
                            }
                        </button>
                    </div>
                </div>
            }
        </>
    )
}

export default CourseTypeFilter;