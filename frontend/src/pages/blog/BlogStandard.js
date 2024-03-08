import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PaginationOne from '../../components/pagination/PaginationOne';
import PostStandard from '../../components/post/PostStandard';
import SearchOne from '../../components/widgets/blog/SearchOne';
import CategoryOne from '../../components/widgets/blog/CategoryOne';
import LatestPostOne from '../../components/widgets/blog/LatestPostOne';
import AboutOne from '../../components/widgets/blog/AboutOne';
import TagOne from '../../components/widgets/blog/TagOne';
import InstagramOne from '../../components/widgets/blog/InstagramOne';
import PostData from '../../data/blog/PostData.json';
const BlogStandard = () => {
    return (
        <>
            <SEO title="Blog Standard" />
            <Layout>
                <BreadcrumbOne 
                    title="Blog Standard"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Standard"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8 eduvibe-blog-standard-wrapper">
                                { 
                                    PostData.slice( 0, 4 ).map((item) => (
                                        <div className="edu-blog blog-type-1 radius-small eduvibe-post-standard mt--40" key={ item.id }>
                                            <PostStandard data={item} />
                                        </div>
                                    ) )
                                }
                                <div className="row">
                                    <div className="col-lg-12 mt--60">
                                        <PaginationOne />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="edu-blog-sidebar">
                                    <SearchOne />
                                    <CategoryOne extraClass="mt--40" />
                                    <LatestPostOne extraClass="mt--40" />
                                    <AboutOne extraClass="mt--40" />
                                    <TagOne extraClass="mt--40" />
                                    <InstagramOne extraClass="mt--40" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default BlogStandard;