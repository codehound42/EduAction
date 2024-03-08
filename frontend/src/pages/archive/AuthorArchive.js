import React from 'react';
import { useParams } from 'react-router-dom';
import { slugify } from '../../utils';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import PostOne from '../../components/post/PostOne';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import PostData from '../../data/blog/PostData.json';

const AuthorArchive = () => {
    const { slug } = useParams();
    const data = PostData.map(blog => {
        return {
            ...blog,
            author: blog.author.filter(person => slugify(person) === slug)
        }
    }).filter(blog => blog.author.length > 0);

    const authorName = data[0].author[0];

    return (
        <>
            <SEO title={`Posts by ${authorName}`} />
            <Layout>
                <BreadcrumbOne 
                    title={`Posts by ${authorName}`}
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Author Posts"
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

export default AuthorArchive;