import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import AboutFive from '../../components/about/AboutFive';
import LogoOne from '../../components/logos/LogoOne';
import HomeFiveProgress from '../../components/home-five/HomeFiveProgress';
import AboutUsThreeMission from '../../components/about-us-three/AboutUsThreeMission';
import AboutUsThreeInstructor from '../../components/about-us-three/AboutUsThreeInstructor';
import CounterUpOne from '../../components/counterup/CounterUpOne';
import TestimonialSectionTwo from '../../components/testimonial-section/TestimonialSectionTwo';

const AboutUsThree = () => {
    return (
        <>
            <SEO title="About Us 3" />
            <Layout>
                <BreadcrumbOne 
                    title="About Us-3"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="About Us"
                />

                <AboutFive wrapperClass="edu-section-gapTop" />

                <LogoOne separator="disable" />

                <HomeFiveProgress />

                <AboutUsThreeMission />

                <AboutUsThreeInstructor />

                <CounterUpOne />

                <TestimonialSectionTwo classes="counterup-overlay-top" />

            </Layout>
        </>
    )
}

export default AboutUsThree;