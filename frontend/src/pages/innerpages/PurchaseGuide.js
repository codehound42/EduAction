import React from 'react'
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';

const PurchaseGuide = () => {
    return (
        <>
            <SEO title="Purchase Guide" />
            <Layout>
                <BreadcrumbOne 
                    title="Purchase Guide"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Purchase Guide"
                />
                <div className="edu-purchase-guide-area edu-purchase-guide edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="content">
                                    <div className="gallery-column gallery-column-2 mb--50">
                                        <div className="gallery-image">
                                            <img className="radius-small w-100" src="/images/others/purchase-guide-01.jpg" alt="Purchase Guide Thumb 1" />
                                        </div>
                                        <div className="gallery-image">
                                            <img className="radius-small w-100" src="/images/others/purchase-guide-02.jpg" alt="Purchase Guide Thumb 2" />
                                        </div>
                                    </div>
                                    <h4 className="title">Accepted Currency</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus odio lorem, pulvinar vulputate diam eget, consectetur posuere massa. Suspendisse ornare in risus quis tempus. Vivamus ornare iaculis mi ut gravida. Integer convallis erat id dapibus pharetra. Nulla sagittis ligula eros, quis posuere massa auctor ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent facilisis, ante quis accumsan ultricies</p>
                                    <h4 className="title">Account Registering</h4>
                                    <p>In order to buy any course or become a member of our center, customers/ learners must first register with a personal account providing the following information:</p>
                                    <ol>
                                        <li>Name (required)</li>
                                        <li>Age (required)</li>
                                        <li>Date of birth (required)</li>
                                        <li>Passport/ ID no. (required)</li>
                                        <li>Current career (required)</li>
                                        <li>Mobile phone numbers (required)</li>
                                        <li>Email address (required)</li>
                                        <li>Hobbies & interests (optional)</li>
                                        <li>Social profiles (optional)</li>
                                    </ol>
                                    <h4 className="title">How to Purchase a Course? </h4>
                                    <p>Click on the Buy this course button, then provide your credit card information to complete the purchase. If you have chosen to save this information, it will automatically be filled out for you to proceed with check-out in just 1 click only. </p>
                                    <h4 className="title">Accepted Credit Cards</h4>
                                    <ol>
                                        <li>Visa</li>
                                        <li>Mastercards</li>
                                        <li>American Express</li>
                                        <li>Discover</li>
                                        <li>*Taxes are calculated by your local bank and location.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}
export default PurchaseGuide;
