import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';
import PostThree from '../../components/post/PostThree';
import PostData from '../../data/blog/PostData.json';

const HomeFourBlog = () => {
    return (
        <div className="eduvibe-home-four-blog bg-image edu-blog-area edu-section-gap">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-6">
                        <SectionTitle
                            classes = "text-start"
                            slogan = "Blog & News"
                            title = "Our Latest News Feed"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="load-more-btn text-end">
                            <Link className="edu-btn" to="/blog-grid-1">Read More Blogs<i className="icon-arrow-right-line-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    { 
                        PostData.slice( 0, 3 ).map((item) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-4 col-md-6 col-12"
                                key={ item.id } 
                            >
                                <PostThree data={item} />
                            </ScrollAnimation>
                        ) )
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-32.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-03-08.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-27-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeFourBlog;