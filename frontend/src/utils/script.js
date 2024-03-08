export const TestimonialOneParams = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

export const TestimonialTwoParams = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false
};

export const TestimonialTwoThumDots = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 4000
};

export const TestimonialFourParams = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, 
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, 
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }
    ]
};

export const BlogCarouselParams = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const ThreeColumnCarousel = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }
    ]
};

export const ThreeColumnCarousel2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const InstructorCourseSliderParams = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

export const InnerPagesSliderParams = {
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover:false,
    infinite: true,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
};