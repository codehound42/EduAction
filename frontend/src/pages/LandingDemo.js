import React from 'react';
import SEO from '../common/SEO';
import HeaderLandingPage from '../common/header/HeaderLandingPage';
import BannerLanding from '../components/banner/BannerLanding';
import LandingDemoHomePages from '../components/landing-demo/LandingDemoHomePages';
import LandingDemoCourses from '../components/landing-demo/LandingDemoCourses';
import LandingDemoFeatures from '../components/landing-demo/LandingDemoFeatures';
import LandingDemoInnerPages from '../components/landing-demo/LandingDemoInnerPages';
import LandingDemoFAQ from '../components/landing-demo/LandingDemoFAQ';
import LandingDemoFooter from '../common/footer/LandingDemoFooter';

const LandingDemo = () => {
    return (
        <>
            <SEO title="EduVibe" />

            <HeaderLandingPage styles="header-transparent" />

            <BannerLanding />

            <LandingDemoHomePages />

            <LandingDemoCourses />

            <LandingDemoFeatures />
            
            <LandingDemoInnerPages />
            
            <LandingDemoFAQ />
            
            <LandingDemoFooter />
        </>
    )
}

export default LandingDemo;