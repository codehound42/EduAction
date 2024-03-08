import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BannerFour from '../../components/banner/BannerFour';
import HomeFourServices from '../../components/home-four/HomeFourServices';
import HomeFourAbout from '../../components/home-four/HomeFourAbout';
import HomeFourCourses from '../../components/home-four/HomeFourCourses';
import VideoSectionOne from '../../components/video-section/VideoSectionOne';
import HomeFourTeam from '../../components/home-four/HomeFourTeam';
import CallToActionTwo from '../../components/cta/CallToActionTwo';
import TestimonialSectionOne from '../../components/testimonial-section/TestimonialSectionOne';
import HomeFourBlog from '../../components/home-four/HomeFourBlog';

const HomeFour = () => {
    return (
        <>
            <SEO title="Home 4" />
            
            <Layout>

                <BannerFour />

                <HomeFourServices />

                <HomeFourAbout />

                <HomeFourCourses />

                <VideoSectionOne />

                <HomeFourTeam />

                <CallToActionTwo />

                <TestimonialSectionOne />

                <HomeFourBlog />

            </Layout>
        </>
    )
}

export default HomeFour;