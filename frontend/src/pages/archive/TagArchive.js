import React from 'react';
import { useParams } from 'react-router-dom';
import { slugify } from '../../utils';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import PostOne from '../../components/post/PostOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PostData from '../../data/blog/PostData.json';

const TagArchive = () => {
    const { slug } = useParams();
    const data = PostData.map( blog => {
        return {
            ...blog,
            tags: blog.tags.filter(tagItem => slugify(tagItem) === slug)
        }
    }).filter(blog => blog.tags.length > 0);

    const tagTitle = data[0].tags[0];

    return (
        <>
            <SEO title={`Posts On "${tagTitle}" tag`} />
            <Layout>
                <BreadcrumbOne 
                    title={tagTitle}
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl={`Posts On "${tagTitle}" tag`}
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="row g-5">
                                    { 
                                        data.map((item) => (
                                            <div className="col-lg-4 col-md-6 col-12" key={ item.id }>
                                                <PostOne data={item} />
                                            </div>
                                        ) )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default TagArchive;