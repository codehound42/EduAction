import React from 'react';
import SEO from '../../common/SEO';
import HeaderTwo from '../../common/header/HeaderTwo';
import BannerOne from '../../components/banner/BannerOne';
import HomeOneAbout from '../../components/home-one/HomeOneAbout';
import HomeOneCategory from '../../components/home-one/HomeOneCategory';
import HomeOneCourses from '../../components/home-one/HomeOneCourses';
import TestimonialSectionFour from '../../components/testimonial-section/TestimonialSectionFour';
import HomeOneInstructor from '../../components/home-one/HomeOneInstructor';
import VideoSectionTwo from '../../components/video-section/VideoSectionTwo';
import NewsLettterOne from '../../components/newsletter/NewsLettterOne';
import HomeOneBlog from '../../components/home-one/HomeOneBlog';
import FooterOne from '../../common/footer/FooterOne';

const HomeOne = () => {
    return (
        <>
            <SEO title="Home 1" />

            <HeaderTwo styles="header-transparent header-style-2" />

            <BannerOne />
            
            <HomeOneAbout />

            <HomeOneCategory />

            <HomeOneCourses />

            <TestimonialSectionFour />

            <HomeOneInstructor />

            <VideoSectionTwo />

            <NewsLettterOne />

            <HomeOneBlog />     

            <FooterOne />   
        </>
    )
}

export default HomeOne;