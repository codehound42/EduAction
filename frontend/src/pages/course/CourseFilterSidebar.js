import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import Filters from '../../components/course/Filters';
import CourseItemsForFilter from '../../components/course/CourseItemsForFilter';
import { CoursesProvider } from '../../context/courses_context';
import { FilterProvider } from '../../context/filter_context';

const CourseFilterSidebar = () => {
    return (
        <>
            <SEO title="Courses Filter Sidebar" />
            <Layout>
                <BreadcrumbOne 
                    title="Courses Filter Sidebar"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Courses Filter Sidebar"
                />
                <CoursesProvider>
                    <FilterProvider>
                        <div className="edu-course-area edu-section-gap bg-color-white">
                            <div className="container">
                                <div className="row g-5">
                                    <div className="col-lg-8">
                                        <CourseItemsForFilter />
                                    </div>
                                    <div className="col-lg-4">
                                        <Filters />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FilterProvider>
                </CoursesProvider>
            </Layout>
        </>
    )
}

export default CourseFilterSidebar;