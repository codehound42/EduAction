import React, { useState } from 'react';
import Slider from 'react-slick';
import { TestimonialTwoParams } from '../../utils/script';
import { TestimonialTwoThumDots } from '../../utils/script';

const data = [
    {
        name: "Geraldine D. Anspach",
        details: "It is distracted by the readable content of page when looking at its layout. The point of using Ipsum is that it normal make for distribution of letters, as opposed to using content here it look like readable English.",
        designation: "SEO Expert",
        image: "client-01.png"
    },
    {
        name: "Lorraine D. Raines",
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque blanditiis soluta alias fugit? Odit vel pariatur optio sapiente maiores tempora sed ab ipsa excepturi assumenda quos dicta quis quod obcaecati vitae.",
        designation: "WordPress Expert",
        image: "client-02.png"
    },
    {
        name: "David M. Bard",
        details: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled.",
        designation: "JavaScript Developer",
        image: "client-03.png"
    },
    {
        name: "Julia H. Smith",
        details: "The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. In particular, the garbled words of lorem ipsum.",
        designation: "Laravel Developer",
        image: "client-04.png"
    },
]

const TestimonialTwo = ( { classes } ) => {
    const [testimonialNav, setTestimonialNav] = useState();
    const [testimonialThumb, setTestimonialThumb] = useState();

    return (
        <div className={ classes }>
            <Slider className="testimonial-nav-activation"
                asNavFor={ testimonialThumb } 
                ref={ ( slider1 ) => setTestimonialNav( slider1 ) }
                { ...TestimonialTwoParams }
            >
                { data.map( ( item, i ) => (
                    <div className="testimonial-nav-content" key={ i }>
                        <p className="description">“ { item.details }”</p>
                        <div className="client-info">
                            <h6 className="title">{ item.name }</h6>
                            <span className="designation">{ item.designation }</span>
                        </div>
                    </div>
                ) ) }
            </Slider>

            <div className="testimonial-nav-wrapper">
                <Slider className="testimonial-nav-button" 
                    { ...TestimonialTwoThumDots }
                    asNavFor={ testimonialNav }
                    ref={ ( slider2 ) => setTestimonialThumb( slider2 ) }
                >
                    { data.map( ( item, i ) => (
                        <div className="single-thumbnail" key={ i }>
                            <img src={`${process.env.PUBLIC_URL}./images/testimonial/testimonial-02/${item.image}`} alt="Client Thumb" />
                            <div className="loader-container">
                                <div className="circle-loader-wrap">
                                    <div className="left-wrap">
                                        <div className="loader"></div>
                                    </div>
                                    <div className="right-wrap">
                                        <div className="loader"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) ) }
                </Slider>
            </div>
        </div>
    );
}
export default TestimonialTwo;