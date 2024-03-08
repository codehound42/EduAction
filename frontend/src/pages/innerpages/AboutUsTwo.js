import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import AboutNine from '../../components/about/AboutNine';
import AboutUsTwoService from '../../components/about-us-two/AboutUsTwoService';
import AwardOne from '../../components/award/AwardOne';
import AboutUsTwoInstructor from '../../components/about-us-two/AboutUsTwoInstructor';
import AboutOne from '../../components/about/AboutOne';
import AboutUsTwoCountDown from '../../components/about-us-two/AboutUsTwoCountDown';
import TestimonialSectionOne from '../../components/testimonial-section/TestimonialSectionOne';

const AboutUsTwo = () => {
    return (
        <>
            <SEO title="About Us 2" />
            <Layout>
                <BreadcrumbOne 
                    title="About Us-2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="About Us"
                />

                <AboutNine />

                <AboutUsTwoService />

                <AwardOne />

                <AboutUsTwoInstructor />

                <AboutOne />
                
                <AboutUsTwoCountDown />

                <TestimonialSectionOne />
                
            </Layout>

        </>
    )
}

export default AboutUsTwo;