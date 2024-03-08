import React, { useState, useEffect } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import GalleryItem from '../../components/gallery/GalleryItem';
import FilterData from '../../data/gallery/FilterData.json'
import GalleryData from '../../data/gallery/GalleryData.json';

const GalleryGrid = () => {
    const [getAllItems] = useState( GalleryData );
    const [activeFilter, setActiveFilter] = useState( '' );
    const [visibleItems, setVisibleItems] = useState( [] );
    useEffect( () => {
        setActiveFilter( FilterData[0].text.toLowerCase() );
        setVisibleItems( getAllItems );
    }, [] );

    const handleChange = ( e ) => {
        e.preventDefault();
        setActiveFilter( e.target.textContent.toLowerCase() );
        let tempData;
        if ( e.target.textContent.toLowerCase() === FilterData[0].text.toLowerCase() ) {
            tempData = getAllItems;
        } else {
            tempData = getAllItems.filter( ( data ) => data.category === e.target.textContent.toLowerCase() );
        }
        setVisibleItems( tempData );
    }

    return (
        <>
            <SEO title="Gallery Grid" />
            <Layout>
                <BreadcrumbOne 
                    title="Gallery Grid"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Gallery Grid"
                />
                <div className="edu-gallery-grid-area masonary-wrapper-activation edu-section-gap bg-image overflow-hidden">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title text-start">
                                    <span className="pre-title">Gallery</span>
                                    <h3 className="title">Gallery Grid (Column 3)</h3>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end">
                                    {FilterData.map((filter) => (
                                        <button
                                            onClick={handleChange}
                                            key={filter.id}
                                            className={
                                                filter.text.toLowerCase() === activeFilter
                                                ? "is-checked"
                                                : " "
                                            }
                                        >
                                            {filter.text}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="eduvibe-gallery-items row g-5 mt--5">
                            {
                                visibleItems.map((item) => (
                                    <div key={item.id} className="col-lg-4 col-md-6 col-12">
                                        <GalleryItem data={item} />
                                    </div>
                                ) )
                            }
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default GalleryGrid;