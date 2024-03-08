import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import PostTwo from '../../components/post/PostTwo';
import PostData from '../../data/blog/PostData.json';

const HomeOneBlog = () => {
    return (
        <div className="edu-blog-area eduvibe-home-one-blog edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <SectionTitle
                            classes = "text-start"
                            slogan = "BLog & News"
                            title = "Trending on Our Blogs"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="read-more-btn text-end">
                            <Link className="edu-btn" to="/blog-grid-1">Read More Blogs<i className="icon-arrow-right-line-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--30">
                    { 
                        PostData.slice( 0, 2 ).map((item) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={true}
                                className="col-lg-6 col-sm-6 col-12"
                                key={ item.id } 
                            >
                                <PostTwo data={item} bgWhite="enable" />
                            </ScrollAnimation>
                        ) )
                    }
                </div>
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-04-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-15-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-13-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-17.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeOneBlog;