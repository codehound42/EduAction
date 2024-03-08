import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import ContactUsForm from '../../components/contact/ContactUsForm';

const ContactUs = () => {
    return (
        <>
            <SEO title="Contact Us" />
            <Layout>
                <BreadcrumbOne 
                    title="Contact Us"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Contact Us"
                />
                <div className="eduvibe-contact-us edu-contact-us-area edu-section-gap bg-color-white">
                    <div className="container eduvibe-animated-shape">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">Need Help?</span>
                                    <h3 className="title">Get In Touch With us</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mt--20">
                            <div className="col-lg-6">
                                <div className="contact-info pr--70 pr_lg--0 pr_md--0 pr_sm--0">
                                    <div className="row g-5">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="contact-address-card-1 website">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="ri-global-line"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Our Website</h6>
                                                        <p><a href="https://themeforest.net/user/devsvibe/eduvibe">www.eduvibe.com</a></p>
                                                        <p><a href="https://themeforest.net/user/devsvibe">www.wpvive.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="contact-address-card-1 phone">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="icon-Headphone"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Call Us On</h6>
                                                        <p><a href="tel: +2763 (388) 2930">+2763 (388) 2930</a></p>
                                                        <p><a href="tel: +4875 (356) 2568">+4875 (356) 2568</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="contact-address-card-1 email">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="icon-mail-open-line"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Email Us</h6>
                                                        <p><a href="mailto:eduvibe@mail.com">eduvibe@mail.com</a></p>
                                                        <p><a href="mailto:wpvive@mail.com">wpvive@mail.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="contact-address-card-1 location">
                                                <div className="inner">
                                                    <div className="icon">
                                                        <i className="icon-map-pin-line"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h6 className="title">Our Location</h6>
                                                        <p>486 Normana Avenue Morningtide, 4223</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <ContactUsForm formStyle="rnt-contact-form rwt-dynamic-form row" />
                            </div>
                        </div>

                        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                            <div className="shape-image shape-image-1">
                                <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-2">
                                <img src="/images/shapes/shape-02-08.png" alt="Shape Thumb" />
                            </div>
                            <div className="shape-image shape-image-3">
                                <img src="/images/shapes/shape-15.png" alt="Shape Thumb" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="edu-contact-map-area edu-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="google-map alignwide">
                                    <iframe title="Google Map" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" height="500" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default ContactUs;