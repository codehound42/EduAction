import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import CourseTypeThree from '../../components/course/CourseTypeThree';
import CourseData from '../../data/course/CourseData.json';

const CourseThree = () => {
    const CourseItems = CourseData.slice(0, 9);
    return (
        <>
            <SEO title="Course Style - 3" />
            <Layout>
                <BreadcrumbOne 
                    title="Course Style - 3"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Course Style - 3"
                />
                <div className="edu-course-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5 mt--10">
                            { 
                                CourseItems.map((item) => (
                                    <div className="col-12 col-sm-6 col-lg-4" key={ item.id }>
                                        <CourseTypeThree data={item} />
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

export default CourseThree;