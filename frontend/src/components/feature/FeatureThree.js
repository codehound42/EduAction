import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureItems = [
    {
        subTitle: 'Udemy / 2022',
        title: 'The Employee of the Month',
        image: 'feature-image-01.png'
    },
    {
        subTitle: 'Trustpilot / 2022',
        title: 'Thanks for Your Contribution',
        image: 'feature-image-02.png'
    },
    {
        subTitle: 'Envato / 2022',
        title: 'For Excellent Creativity',
        image: 'feature-image-03.png'
    },
    {
        subTitle: 'Dribbble / 2022',
        title: 'Let\'s Grow Old Together',
        image: 'feature-image-01.png'
    }
];

const FeatureThree = ( { wrapperClass, alignment, style } ) => {
    return (
        <div className={ `row ${ wrapperClass || 'g-5 mt--20' }` }>
            { FeatureItems.map( ( data , i ) => (
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ `col-lg-3 col-md-6 col-12 ${ alignment ? alignment : '' } ${ style ? style : '' }` }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className="edu-winner-card">
                        <div className="inner">
                            <div className="icon">
                                <img src={`${process.env.PUBLIC_URL}./images/feature/feature-03/${ data.image }`} alt="Winner Icon" />
                            </div>
                            <div className="content">
                                <span className="subtitle">{ data.subTitle }</span>
                                <h6 className="title">{ data.title }</h6>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </div>
    )
}

export default FeatureThree;