import React from 'react';
import Slider from 'react-slick';
import { TestimonialOneParams } from '../../utils/script';

let data = [
    {
        name: "Geraldine D. Anspach",
        details: "It is distracted by the readable content of page when looking at its layout. The point of using Ipsum is that it normal make for distribution of letters, as opposed to using content here it look like readable English Gravida orci vitae at aliquam.",
        designation: "SEO Expert",
        image: "client-01.png"
    },
    {
        name: "Lorraine D. Raines",
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo perferendis accusantium ab temporibus possimus vel atque doloribus at voluptatum sapiente consectetur, explicabo dicta libero architecto beatae vitae voluptatibus corporis esse.",
        designation: "WordPress Expert",
        image: "client-02.png"
    },
    {
        name: "David M. Bard",
        details: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus.",
        designation: "JavaScript Developer",
        image: "client-03.png"
    },
    {
        name: "Julia H. Smith",
        details: "The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin. In particular, the garbled words of lorem ipsum bear an unmistakable resemblance.",
        designation: "Laravel Developer",
        image: "client-04.png"
    },
];

const TestimonialOne = ( props ) => {
    const classes = `testimonial-activation testimonial-style-1 edu-slick-button slick-button-left ${props.className ? props.className : '' }`;
    data = props.item ? data.slice( 0, props.item ) : data;
    return (
        <Slider 
            className={ classes }
            { ...TestimonialOneParams }
        >
            { data.map( ( item, i ) => (
                <div className="single-testimonial" key={ i }>
                    <div className="inner">
                        { props.quoteIcon !== 'disable' && 
                            <div className="quote-sign">
                                <img src="/images/testimonial/testimonial-01/quote.png" alt="Quote Images" />
                            </div>
                        }
                        <p className="description">“ { item.details }”</p>
                        <div className="client-information">
                            <div className="thumb">
                                <img src={`${process.env.PUBLIC_URL}/images/testimonial/testimonial-01/${item.image}`} alt="Client Thumb" />
                            </div>
                            <div className="info">
                                <h5 className="title">{ item.name }</h5>
                                <span className="designation">{ item.designation }</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) ) }
        </Slider>
    );
}
export default TestimonialOne;