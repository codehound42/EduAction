import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerThree from '../../components/banner/BannerThree';
import HomeThreeService from '../../components/home-three/HomeThreeService';
import AboutFive from '../../components/about/AboutFive';
import HomeThreeCourse from '../../components/home-three/HomeThreeCourse';
import AboutSix from '../../components/about/AboutSix';
import AboutTwo from '../../components/about/AboutTwo';
import TestimonialSectionTwo from '../../components/testimonial-section/TestimonialSectionTwo';
import HomeThreeEvent from '../../components/home-three/HomeThreeEvent';
import NewsLetterFormTwo from '../../components/newsletter/NewsLetterTwo';
import FooterOne from '../../common/footer/FooterOne';

const HomeThree = () => {
    return (
        <>
            <SEO title="Home 3" />
             
            <HeaderTwo styles="header-transparent header-style-2" />

            <BannerThree />
            
            <HomeThreeService />

            <AboutFive />

            <HomeThreeCourse />
            
            <AboutSix />

            <AboutTwo />

            <TestimonialSectionTwo />

            <HomeThreeEvent />

            <NewsLetterFormTwo />

            <FooterOne />
        </>
    )
}

export default HomeThree;