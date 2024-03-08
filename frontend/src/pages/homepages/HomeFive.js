import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerFive from '../../components/banner/BannerFive';
import LogoOne from '../../components/logos/LogoOne';
import HomeFiveCategories from '../../components/home-five/HomeFiveCategories';
import AboutEight from '../../components/about/AboutEight';
import HomeFiveCourses from '../../components/home-five/HomeFiveCourses';
import HomeFiveInstructor from '../../components/home-five/HomeFiveInstructor';
import HomeFiveProgress from '../../components/home-five/HomeFiveProgress';
import TestimonialSectionThree from '../../components/testimonial-section/TestimonialSectionThree';
import HomeFiveBlog from '../../components/home-five/HomeFiveBlog';
import FooterOne from '../../common/footer/FooterOne';

const HomeFive = () => {
    return (
        <>
            <SEO title="Home 5" />

            <HeaderTwo styles="header-transparent header-style-2" searchDisable buttonStyle="bg-color-white" />
            
            <BannerFive />

            <LogoOne />
            
            <HomeFiveCategories />

            <AboutEight />

            <HomeFiveCourses />

            <HomeFiveInstructor />

            <HomeFiveProgress />

            <TestimonialSectionThree />

            <HomeFiveBlog />

            <FooterOne />
        </>
    )
}

export default HomeFive;