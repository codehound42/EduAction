import React from 'react';
import Slider from 'react-slick';
import { TestimonialFourParams } from '../../utils/script';

const data = [
    {
        name: "Tina K. Leflore",
        details: "There are many variations of passages of Lorem Ipsum available, but the majority on have suffered alteration in some form, by a injected humour, or randomised.",
        designation: "SEO Expert",
        image: "client-01.png",
        rating: 5
    },
    {
        name: "Kevin G. Curry",
        details: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis par.",
        designation: "Web Developer",
        image: "client-02.png",
        rating: 5
    },
    {
        name: "David M. Bard",
        details: "Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet dictum felis eu pede mollis pretium.",
        designation: "Content Writer",
        image: "client-03.png",
        rating: 5
    },
    {
        name: "Julia H. Smith",
        details: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapib lorem ante.",
        designation: "Shopify Expert",
        image: "client-04.png",
        rating: 5
    },
    {
        name: "Jeffery C. Meyer",
        details: "Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget fringilla mauris.",
        designation: "WordPress Expert",
        image: "client-05.png",
        rating: 5
    },
    {
        name: "Robert E. Carter",
        details: "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat tellus ullamcorper ultricies.",
        designation: "SEO Expert",
        image: "client-06.png",
        rating: 5
    },
    {
        name: "Emily G. Harper",
        details: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla amet adipiscing sem neque.",
        designation: "Digital Marketer",
        image: "client-07.png",
        rating: 5
    }
];

const TestimonialFour = ( props ) => {
    const classes = `eduvibe-testimonial-four edu-testimonial-activation testimonial-item-3 mt--40 edu-slick-button ${props.className ? props.className : '' }`;
    return (
        <Slider
            className={classes}
            { ...TestimonialFourParams }
        >
            { data.map( ( item, i ) => (
                <div className="testimonial-card-box" key={ i }>
                    <div className="inner">
                        <div className="client-info">
                            <div className="thumbnail">
                                <img src={`${process.env.PUBLIC_URL}/images/testimonial/testimonial-04/${item.image}`} alt="Client Thumb" />
                            </div>
                            <div className="content">
                                <h6 className="title">{item.name}</h6>
                                <span className="designation">{item.designation}</span>
                            </div>
                        </div>
                        <p className="description">“ {item.details} ”</p>
                        <div className="rating eduvibe-course-rating-stars">
                            {[...Array(5)].map((_, index) => {
                                return <i key={index} className={ index < item.rating ? 'on icon-Star' : 'off icon-Star' }></i>
                            })}
                        </div>
                    </div>
                </div>
            ) ) }
        </Slider>
    )
}

export default TestimonialFour;