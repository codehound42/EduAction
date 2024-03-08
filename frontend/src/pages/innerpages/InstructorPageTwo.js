import React from 'react';
import Slider from 'react-slick';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
import InstructorTwo from '../../components/instructor/InstructorTwo';
import InstructorData from '../../data/instructor/InstructorData.json';

const PrevArrow = ( props ) => {
    const { onClick } = props;
    return <button className="slide-arrow prev-arrow" onClick={ onClick }><i className="icon-arrow-left-line"></i></button>
}

const NextArrow = (props) => {
    const { onClick } = props;
    return <button className="slide-arrow next-arrow" onClick={ onClick }><i className="icon-arrow-right-line"></i></button>
}

const InstructorPageTwo = ( { wrapperClass } ) => {
    const TeamMembers = InstructorData.slice(0, 9);
    const sliderSettings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            }, 
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    arrows: false
                }
            }
        ]
    };
    return (
        <>
            <SEO title="Instructor 2" />
            <Layout>
                <BreadcrumbOne 
                    title="Instructor 2"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Instructor-2"
                />
                <div className="edu-elements-area edu-section-gap bg-color-white">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">Skilled Instructor</span>
                                    <h3 className="title">Instructors Grid</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-5 mt--5">
                            { 
                                TeamMembers.map((item) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--45" key={item.id}>
                                        <InstructorTwo data={item} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="edu-team-carousel-area edu-section-gapBottom">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">Skilled Instructor</span>
                                    <h3 className="title">Instructors Grid</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <Slider 
                                    className={ wrapperClass || 'team-activation-02 edu-slick-arrow-top edu-slick-button slick-gutter-15 mt--60 mb--50 mb_dec--20 pb--40' }
                                    { ...sliderSettings }
                                >
                                    { 
                                        InstructorData.slice(0, 6).map( ( item ) => (
                                            <InstructorTwo key={ item.id } data={ item } classes='instructor-one-each-slide' />
                                        ) )
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default InstructorPageTwo;