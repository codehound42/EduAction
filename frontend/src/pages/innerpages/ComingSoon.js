import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
import ComingSoonOne from '../../components/coming-soon/ComingSoonOne';

const ComingSoon = () => {
    return(
        <>
            <SEO title="Coming Soon" />
            <div className="eduvibe-coming-soon edu-coming-soon-area edu-coming-soon-style ptb--150 ptb_md--80 ptb_sm--80 bg-image">
                <div className="container eduvibe-animated-shape">
                    <div className="row g-5">
                        <div className="col-xl-10 offset-xl-1">
                            <div className="content text-center">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="/images/logo/logo.png" alt="Logo Thumb" />
                                    </Link>
                                </div>
                                <h1 className="title">We Are Making <br /> Something Specials</h1>
                                <div className="countdown-style-2">
                                    <div className="countdown">
                                        <ComingSoonOne />
                                    </div>
                                </div>
                                <p className="description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.</p>
                                <div className="newsletter-style-6">
                                    <form className="newsletter-form-style-2" action="#">
                                        <input type="email" placeholder="Enter your mail address" />
                                        <button className="edu-btn">Subscribe Now <i className="icon-arrow-right-line-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="shape-image shape-image-1">
                            <img src="/images/shapes/shape-11-06.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-2">
                            <img src="/images/shapes/shape-09-02.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-3">
                            <img src="/images/shapes/shape-03-02.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-4">
                            <img src="/images/shapes/shape-14-04.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-5">
                            <img src="/images/shapes/shape-03-08.png" alt="Shape Thumb" />
                        </div>
                        <div className="shape-image shape-image-6">
                            <img src="/images/shapes/shape-01-02.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ComingSoon;