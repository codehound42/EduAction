import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../sectionTitle/SectionTitle';

const CallToActionOne = () => {
    return (
        <div className="edu-newsletter-area bg-image newsletter-style-3 edu-section-gap bg-color-primary">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="inner">
                            <SectionTitle
                                classes = "text-white text-start"
                                slogan = "Let Us Help"
                                title = "Finding Your Right Courses"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="newsletter-right-content d-block d-sm-flex align-items-center justify-content-start justify-content-lg-end">
                            <div className="contact-btn">
                                <Link className="edu-btn btn-white" to="#">Get Started Now<i className="icon-arrow-right-line-right"></i></Link>
                            </div>
                            <div className="contact-info">
                                <a href="tel: +728-238-399-200"><i className="icon-phone-line"></i> +728-238-399-200</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToActionOne;