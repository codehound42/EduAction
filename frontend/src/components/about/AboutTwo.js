import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import SectionTitle from '../sectionTitle/SectionTitle';

const accordionItems = [
    {
        id: 1,
        title: 'What does it take become an author?',
        body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.'
    },
    {
        id: 2,
        title: 'How to Change my Password easily?',
        body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.'
    },
    {
        id: 3,
        title: 'How to Change my Plan using PayPal?',
        body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.'
    },
    {
        id: 4,
        title: 'How long it take to create a video course?',
        body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress LMS plugin you go with, but in general.'
    }
]

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const AboutTwo = () => {
    const [activeId, setActiveId] = useState( '0' );
    function toggleActive( id ) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }

    return (
        <div className="edu-accordion-area eduvibe-home-three-accordion accordion-shape-1 edu-section-gap bg-color-white">
            <div className="container eduvibe-animated-shape">
                <div className="row g-5">
                    <div className="col-lg-6 gallery-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="thumbnail">
                                    <img className="radius-small w-100" src="/images/about/about-02/accordion-gallery-01.jpg" alt="About Thumb 1" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 mt--35 mt_sm--15">
                                <div className="thumbnail">
                                    <img className="radius-small w-100" src="/images/about/about-02/accordion-gallery-02.jpg" alt="About Thumb 2" />
                                </div>
                                <div className="thumbnail mt--15">
                                    <img className="radius-small w-100" src="/images/about/about-02/accordion-gallery-03.jpg" alt="About Thumb 3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <SectionTitle
                            classes = "text-start mb--40"
                            slogan = "About Us"
                            title = "Get Every General Answers From Here"
                        />
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            className="accordion-style-1"
                            animateOnce={ true }
                        >
                            <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                {
                                    accordionItems.map( ( accordion, i ) => (
                                        <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'active-item' : ''}`}>
                                            <div className="edu-accordion-header">
                                                <CustomToggle eventKey={ i.toString() }>{ accordion.title }</CustomToggle>
                                            </div>
                                            <Accordion.Body bsPrefix="edu-accordion-body">{ accordion.body }</Accordion.Body>
                                        </Accordion.Item>
                                    ) )
                                }
                            </Accordion>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape shape-1">
                        <span className="shape-dot"></span>
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-11-04.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-3">
                        <img src="/images/shapes/shape-25-01.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;