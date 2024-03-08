import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const FeatureItems = [
    {
        title: 'Expert Instruction',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.',
        icon: 'icon-Destination',
        shape: 'shape-bg-1',
        link: '#'
    },
    {
        title: 'Video Tutorials',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.',
        icon: 'icon-Browser',
        shape: 'shape-bg-2',
        link: '#'
    },
    {
        title: 'Lifetime Access',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.',
        icon: 'icon-Lock',
        shape: 'shape-bg-3',
        link: '#'
    },
    {
        title: 'Learn From Anywhere',
        info: 'Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim.',
        icon: 'icon-Settings',
        shape: 'shape-bg-4',
        link: '#'
    }
];

const FeatureTwo = ( { wrapperClass, bgColor, alignment, style } ) => {
    return (
        <div className={ `row eduvibe-about-one-service ${ wrapperClass || 'g-5 mt--20' }` }>
            { FeatureItems.map( ( data , i ) => (
                <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    className={ `col-lg-3 col-md-6 col-12${ style ? ' '+style : '' }` }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className={ `service-card service-card-3 ${ alignment ? ' ' + alignment : 'text-left' } ${ data.shape } ${ bgColor || '' } ` }>
                        <div className="inner">
                            <div className="icon">
                                <a href={ data.link }>
                                    <i className={ data.icon }></i>
                                </a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                <p className="description">{ data.info }</p>
                                <div className="read-more-btn">
                                    <a className="btn-transparent sm-size heading-color" href={ data.link }>Learn More<i className="icon-arrow-right-line-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </div>
    )
}

export default FeatureTwo;