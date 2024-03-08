import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import SearchOne from '../../components/widgets/blog/SearchOne';
import CategoryOne from '../../components/widgets/blog/CategoryOne';
import LatestPostOne from '../../components/widgets/blog/LatestPostOne';
import TagOne from '../../components/widgets/blog/TagOne';
import AboutOne from '../../components/widgets/blog/AboutOne';
import InstagramOne from '../../components/widgets/blog/InstagramOne';
import Comment from '../blog/Comment';
import PostData from '../../data/blog/PostData.json';

const BlogDetailsTwo = () => {
    const { id } = useParams();
    const blogId = parseInt(id, 10);
    const dataItem = PostData.filter(blog => blog.id === blogId);
    const data = dataItem[0];
    return (
        <>
            <SEO title={ data.title } />
            <Layout>
                <BreadcrumbOne 
                    title={ data.title }
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Blog Details"
                />
                <div className="edu-blog-details-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-8 order-2">
                                <div className="blog-details-1">
                                    <div className="content-blog-top">
                                        <div className="status-group">
                                            <Link className="text-uppercase eduvibe-status status-05 color-primary w-600" to={process.env.PUBLIC_URL + `/category/${ slugify( data.categories.slice( 0, 1 ) ) }`}>
                                                {data.categories.slice(0, 1)}
                                            </Link>
                                        </div>
                                        <h4 className="title">{ data.title }</h4>
                                        <ul className="blog-meta">
                                            <li className="blog-author"><img src="/images/blog/author/author-small/author.png" alt="Blog Images" /> <Link to={process.env.PUBLIC_URL + `/author/${slugify( data.author ) }`}>{data.author}</Link></li>
                                            <li><i className="icon-calendar-2-line"></i>{ data.date }</li>
                                            <li><i className="icon-discuss-line"></i>{ data.comment }</li>
                                            <li><i className="icon-time-line"></i>{ data.readingTime }</li>
                                        </ul>
                                        <div className="thumbnail">
                                            <img className="radius-small w-100 mb--30" src={`${process.env.PUBLIC_URL}/images/blog/blog-details-02/${data.image}`} alt="Blog Thumb" />
                                        </div>
                                    </div>

                                    <div className="blog-main-content">
                                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec the odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary making this the first true dummy generator on the Internet.Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.</p>
                                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend.</p>
                                        <blockquote className="blockquote-style-1">“ Duis vel scelerisque augue, ut vehicula nisl. Curabitur et mollis tortor, eget sollicitudin lectus. Praesent a ante ac urna ultrices volutpat at sed ligula. Phasellus nibh dui, pulvinar a nibh quis. ”
                                            <img className="quote-image" src="/images/icons/quote.png" alt="Quote Images" />
                                        </blockquote>
                                        <ul className="gallery gallery-column-2">
                                            <li><img src="/images/blog/gallery/gallery-01.jpg" alt="Gallery Images" /></li>
                                            <li><img src="/images/blog/gallery/gallery-02.jpg" alt="Gallery Images" /></li>
                                        </ul>
                                        <h5>Learned From Doing One Of Those Social Media</h5>
                                        <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec the odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All the Lorem Ipsum generators on the Internet tend to repeat that predefined chunks as necessary making this the first true dummy generator on the Internet.Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit.</p>
                                        <ul className="list-style-1">
                                            <li><i className="icon-checkbox-circle-fill-solid"></i> Struggling to sell one multi-million dollar home currently on the market</li>
                                            <li><i className="icon-checkbox-circle-fill-solid"></i> The point of using Lorem Ipsum is that it has a normal distribution of letters.</li>
                                            <li><i className="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their default model text.</li>
                                            <li><i className="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their default model text.</li>
                                        </ul>
                                    </div>

                                    <div className="blog-tag-and-share mt--50">
                                        { data.tags && data.tags.length > 0 &&
                                            <div className="blog-tag">
                                                <div className="tag-list bg-shade">
                                                    {
                                                        data.tags.map( ( tag, i ) => {
                                                            return (
                                                                <Link key={ i } to={process.env.PUBLIC_URL + `/tag/${ slugify( tag ) }`}>
                                                                    { tag }
                                                                </Link>
                                                            )
                                                        } )
                                                    }
                                                </div>
                                            </div>
                                        }
                                        <div className="eduvibe-post-share">
                                            <span>Share: </span>
                                            <a className="linkedin" href="#"><i className="icon-linkedin"></i></a>
                                            <a className="facebook" href="#"><i className="icon-Fb"></i></a>
                                            <a className="twitter" href="#"><i className="icon-Twitter"></i></a>
                                            <a className="youtube" href="#"><i className="icon-youtube"></i></a>
                                        </div>
                                    </div>

                                    <div className="blog-author-wrapper">
                                        <div className="thumbnail">
                                            <img src="/images/blog/author/author-medium/author-02.jpg" alt="Author Images" />
                                        </div>
                                        <div className="author-content">
                                            <h6 className="title">John Smith</h6>
                                            <p>Jhon Smith is an author, blogger, and designer living in a suburb of Washington, DC. When she’s not designing, blogging, or writing, Owen can be found with her head in a book or pinning like a madman.</p>
                                            <ul className="social-share icon-transparent">
                                                <li><a href="#"><i className="icon-Fb"></i></a></li>
                                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                                <li><a href="#"><i className="icon-Pinterest"></i></a></li>
                                                <li><a href="#"><i className="icon-Twitter"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="blog-pagination">
                                        <div className="row g-5">
                                            <div className="col-lg-6">
                                                <div className="blog-pagination-list">
                                                    <a href="#">
                                                        <i className="ri-arrow-left-s-line"></i>
                                                        <span>Social Media & evolution of visual design</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="blog-pagination-list next-post">
                                                    <a href="#">
                                                        <span>Many important brands have given us their trust</span>
                                                        <i className="ri-arrow-right-s-line"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="edu-comment-form mt--50">
                                        <Comment 
                                            url=""
                                            id={data.id}
                                            title={data.title}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="edu-blog-sidebar">
                                    <SearchOne />
                                    <CategoryOne extraClass="mt--50" />
                                    <LatestPostOne extraClass="mt--50" />
                                    <AboutOne extraClass="mt--50" />
                                    <TagOne extraClass="mt--50" />
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

export default BlogDetailsTwo;