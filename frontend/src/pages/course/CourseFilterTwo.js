import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeFilter from '../../components/course/CourseTypeFilter';

const CourseFilterTwo = () => {
    return (
        <>
            <SEO title="Course Filter 2" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Filter 2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Filter 2"
                />
                    <div className="edu-course-area course-three-wrapper edu-section-gap bg-color-white position-relative">
                        <div className="container">
                            <CourseTypeFilter showLoadMore="enable" />
                        </div>
                    </div>
            </Layout>
        </>
    )
}

export default CourseFilterTwo;