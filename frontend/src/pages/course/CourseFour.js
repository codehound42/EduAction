import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeFour from '../../components/course/CourseTypeFour';
import CourseData from '../../data/course/CourseData.json';

const CourseFour = () => {
    const CourseItems = CourseData.slice(0, 8);
    return (
        <>
            <SEO title="Course Style - 4" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Style - 4"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 4"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-6" key={ item.id }>
                                        <CourseTypeFour data={item} />
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

export default CourseFour;