import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Element } from 'react-scroll';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';

const accordionItems = [
    {
        id: 1,
        title: 'What is EduVibe and How it works?',
        body: '<p>Looking for an elegant React template to build your education website that won’t burden your budget? <strong>"EduVibe - Online Learning React Education Template"</strong> is the best way to get started with wonderful animations, creative design patterns, and code that is perfectly responsive and powered by Bootstrap 5. This React template includes 05 different homepage demos that are easy to customize. Currently we\'re working on 3 other homepages. There are 45+ inner pages & tons of designed blocks which are ready to use in every conceivable educational institution.</p>'
    },
    {
        id: 2,
        title: 'How to open a ticket and get customer support?',
        body: '<p>If you already bought <strong>"EduVibe"</strong> then you can open a support ticket at <strong><a href="https://devsvibe.freshdesk.com/" target="_blank">devsvibe.freshdesk.com</a></strong> or you can simply send us an email at <strong><a href="mailto:contact@devsvibe.com" target="_blank">contact@devsvibe.com</a></strong> along with the purchase code. To find the purchase code please follow this <strong><a href="https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-" target="_blank">link</a></strong>. Our support engineers will reply to you within 10 minutes to 8 hours(max).</p>'
    },
    {
        id: 3,
        title: 'I\'ve few presale questions?',
        body: '<p>Sure, you can simply send us an email at <strong><a href="mailto:contact@devsvibe.com" target="_blank">contact@devsvibe.com</a></strong> or you can send us a message at <strong><a href="https://m.me/devsvibe" target="_blank">Facebook Messenger</a></strong>.</p>'
    },
    {
        id: 4,
        title: 'How long I\'ll get update if I purchase your item?',
        body: '<p>If you buy once, then you\'ll get lifetime updates and you don\'t need to spend a penny for any further updates. Whenever we add a feature at <strong>EduVibe</strong>, you\'ll receive all the future updates for free...</p>'
    },
    {
        id: 5,
        title: 'Can I customize EduVibe template as I want?',
        body: '<p>We\'ve designed and coded <strong>EduVibe</strong> considering the maximum customization ability. We believe you can customize it as you want like any other React template. You can also read the in details documentation <strong><a href="https://docs.devsvibe.com/eduvibe-react/index.html" target="_blank">here</a></strong>.</p>'
    },
    {
        id: 6,
        title: 'Can I build a complete education website with this template?',
        body: '<p><strong>EduVibe</strong> is an education template specially designed for building a complete website for distance learning, remote training, online course, motivation, photography, school/kindergarten, college, university, or any kind of educational institution.</p>'
    },
    {
        id: 7,
        title: 'I already bought this template and searching for a developer?',
        body: '<p>We provide custom solution to our clients. If you\'re searching for a developer to customize your template according to your requirements or any other custom work then please feel free to contact with us at <strong><a href="mailto:contact@devsvibe.com" target="_blank">contact@devsvibe.com</a></strong></p>'
    }
];

const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={decoratedOnClick} aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{children}</button>
}

const LandingDemoFAQ = () => {
    const [activeId, setActiveId] = useState( '0' );
    function toggleActive( id ) {
        if (activeId === id) {
            setActiveId(null);
        } else {
            setActiveId(id);
        }
    }
    return (
        <Element
            name="faq"
            className="landing-demo-faq-wrapper edu-accordion-area accordion-shape-1 edu-section-gap bg-color-white"
        >
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" className="pre-section-title text-center" animateOnce={ true }>
                            <span className="color-primary pretitle">Faq question</span>
                            <h3 className="title">Have Any Questions?</h3>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="row g-5 mt--10">
                    <div className="col-xl-8 offset-xl-2">
                        <ScrollAnimation 
                            animateIn="fadeInUp"
                            animateOut="fadeInOut"
                            animateOnce={ true }
                        >
                            <Accordion bsPrefix="landing-demo-faq edu-accordion-02 variation-2 landing-page-accordion" defaultActiveKey="0" flush>
                                {
                                    accordionItems.map( ( accordion, i ) => (
                                        <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive(i.toString())} bsPrefix={`edu-accordion-item ${activeId === i.toString() ? 'bg-active' : ''}`}>
                                            <div className="edu-accordion-header">
                                                <CustomToggle eventKey={ i.toString() }>{ accordion.title }</CustomToggle>
                                            </div>
                                            <Accordion.Body bsPrefix="edu-accordion-body"><div dangerouslySetInnerHTML={{__html: accordion.body}}></div></Accordion.Body>
                                        </Accordion.Item>
                                    ) )
                                }
                            </Accordion>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="shape-wrapper">
                    <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                        <div className="animate-image shape-image-1">
                            <img src="/images/shapes/shape-11-11.png" alt="Shape Thumb" />
                        </div>
                        <div className="animate-image shape-image-2">
                            <img src="/images/shapes/shape-14-01.png" alt="Shape Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default LandingDemoFAQ;