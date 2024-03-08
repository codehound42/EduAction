import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import MasonryItem from '../../components/gallery/MasonryItem';
import FilterData from '../../data/gallery/FilterData.json'
import MasonryData from '../../data/gallery/MasonryData.json';

const breakpointColumnsObj = {
    default: 3,
    991: 2,
    767: 1
};
  
const GalleryMasonry = () => {
    const [getAllItems] = useState( MasonryData );
    const [activeFilter, setActiveFilter] = useState( '' );
    const [visibleItems, setVisibleItems] = useState( [] );
    useEffect( () => {
        setActiveFilter( FilterData[0].text.toLowerCase() );
        setVisibleItems( getAllItems );
    }, [] );

    const handleChange = (e) => {
        e.preventDefault();
        setActiveFilter( e.target.textContent.toLowerCase() );
        let tempData;
        if ( e.target.textContent.toLowerCase() === FilterData[0].text.toLowerCase() ) {
            tempData = getAllItems;
        } else {
            tempData = getAllItems.filter( ( data ) => data.category === e.target.textContent.toLowerCase() );
        }
        setVisibleItems( tempData );
    };

    return (
        <>
            <SEO title="Gallery Masonry" />
            <Layout>
                <BreadcrumbOne 
                    title="Gallery Masonry"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Gallery Masonry"
                />
                <div className="edu-gallery-grid-area masonary-wrapper-activation edu-section-gap bg-image overflow-hidden">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title text-start">
                                    <span className="pre-title">Gallery</span>
                                    <h3 className="title">Gallery Masonry (Column 3)</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end">
                                    {
                                        FilterData.map( ( filter ) => (
                                            <button
                                                onClick={ handleChange }
                                                key={ filter.id }
                                                className={
                                                    filter.text.toLowerCase() === activeFilter
                                                    ? "is-checked"
                                                    : " "
                                                }
                                            >
                                                { filter.text }
                                            </button>
                                        ) )
                                    }
                                </div>
                            </div>
                        </div>
                        <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="eduvibe-masonry-grid"
                            columnClassName="eduvibe-masonry-grid_column"
                        >
                            {visibleItems.map( ( item ) => (
                                <MasonryItem key={ item.id } data={ item } imgSrc="masonry" />
                            ))}
                        </Masonry>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default GalleryMasonry;