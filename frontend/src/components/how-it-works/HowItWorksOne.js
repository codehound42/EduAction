import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const items = [
    {
        title: 'Choose Any Courses',
        info: 'Lorem ipsum dolor amet, consectetur adipiscing elited uspendisse varius enim',
        icon: 'icon-book-line',
        shape: 'shape-bg-1',
        link: '#'
    },
    {
        title: 'Purchase Your Course',
        info: 'Lorem ipsum dolor amet, consectetur adipiscing elited uspendisse varius enim',
        icon: 'icon-shopping-basket-2-line',
        shape: 'shape-bg-2',
        link: '#'
    },
    {
        title: 'Great! Start Learn',
        info: 'Lorem ipsum dolor amet, consectetur adipiscing elited uspendisse varius enim',
        icon: 'icon-trophy-line',
        shape: 'shape-bg-3',
        link: '#'
    },
];

const HowItWorksOne = ( { wrapperClass, itemClass } ) => {
    return (
        <div className={ wrapperClass || 'row g-5 mt--20' }>
            { items.map( ( data , i ) => (
                <ScrollAnimation 
                    animateIn="fadeIn"
                    animateOut="fadeInOut"
                    className={ itemClass || 'service-card-single col-lg-4 col-md-6 col-12' }
                    animateOnce={ true }
                    key={ i }
                >
                    <div className={`service-card service-card-7 ${data.shape}`}>
                        <div className="inner">
                            <div className="icon">
                                <a href={ data.link }>
                                    <i className={ data.icon }></i>
                                </a>
                            </div>
                            <div className="content">
                                <h6 className="title"><a href={ data.link }>{ data.title }</a></h6>
                                <p className="description">{ data.info }</p>
                            </div>
                        </div>
                        <div className="arrow-icon">
                            <img src="/images/how-it-works/arrow-down.png" alt="Arrow Images" />
                        </div>
                    </div>
                </ScrollAnimation>
            ) ) }
        </div>
    )
}

export default HowItWorksOne;