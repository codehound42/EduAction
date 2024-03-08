import React, { useState, useContext } from 'react';
import { Accordion } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import AccordionContext from 'react-bootstrap/AccordionContext';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../common/breadcrumb/BreadcrumbOne';
 
const faqCategories = [
    {
        id: 1,
        slug: 'online-education',
        label: 'Online Education'
    },
    {
        id: 2,
        slug: 'payment-method',
        label: 'Payment Method'
    },
    {
        id: 3,
        slug: 'pricing-plan',
        label: 'Pricing Plan'
    }
];

const onlineEducation = {
    leftColumn: [
        {
            id: 1,
            title: 'Am I eligible for admission?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 2,
            title: 'How long is my personal free trial?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 3,
            title: 'Is There Any One To One Support System?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 4,
            title: 'Is There Any Prerequisites To Learn Python?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        }
    ],
    rightColumn: [
        {
            id: 1,
            title: 'How to Change my Plan using PayPal?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 2,
            title: 'How long it take to create a video course?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 3,
            title: 'How do I redeem a coupon?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 4,
            title: 'What does it take become an author?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        }
    ]
}

const paymentMethod = {
    leftColumn: [
        {
            id: 1,
            title: 'Is There Any One To One Support System?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 2,
            title: 'Do You Provide Career Guideline?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 3,
            title: 'How do I redeem a coupon?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 4,
            title: 'How do I get a refund?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        }
    ],
    rightColumn: [
        {
            id: 1,
            title: 'How do I get a refund?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 2,
            title: 'How do I redeem a coupon?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 3,
            title: 'How to Change my Plan using PayPal?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 4,
            title: 'Is There Any Prerequisites To Learn Python?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        }
    ]
}

const pricingPlan = {
    leftColumn: [
        {
            id: 1,
            title: 'Is There Any Prerequisites To Learn Python?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 2,
            title: 'How do I redeem a coupon?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 3,
            title: 'How to Change my Plan using PayPal?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 4,
            title: 'How do I get a refund?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        }
    ],
    rightColumn: [
        {
            id: 1,
            title: 'Do You Provide Career Guideline?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 2,
            title: 'How long it take to create a video course?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 3,
            title: 'Am I eligible for admission?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        },
        {
            id: 4,
            title: 'How long is my personal free trial?',
            body: 'Learning management system, combines a wide range of features to present a class setting without having the students come into a physical classroom. It all depends on the WordPress plugin you go with, but in general.'
        }
    ]
}
        
const CustomToggle = ({ children, eventKey }) => {
    const { activeEventKey } = useContext( AccordionContext );
    const decoratedOnClick = useAccordionButton( eventKey );
    const isCurrentEventKey = activeEventKey === eventKey;
    return <button type="button" onClick={ decoratedOnClick } aria-expanded={ isCurrentEventKey ? true : false } className="edu-accordion-button">{ children }</button>
}

const Faq = ( { wrapperClass } ) => {
    const [selectedItem, setSelectedItem] = useState( 'online-education' );
    const [activeId1, setActiveId1] = useState( '0' );
    const [activeId2, setActiveId2] = useState( '0' );
    const [activeId3, setActiveId3] = useState( '0' );
    const [activeId4, setActiveId4] = useState( '0' );
    const [activeId5, setActiveId5] = useState( '0' );
    const [activeId6, setActiveId6] = useState( '0' );

    function toggleActive1( id ) {
        if (activeId1 === id) {
            setActiveId1(null);
        } else {
            setActiveId1(id);
        }
    }
    function toggleActive2( id ) {
        if (activeId2 === id) {
            setActiveId2(null);
        } else {
            setActiveId2(id);
        }
    }
    function toggleActive3( id ) {
        if (activeId3 === id) {
            setActiveId3(null);
        } else {
            setActiveId3(id);
        }
    }
    function toggleActive4( id ) {
        if (activeId4 === id) {
            setActiveId4(null);
        } else {
            setActiveId4(id);
        }
    }
    function toggleActive5( id ) {
        if (activeId5 === id) {
            setActiveId5(null);
        } else {
            setActiveId5(id);
        }
    }
    function toggleActive6( id ) {
        if (activeId6 === id) {
            setActiveId6(null);
        } else {
            setActiveId6(id);
        }
    }

    return (
        <>
            <SEO title="Frequently Asked Questions" />
            <Layout>
                <BreadcrumbOne 
                    title="Frequently Asked Questions"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="FAQ"
                />
                <div className={ `edu-accordion-area accordion-shape-1 edu-section-gap bg-color-white ${ wrapperClass ? wrapperClass : '' } ` }>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <span className="pre-title">FaQ Questions</span>
                                    <h3 className="title">Get Every General Answers <br /> From Here</h3>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="edu-tab-nav nav nav-tabs mt--40">
                                    {
                                        faqCategories.map( ( button ) => (
                                            <li className="nav-item" key={ button.id }>
                                                <button
                                                    className={ button.slug === selectedItem ? 'nav-link active' : 'nav-link'}
                                                    type="button"
                                                    aria-label={button.label}
                                                    onClick={ () => setSelectedItem( button.slug ) }
                                                >
                                                    { button.label }
                                                </button>
                                            </li>
                                        ) )
                                    }
                                </ul>
                            </div>
                        </div>
                        { selectedItem === 'online-education' && 
                            <div className="row g-5 align-items-center mt--20">
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                onlineEducation.leftColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive1(i.toString())} bsPrefix={`edu-accordion-item ${activeId1 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                onlineEducation.rightColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive2(i.toString())} bsPrefix={`edu-accordion-item ${activeId2 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        }

                        { selectedItem === 'payment-method' && 
                            <div className="row g-5 align-items-center mt--20">
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                paymentMethod.leftColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive3(i.toString())} bsPrefix={`edu-accordion-item ${activeId3 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                paymentMethod.rightColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive4(i.toString())} bsPrefix={`edu-accordion-item ${activeId4 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        }

                        { selectedItem === 'pricing-plan' && 
                            <div className="row g-5 align-items-center mt--20">
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                pricingPlan.leftColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive5(i.toString())} bsPrefix={`edu-accordion-item ${activeId5 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="accordion-style-1">
                                        <Accordion bsPrefix="edu-accordion" defaultActiveKey="0" flush>
                                            {
                                                pricingPlan.rightColumn.map( ( accordion, i ) => (
                                                    <Accordion.Item eventKey={i.toString()} key={i} onClick={() => toggleActive6(i.toString())} bsPrefix={`edu-accordion-item ${activeId6 === i.toString() ? 'active-item' : ''}`}>
                                                        <div className="edu-accordion-header">
                                                            <CustomToggle eventKey={i.toString()}>{accordion.title}</CustomToggle>
                                                        </div>
                                                        <Accordion.Body bsPrefix="edu-accordion-body">{accordion.body}</Accordion.Body>
                                                    </Accordion.Item>
                                                ) )
                                            }
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Faq;