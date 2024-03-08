import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';
import PostFour from '../post/PostFour';

const HomeFiveBlog = () => {
    return (
        <div className="eduvibe-home-five-blog edu-blog-area edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Blog & News"
                            title = "Our Latest News Feed"
                        />
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    <PostFour />
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-23-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-14-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>

            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div className="shape-image shape-image-2">
                    <img src="/images/shapes/shape-24-01.png" alt="Shape Thumb" />
                </div>
            </div>
        </div>
    )
}

export default HomeFiveBlog;