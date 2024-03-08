import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../common/SEO';
const Error = () => {
    return (
        <>
        <SEO title="404 Not Found" />
        <div className="edu-error-area eduvibe-404-page edu-error-style">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-12">
                        <div className="content text-center">
                            <div className="thumbnail mb--60">
                                <img src="/images/others/404.png" alt="404 Images" />
                            </div>
                            <h3 className="title">Oops... Page Not Found!</h3>
                            <p className="description">Please return to the site's homepage, It looks like nothing was found at this location</p>
                            <div className="backto-home-btn">
                            <Link to="/" className="edu-btn">Back To Home<i className="icon-arrow-right-line-right"></i></Link>
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
                        <img src="/images/shapes/shape-05-06.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-4">
                        <img src="/images/shapes/shape-14-03.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-5">
                        <img src="/images/shapes/shape-03-10.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-6">
                        <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Error;