import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import PostTwo from '../../components/post/PostTwo';
import PostData from '../../data/blog/PostData.json';

const BlogGridTwo = () => {
    return (
        <>
            <SEO title="Blog Grid 2" />
            <Layout>
                <BreadcrumbOne 
                    title="Blog Grid 2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Grid 2"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="row g-5">
                                    { 
                                        PostData.slice( 0, 6 ).map((item) => (
                                            <div className="col-lg-6 col-sm-6 col-12" key={ item.id }>
                                                <PostTwo data={item} />
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

export default BlogGridTwo;