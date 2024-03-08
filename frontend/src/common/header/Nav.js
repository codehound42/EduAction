import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown">
                <Link to="#">Home</Link>
                <ul className="submenu">
                    <li><Link to="/home-1">Home 1</Link></li>
                    <li><Link to="/home-2">Home 2</Link></li>
                    <li><Link to="/home-3">Home 3</Link></li>
                    <li><Link to="/home-4">Home 4</Link></li>
                    <li><Link to="/home-5">Home 5</Link></li>
                    <li><Link to="/">Landing Demo</Link></li>
                </ul>
            </li>

            <li className="has-droupdown">
                <Link to="#">About</Link>
                <ul className="submenu">
                    <li><Link to="/about-us-1">About Us 1</Link></li>
                    <li><Link to="/about-us-2">About Us 2</Link></li>
                    <li><Link to="/about-us-3">About Us 3</Link></li>
                </ul>
            </li>
            
            <li className="has-droupdown">
                <Link to="#">Courses</Link>
                <ul className="submenu">
                    <li><Link to="/course-1">Course 1</Link></li>
                    <li><Link to="/course-2">Course 2</Link></li>
                    <li><Link to="/course-3">Course 3</Link></li>
                    <li><Link to="/course-4">Course 4</Link></li>
                    <li><Link to="/course-5">Course 5</Link></li>
                    <li><Link to="/course-details/2">Course Details 1</Link></li>
                    <li><Link to="/course-details-two/1">Course Details 2</Link></li>
                    <li><Link to="/course-filter-1">Course Filter 1</Link></li>
                    <li><Link to="/course-filter-2">Course Filter 2</Link></li>
                    <li><Link to="/course-filter-sidebar">Course Filter Sidebar</Link></li>
                    <li><Link to="/course-carousel">Course Carousel</Link></li>
                    <li><Link to="/course-load-more">Course( Load More )</Link></li>
                    <li><Link to="/course-category/business">Course Category Archive</Link></li>
                </ul>
            </li>
            
            <li className="has-droupdown">
                <Link to="#">Pages</Link>
                <ul className="submenu">
                    <li className="has-droupdown">
                        <Link to="#">Event</Link>
                        <ul className="submenu">
                            <li><Link to="/event-grid">Event Grid</Link></li>
                            <li><Link to="/event-list">Event List</Link></li>
                            <li><Link to="/event-load-more">Event( Load More )</Link></li>
                            <li><Link to="/event-carousel">Event Carousel</Link></li>
                            <li><Link to="/event-details/1">Event Details</Link></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link to="#">Gallery</Link>
                        <ul className="submenu">
                            <li><Link to="/gallery-grid">Gallery Grid</Link></li>
                            <li><Link to="/gallery-masonry">Gallery Masonry</Link></li>
                            <li><Link to="/gallery-load-more">Gallery( Load More )</Link></li>
                        </ul>
                    </li>
                    <li className="has-droupdown">
                        <Link to="#">Instructor</Link>
                        <ul className="submenu">
                            <li><Link to="/instructor-one">Instructor 1</Link></li>
                            <li><Link to="/instructor-two">Instructor 2</Link></li>
                            <li><Link to="/instructor-three">Instructor 3</Link></li>
                            <li><Link to="/instructor-details/james-carlson">Instructor Profile</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/purchase-guide">Purchase Guide</Link></li>
                    <li><Link to="/testimonial">Testimonial</Link></li>
                    <li><Link to="/coming-soon">Coming Soon</Link></li>
                    <li><Link to="/login-register">Login/Register</Link></li>
                    <li><Link to="/404">404</Link></li>
                </ul>
            </li>
            
            <li className="has-droupdown"><Link to="#">Blog</Link>
                <ul className="submenu">
                    <li><Link to="/blog-grid-1">Blog Grid 1</Link></li>
                    <li><Link to="/blog-grid-2">Blog Grid 2</Link></li>
                    <li><Link to="/blog-grid-3">Blog Grid 3</Link></li>
                    <li><Link to="/blog-carousel">Blog Carousel</Link></li>
                    <li><Link to="/blog-standard">Blog Standard</Link></li>
                    <li><Link to="/blog-grid-right-sidebar">Blog( Right Sidebar )</Link></li>
                    <li><Link to="/blog-grid-left-sidebar">Blog( Left Sidebar )</Link></li>
                    <li><Link to="/blog-load-more">Blog( Load More )</Link></li>
                    <li><Link to="/blog-details/1">Blog Details 1</Link></li>
                    <li><Link to="/blog-details-left-sidebar/1">Blog Details 2</Link></li>
                    <li><Link to="/blog-details-right-sidebar/1">Blog Details 3</Link></li>
                    <li><Link to="/category/education">Category Archive</Link></li>
                    <li><Link to="/tag/finance">Tag Archive</Link></li>
                    <li><Link to="/author/hazel-thomas">Author Archive</Link></li>
                </ul>
            </li>

            <li className="has-droupdown">
                <Link to="/">Contact</Link>
                <ul className="submenu">
                    <li><Link to="/contact-me">Contact Me</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </li>
        </ul>
    )
}
export default Nav;
