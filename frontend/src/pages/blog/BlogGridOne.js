import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import PostOne from '../../components/post/PostOne';
import PostData from '../../data/blog/PostData.json';

const BlogGridOne = () => {
    return (
        <>
            <SEO title="Blog Grid 1" />
            <Layout>
                <BreadcrumbOne 
                    title="Blog Grid 1"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Grid 1"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="row g-5">
                                    { 
                                        PostData.slice( 0, 12 ).map((item) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={ item.id }>
                                                <PostOne data={item} />
                                            </div>
                                        ) )
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt--60">
                                        <PaginationOne />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogGridOne;