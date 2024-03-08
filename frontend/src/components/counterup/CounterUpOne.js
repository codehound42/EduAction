import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const funFacts = [
    {
        title: 'STUDENTS ENROLLED',
        icon: 'icon-Bag',
        number: 550,
        suffix: '+'
    },
    {
        title: 'SATISFACTION RATE',
        icon: 'icon-trophy',
        number: 100,
        suffix: '%'
    },
    {
        title: 'Academic Programs',
        icon: 'icon-Open-book',
        number: 300,
        suffix: '+'
    },
    {
        title: 'ONLINE INSTRUCTOR',
        icon: 'icon-presentation',
        number: 150,
        suffix: '+'
    }
];

const CounterUpOne = ( { wrapperClass } ) => {
    return (
        <div className="container">
            <div className={`counterup-style-2 bg-color-primary radius-small ptb--80 ${ wrapperClass ? wrapperClass : '' }`}>
                <div className="row g-5">
                    { funFacts && funFacts.length > 0 &&
                        funFacts.map( ( funfact, i ) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12 line-separator" key={i}>
                            <div className="edu-counterup-2 text-center">
                                <div className="inner">
                                    <div className="icon">
                                        <i className={ funfact.icon }></i>
                                    </div>
                                    <div className="content">
                                        <TrackVisibility once className="counter" tag="h3">
                                            { ( { isVisible } ) => isVisible && 
                                                isVisible ? <CountUp className="eduvibe-counterup-one" end={funfact.number} duration={1.5} delay={.1} start={0} suffix={`${ funfact.suffix ? funfact.suffix : '' }`} /> : ''
                                            }
                                        </TrackVisibility>
                                        <span className="subtitle">{ funfact.title }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ) )
                    }   
                </div>
            </div>
        </div>
    )
}

export default CounterUpOne;