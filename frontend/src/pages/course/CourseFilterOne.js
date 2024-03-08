import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeFilter from '../../components/course/CourseTypeFilter';

const CourseFilterOne = () => {
    return (
        <>
            <SEO title="Course Filter 1" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Filter 1"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Filter 1"
                />
                    <div className="edu-course-area course-three-wrapper edu-section-gap bg-color-white position-relative">
                        <div className="container">
                            <CourseTypeFilter itemToShow="9" />
                        </div>
                    </div>
            </Layout>
        </>
    )
}

export default CourseFilterOne;