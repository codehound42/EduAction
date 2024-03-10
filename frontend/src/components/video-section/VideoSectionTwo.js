import React, { useContext, useState } from "react";
import FsLightbox from "fslightbox-react";
import ScrollAnimation from "react-animate-on-scroll";
import SectionTitle from "../sectionTitle/SectionTitle";
import { FaPlay } from "react-icons/fa";
import { Accordion, useAccordionButton } from "react-bootstrap";
import AccordionContext from "react-bootstrap/AccordionContext";

const accordionItems = [
  {
    id: 1,
    title: "How does EduAction improves my study?",
    body: "Learning aids help you understand better and memorize more:  Breaking down complex information into smaller, manageable chunks making it easier for your brain to process and remember. Some people learn better through visuals, so incorporating images or diagrams can enhance understanding. PLUS the interactive nature of flashcards & quizzes keeps you engaged in the learning process. Regular engagement helps prevent boredom and keeps your brain actively involved, which is crucial for effective learning and retention.",
  },
  {
    id: 2,
    title: "is there a limit to the lecture length?",
    body: "2 hours is around the limit [at this time] that we reliably support. We hope in the future to add longer videos, but at the moment we recommend lectures that are below 120 minutes.",
  },
  {
    id: 3,
    title: "Can I use your tool... more than once?",
    body: "Absolutely! Feel free to use EduAction as much as you need. Repetition is one of the most important thing, when studying.",
  },
  {
    id: 4,
    title: "Can I save the Education aids I create?",
    body: "Today you can share the link to our tool. In the future, we aim to add a feature that you can share your quiz/flashcard/etc to your classmates or study team.",
  },
  {
    id: 5,
    title: "Does Focus offer integration with other software tools?",
    body: "NOT for now, but were aiming to add this feature at the future.",
  },
];

const CustomToggle = ({ children, eventKey }) => {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(eventKey);
  const isCurrentEventKey = activeEventKey === eventKey;
  return (
    <button
      type="button"
      onClick={decoratedOnClick}
      aria-expanded={isCurrentEventKey ? true : false}
      className="edu-accordion-button"
    >
      {children}
    </button>
  );
};

const VideoSectionTwo = () => {
  const [activeId, setActiveId] = useState("0");
  function toggleActive(id) {
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

            <div className="col-lg-12">
                <SectionTitle
                    classes = "text-center mb--40"
                    slogan = ""
                    title = "Frequently Asked Questions"
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
                <div className="text-center mt--50">
                Can’t find the answer you’re looking for? Reach out to us in the email below.
                </div>
            </div>
        </div>

        <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-11-04.png" alt="Shape Thumb" />
            </div>
            <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-25-01.png" alt="Shape Thumb" />
            </div>
        </div>
    </div>
</div>
  );
};

export default VideoSectionTwo;
