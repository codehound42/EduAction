import React from 'react';
import SectionTitle from '../sectionTitle/SectionTitle';

const NewsLettterOne = () => {
    return (
        <div className="edu-newsletter-area newsletter-style-1 edu-section-gap bg-color-primary">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="inner text-center">
                            <SectionTitle
                                classes = "text-white text-center"
                                slogan = "Subscribe Newsletter"
                                title = "Get Every Latest News"
                            />
                            <div className="newsletter-form newsletter-form-style-1 mt--60">
                                <div className="input-box">
                                    <input type="email" placeholder="Enter your mail address" />
                                    <div className="mail-icon">
                                        <i className="icon-mail-open-line"></i>
                                    </div>
                                    <button className="send-button"><i className="icon-send-plane-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-03-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-16.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-13-02.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLettterOne;