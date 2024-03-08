import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import SectionTitle from '../sectionTitle/SectionTitle';
import PostOne from '../../components/post/PostOne';
import PostData from '../../data/blog/PostData.json';

const HomeTwoBlog = () => {
    return (
        <div className="eduvibe-home-two-blog edu-blog-area edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Latest From News"
                            title = "Get Our Every News & Blog"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--30">
                    { 
                        PostData.slice( 0, 3 ).map( ( item ) => (
                            <ScrollAnimation 
                                animateIn="fadeInUp"
                                animateOut="fadeInOut"
                                animateOnce={ true }
                                className="col-lg-4 col-md-6 col-12"
                                key={ item.id } 
                            >
                                <PostOne data={ item } bgWhite="enable" />
                            </ScrollAnimation>
                        ) )
                    }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-13-06.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-13-05.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-25.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape-image shape-image-2">
                    <img src="/images/shapes/shape-24.png" alt="Shape Thumb" />
                </div>
            </div>
        </div>
    )
}

export default HomeTwoBlog;