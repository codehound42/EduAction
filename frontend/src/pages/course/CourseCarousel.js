import React from 'react';
import Slider from 'react-slick';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeOne from '../../components/course/CourseTypeOne';
import CourseData from '../../data/course/CourseData.json';
import { ThreeColumnCarousel } from '../../utils/script';

const CourseCarousel = () => {
    return (
        <>
            <SEO title="Course Carousel" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Carousel"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Carousel"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">Our Courses</span>
                                    <h3 className="title">Featured Courses</h3>
                                </div>
                                
                                <Slider 
                                    className="mt--40 mb--50 edu-slick-button slick-activation-wrapper eduvibe-course-one-carousel"
                                    { ...ThreeColumnCarousel }
                                >
                                    { 
                                        CourseData.slice( 0, 6 ).map((item) => (
                                            <div className="single-slick-card" key={ item.id }>
                                                <CourseTypeOne data={item} />
                                            </div>
                                        ) )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default CourseCarousel;