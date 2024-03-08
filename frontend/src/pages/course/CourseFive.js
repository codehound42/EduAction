import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeFive from '../../components/course/CourseTypeFive'
import CourseData from '../../data/course/CourseData.json';

const CourseFive = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (
        <>
            <SEO title="Course Style - 5" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Style - 5"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 5"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <CourseTypeFive data={item} />
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

export default CourseFive;