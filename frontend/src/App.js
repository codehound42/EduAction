import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/scrolltotop/ScrollToTop';
import CourseFilterSidebar from './pages/course/CourseFilterSidebar';
import AboutUsOne from './pages/innerpages/AboutUsOne';
import AboutUsTwo from './pages/innerpages/AboutUsTwo';
import AboutUsThree from './pages/innerpages/AboutUsThree';
import BlogGridOne from './pages/blog/BlogGridOne';
import BlogGridTwo from './pages/blog/BlogGridTwo';
import BlogGridThree from './pages/blog/BlogGridThree';
import BlogCarousel from './pages/blog/BlogCarousel';
import BlogLoadMore from './pages/blog/BlogLoadMore';
import BlogStandard from './pages/blog/BlogStandard';
import BlogGridRightSidebar from './pages/blog/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/blog/BlogGridLeftSidebar';
import BlogDetailsOne from './pages/detailspages/BlogDetailsOne';
import BlogDetailsTwo from './pages/detailspages/BlogDetailsTwo';
import BlogDetailsThree from './pages/detailspages/BlogDetailsThree';
import CategoryArchive from './pages/archive/CategoryArchive';
import TagArchive from './pages/archive/TagArchive';
import AuthorArchive from './pages/archive/AuthorArchive';
import ComingSoon from './pages/innerpages/ComingSoon';
import ContactMe from './pages/innerpages/ContactMe';
import ContactUs from './pages/innerpages/ContactUs';
import CourseOne from './pages/course/CourseOne';
import CourseTwo from './pages/course/CourseTwo';
import CourseThree from './pages/course/CourseThree';
import CourseFour from './pages/course/CourseFour';
import CourseFive from './pages/course/CourseFive';
import CourseFilterOne from './pages/course/CourseFilterOne';
import CourseFilterTwo from './pages/course/CourseFilterTwo';
import CourseCarousel from './pages/course/CourseCarousel';
import CourseLoadMore from './pages/course/CourseLoadMore';
import CourseCategoryArchive from './pages/archive/CourseCategoryArchive';
import CourseDetails from './pages/detailspages/CourseDetails';
import CourseDetailsTwo from './pages/detailspages/CourseDetailsTwo';
import EventGrid from './pages/innerpages/EventGrid';
import EventList from './pages/innerpages/EventList';
import EventLoadMore from './pages/innerpages/EventLoadMore';
import EventCarousel from './pages/innerpages/EventCarousel';
import EventDetails from './pages/detailspages/EventDetails';
import Faq from './pages/innerpages/Faq';
import GalleryGrid from './pages/innerpages/GalleryGrid';
import GalleryMasonry from './pages/innerpages/GalleryMasonry';
import GalleryLoadMore from './pages/innerpages/GalleryLoadMore';
import HomeOne from './pages/homepages/HomeOne';
import HomeTwo from './pages/homepages/HomeTwo';
import HomeThree from './pages/homepages/HomeThree';
import HomeFour from './pages/homepages/HomeFour';
import HomeFive from './pages/homepages/HomeFive';
import InstructorPageOne from './pages/innerpages/InstructorPageOne';
import InstructorPageTwo from './pages/innerpages/InstructorPageTwo';
import InstructorPageThree from './pages/innerpages/InstructorPageThree';
import LandingDemo from './pages/LandingDemo';
import LoginRegister from './pages/innerpages/LoginRegister';
import Pricing from './pages/innerpages/Pricing';
import PrivacyPolicy from './pages/innerpages/PrivacyPolicy';
import PurchaseGuide from './pages/innerpages/PurchaseGuide';
import Testimonial from './pages/innerpages/Testimonial';
import InstructorDetails from './pages/detailspages/InstructorDetails';
import Error from './pages/innerpages/Error';

// Import Css Here 
import './assets/scss/style.scss';

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route exact path='/' element={<LandingDemo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-1'}`} element={<HomeOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-2'}`} element={<HomeTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-3'}`} element={<HomeThree/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-4'}`} element={<HomeFour/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/home-5'}`} element={<HomeFive/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/about-us-1'}`} element={<AboutUsOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/about-us-2'}`} element={<AboutUsTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/about-us-3'}`} element={<AboutUsThree/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/coming-soon'}`} element={<ComingSoon/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/contact-me'}`} element={<ContactMe/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/contact-us'}`} element={<ContactUs/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-1'}`} element={<CourseOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-2'}`} element={<CourseTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-3'}`} element={<CourseThree/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-4'}`} element={<CourseFour/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-5'}`} element={<CourseFive/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-filter-1'}`} element={<CourseFilterOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-filter-2'}`} element={<CourseFilterTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-carousel'}`} element={<CourseCarousel/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-load-more'}`} element={<CourseLoadMore/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-category/:slug'}`} element={<CourseCategoryArchive/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-details/:id'}`} element={<CourseDetails/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-details-two/:id'}`} element={<CourseDetailsTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/course-filter-sidebar'}`} element={<CourseFilterSidebar />}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/event-grid'}`} element={<EventGrid/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/event-list'}`} element={<EventList/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/event-load-more'}`} element={<EventLoadMore/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/event-carousel'}`} element={<EventCarousel/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/event-details/:id'}`} element={<EventDetails/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/faq'}`} element={<Faq/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/gallery-grid'}`} element={<GalleryGrid/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/gallery-masonry'}`} element={<GalleryMasonry/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/gallery-load-more'}`} element={<GalleryLoadMore/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/instructor-one'}`} element={<InstructorPageOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/instructor-two'}`} element={<InstructorPageTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/instructor-three'}`} element={<InstructorPageThree/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/pricing'}`} element={<Pricing/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/privacy-policy'}`} element={<PrivacyPolicy/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/purchase-guide'}`} element={<PurchaseGuide/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/testimonial'}`} element={<Testimonial/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/instructor-details/:slug'}`} element={<InstructorDetails/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-grid-1'}`} element={<BlogGridOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-grid-2'}`} element={<BlogGridTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-grid-3'}`} element={<BlogGridThree/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-carousel'}`} element={<BlogCarousel/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-load-more'}`} element={<BlogLoadMore/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-standard'}`} element={<BlogStandard/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-grid-right-sidebar'}`} element={<BlogGridRightSidebar/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-grid-left-sidebar'}`} element={<BlogGridLeftSidebar/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/login-register'}`} element={<LoginRegister/>}/>

                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-details/:id'}`} element={<BlogDetailsOne/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-details-left-sidebar/:id'}`} element={<BlogDetailsTwo/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/blog-details-right-sidebar/:id'}`} element={<BlogDetailsThree/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/category/:slug'}`} element={<CategoryArchive/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/tag/:slug'}`} element={<TagArchive/>}/>
                    <Route exact path={`${process.env.PUBLIC_URL + '/author/:slug'}`} element={<AuthorArchive/>}/>
                    <Route path='*' element={<Error/>}/>
                </Routes>
            </ScrollToTop>
        </Router>
    );
}

export default App;
