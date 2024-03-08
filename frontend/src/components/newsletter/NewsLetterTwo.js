import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';

const NewsLetterTwo = () => {
    return (
        <div className="eduvibe-home-three-newsletter edu-newsletter-area newsletter-style-4 edu-section-gap bg-image">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <SectionTitle
                                classes = "text-center"
                                slogan = "Subscribe Newsletter"
                                title = "Get Every Latest News"
                            />
                            <div className="newsletter-form newsletter-form-style-1 mt--60 mt_md--30 mt_sm--30 position-relative">
                                <div className="input-box text-start">
                                    <input className="large-input-box" type="email" placeholder="Enter your mail address" />
                                    <div className="mail-icon">
                                        <i className="icon-mail-open-line"></i>
                                    </div>
                                    <button className="edu-btn">Subscribe<i className="icon-arrow-right-line-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-04-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-15-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-13-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-02-05.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsLetterTwo;