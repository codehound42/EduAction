import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../../utils';
import ScrollAnimation from 'react-animate-on-scroll';
import PostData from '../../data/blog/PostData.json';

const PostFour = () => {
    return (
        <>
            { 
                PostData.slice( 0, 1 ).map((item) => (
                    <div className="col-lg-6" key={ item.id }>
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={true}
                            className="edu-blog blog-overlay-transparent radius-small"
                        >
                            <div className="inner">
                                <div className="thumbnail">
                                    <Link to={process.env.PUBLIC_URL + `/blog-details/${item.id}`}>
                                        <img src={`${process.env.PUBLIC_URL}/images/blog/post-04/${item.image}`} alt="Blog Thumb" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <div className="eduvibe-status-list">
                                            <Link className="eduvibe-status-transparent" to={process.env.PUBLIC_URL + `/category/${ slugify( item.categories.slice( 0, 1 ) ) }`}>
                                                {item.categories.slice(0, 1)}
                                            </Link>
                                        </div>
                                        <h6 className="title">
                                            <Link to={process.env.PUBLIC_URL + `/blog-details/${item.id}`}>{item.title}</Link>
                                        </h6>
                                        <ul className="blog-meta">
                                            <li><i className="icon-calendar-2-line"></i>{item.date}</li>
                                            <li><i className="icon-discuss-line"></i>{item.view}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                ) )
            }
            <div className="col-lg-6">
                <div className="row g-5">
                    { 
                        PostData.slice( 1, 5 ).map((item) => (
                            <div className="col-lg-6 col-md-6 col-12" key={ item.id }>
                                <ScrollAnimation 
                                    animateIn="fadeInUp"
                                    animateOut="fadeInOut"
                                    animateOnce={true}
                                    className="edu-blog blog-type-4 radius-small"
                                >
                                    <div className="inner">
                                        <div className="thumbnail">
                                            <Link to={process.env.PUBLIC_URL + `/blog-details/${item.id}`}>
                                                <img src={`${process.env.PUBLIC_URL}/images/blog/post-04/${item.image}`} alt="Blog Thumb" />
                                            </Link>
                                            <div className="top-position status-group left-bottom">
                                                <Link className="eduvibe-status status-01 bg-primary-color" to={process.env.PUBLIC_URL + `/category/${ slugify( item.categories.slice( 0, 1 ) ) }`}>
                                                    {item.categories.slice(0, 1)}
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <h6 className="title">
                                                <Link to={process.env.PUBLIC_URL + `/blog-details/${item.id}`}>{item.title}</Link>
                                            </h6>
                                            <ul className="blog-meta">
                                                <li><i className="icon-calendar-2-line"></i>{item.date}</li>
                                                <li><i className="icon-discuss-line"></i>{item.view}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </>
    )
}

export default PostFour;