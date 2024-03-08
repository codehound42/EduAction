import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AwardItems = [
    {
        subtitle: 'Market / 2022',
        title: 'Envato Design of The Week',
        image: 'award-01.png'
    },
    {
        subtitle: 'Udemy / 2022',
        title: 'Awards Site of The Year',
        image: 'award-02.png'
    },
    {
        subtitle: 'Review / 2022',
        title: 'Best Customer Support',
        image: 'award-03.png'
    },
    {
        subtitle: 'Market / 2022',
        title: 'Top Selling Premium Item',
        image: 'award-01.png'
    }
];

const AwardOne = () => {
    return (
        <div className="eduvibe-about-two-award edu-winner-area edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="pre-title">Award</span>
                            <h3 className="title">Our Winning Award</h3>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--20">
                    { AwardItems.map( ( data , i ) => (
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            className="col-lg-3 col-md-6 col-12"
                            animateOnce={ true }
                            key={ i }
                        >
                            <div className="edu-winner-card">
                                <div className="inner">
                                    <div className="icon">
                                        <img src={`${process.env.PUBLIC_URL}/images/award/award-01/${ data.image }`} alt="Award Icon" />
                                    </div>
                                    <div className="content">
                                        <span className="subtitle">{ data.subtitle }</span>
                                        <h6 className="title">{ data.title }</h6>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ) ) }
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-03-07.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-04-01.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-25-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape shape-1">
                        <span className="shape-dot"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AwardOne;