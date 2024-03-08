import React from 'react';
import Slider from 'react-slick';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
    {
        title: 'Art & Design',
        numberOfCourses: '45 Courses',
        image: 'category-01.png',
        shape: 'shape-bg-1',
        link: '#'
    },
    {
        title: 'Content Writting',
        numberOfCourses: '23 Courses',
        image: 'category-02.png',
        shape: 'shape-bg-2',
        link: '#'
    },
    {
        title: 'Data Science',
        numberOfCourses: '39 Courses',
        image: 'category-03.png',
        shape: 'shape-bg-3',
        link: '#'
    },
    {
        title: 'Health & Fitness',
        numberOfCourses: '25 Courses',
        image: 'category-04.png',
        shape: 'shape-bg-4',
        link: '#'
    },
    {
        title: 'Music Learning',
        numberOfCourses: '30 Courses',
        image: 'category-05.png',
        shape: 'shape-bg-5',
        link: '#'
    },
    {
        title: 'Data Science',
        numberOfCourses: '15 Courses',
        image: 'category-06.png',
        shape: 'shape-bg-3',
        link: '#'
    }
];

const PrevArrow = ( props ) => {
    const { onClick } = props;
    return <button className="slide-arrow prev-arrow" onClick={ onClick }><i className="icon-arrow-left-line"></i></button>
}

const NextArrow = (props) => {
    const { onClick } = props;
    return <button className="slide-arrow next-arrow" onClick={ onClick }><i className="icon-arrow-right-line"></i></button>
}

const CategoryFour = ( { wrapperClass, itemClass } ) => {
    
    const sliderSettings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }, 
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, 
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider 
            className={ wrapperClass || 'col-lg-12 mt--60 mb_dec--20 slick-activation-wrapper service-activation-item5 edu-slick-arrow-top' }
            { ...sliderSettings }
        >
            { items.map( ( data , i ) => (
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ itemClass || 'single-slick-card' }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className={`service-card service-card-8 ${data.shape}`}>
                        <div className="inner">
                            <div className="icon">
                                <a href={ data.link }>
                                    <img src={`${process.env.PUBLIC_URL}./images/category/category-04/${ data.image }`} alt="Category Thumb" />
                                </a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                <span>{ data.numberOfCourses }</span>
                            </div>
                            <div className="hover-action">
                                <a className="read-more-btn" href={ data.link }><i className="icon-arrow-right-line-right"></i></a>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </Slider>
    )
}

export default CategoryFour;