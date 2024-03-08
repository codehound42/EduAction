import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const SectionTitle = ( { slogan, title, classes } ) => {
    return (
        <div className={`section-title ${ classes ? classes: '' }`}>
            <ScrollAnimation 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <span className="pre-title" dangerouslySetInnerHTML={{__html: slogan}}></span>
            </ScrollAnimation>
            
            <ScrollAnimation 
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
            >
                <h3 className="title" dangerouslySetInnerHTML={{__html: title}}></h3>
            </ScrollAnimation>
        </div>
    )
}
export default SectionTitle;