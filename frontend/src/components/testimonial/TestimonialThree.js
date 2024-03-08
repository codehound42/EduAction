import React from 'react';
import Slider from 'react-slick';

let data = [
    {
        name: "Geraldine D. Anspach",
        details: "Lorem ipsum dolor sit amet, consectetur dloril adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        details2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. deserunt mollit anim id est laborum.",
        designation: "SEO Expert",
        image: "client-01.png",
        rating: 5
    },
    {
        name: "Lorraine D. Raines",
        details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum finibus bonorum.",
        details2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. deserunt mollit anim id est laborum.",
        designation: "WordPress Expert",
        image: "client-02.png",
        rating: 5
    },
    {
        name: "David M. Bard",
        details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        details2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. deserunt mollit anim id est laborum.",
        designation: "JavaScript Developer",
        image: "client-03.png",
        rating: 5
    },
    {
        name: "Julia H. Smith",
        details: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
        details2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore. deserunt mollit anim id est laborum.",
        designation: "Laravel Developer",
        image: "client-04.png",
        rating: 5
    },
];

const PrevArrow = ( props ) => {
    const { onClick } = props;
    return <button className="slide-arrow prev-arrow slick-arrow" onClick={onClick}><i className="icon-arrow-left-line"></i></button>
}

const NextArrow = ( props ) => {
    const { onClick } = props;
    return <button className="slide-arrow next-arrow slick-arrow" onClick={onClick}><i className="icon-arrow-right-line"></i></button>
}

const TestimonialThree = ( props ) => {
    const sliderSettings = {
        dots: props.dots === "enable" ? true : false,
        infinite: true,
        arrows: props.arrows === "disable" ? false : true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: props.fade === "disable" ? false : true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    data = props.item ? data.slice( 0, props.item ) : data;
  
    const classes = `eduvibe-testimonial-three inner testimonial-card-activation-1 slick-arrow-style-2 ${props.className ? props.className : '' }`;
    return (
        <Slider 
            className={classes}
            { ...sliderSettings }
        >
            { data.map( ( item, i ) => (
                <div 
                    className={ props.itemClass || 'single-card' }
                    key={i}
                >
                    { props.rating !== 'disable' && 
                        <div className="rating eduvibe-course-rating-stars">
                            {[...Array(5)].map((_, index) => {
                                return <i key={index} className={ index < item.rating ? 'on icon-Star' : 'off icon-Star' }></i>
                            })}
                        </div>
                    }
                    <p className="description">“{ props.details2 !=="enable" ? item.details : item.details2 }”</p>
                    <div className="client-info">
                        <div className="thumbnail">
                            <img src={`${process.env.PUBLIC_URL}/images/testimonial/testimonial-04/${item.image}`} alt="Client Thumb" />
                        </div>
                        <div className="content">
                            <h6 className="title">{ item.name }</h6>
                            <span className="designation">{ item.designation }</span>
                        </div>
                    </div>
                </div>
            ) ) }
        </Slider>
    )
}

export default TestimonialThree;