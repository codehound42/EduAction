import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeOne from '../../components/course/CourseTypeOne';
import CourseData from '../../data/course/CourseData.json';

const CourseLoadMore = () => {
    const [getAllItems] = useState( CourseData );
    const [dataVisibleCount, setDataVisibleCount] = useState( 6 );
    const [dataIncrement] = useState( 3 );
    const [noMorePost, setNoMorePost] = useState( false );
    const [visibleItems, setVisibleItems] = useState( [] );

    useEffect( () => {
        setVisibleItems( getAllItems.filter( ( item ) => item.id <= dataVisibleCount ) );
    }, [] );

    const handleLoadMoreBtn = ( e ) => {
        e.preventDefault();
        let tempCount = dataVisibleCount + dataIncrement;
        if ( dataVisibleCount >= getAllItems.length ) {
            setNoMorePost( true );
        } else {
            setDataVisibleCount( tempCount );
            setVisibleItems( getAllItems.filter( ( data ) => data.id <= tempCount ) );
        }
    }
    
    return (
        <>
            <SEO title="Course( Load More )" />
            <Layout>
                <BreadcrumbOne 
                    title="Course( Load More )"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course( Load More )"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="row g-5">
                                    {
                                        visibleItems.map( ( item ) => (
                                            <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                                <CourseTypeOne key={item.id} data={item} />
                                            </div>
                                        ) )
                                    }
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CourseLoadMore;