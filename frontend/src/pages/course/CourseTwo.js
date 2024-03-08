import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeTwo from '../../components/course/CourseTypeTwo';
import CourseData from '../../data/course/CourseData.json';

const CoruseTwo = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (
        <>
            <SEO title="Course Style - 2" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Style - 2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 2"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <CourseTypeTwo data={item} />
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

export default CoruseTwo;