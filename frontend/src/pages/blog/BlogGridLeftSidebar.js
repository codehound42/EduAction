import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import SearchOne from '../../components/widgets/blog/SearchOne';
import CategoryOne from '../../components/widgets/blog/CategoryOne';
import LatestPostOne from '../../components/widgets/blog/LatestPostOne';
import TagOne from '../../components/widgets/blog/TagOne';
import BannerOne from '../../components/widgets/blog/BannerOne';
import PostOne from '../../components/post/PostOne';
import PostData from '../../data/blog/PostData.json';

const BlogGridLeftSidebar = () => {
    return (
        <>
            <SEO title="Blog Grid" />
            <Layout>
                <BreadcrumbOne 
                    title="Blog Grid With Left Sidebar"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Grid"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8 order-2">
                                <div className="row g-5">
                                    { 
                                        PostData.slice( 0, 12 ).map((item) => (
                                            <div className="col-lg-6 col-md-6 col-12" key={ item.id }>
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
                            <div className="col-lg-4">
                                <aside className="edu-blog-sidebar">
                                    <SearchOne style2="enable" />
                                    <CategoryOne extraClass="mt--50" style2="enable" />
                                    <LatestPostOne extraClass="mt--50" style2="enable" />
                                    <BannerOne extraClass="mt--50" />
                                    <TagOne extraClass="mt--50" style2="enable" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogGridLeftSidebar;