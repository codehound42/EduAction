import React from 'react';
import { Element } from 'react-scroll';
import CategoryThree from '../../components/category/CategoryThree';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const HomeThreeService = () => {
    return (
        <Element
            name="service"
            className="sercice-area eduvibe-service-five service-wrapper-5 edu-section-gap bg-color-white"
        >
            <div className="container eduvibe-animated-shape">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            classes = "text-center"
                            slogan = "Course Categories"
                            title = "Popular Topics To Learn"
                        />
                    </div>
                </div>

                <CategoryThree />

                <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                    <div className="shape-image shape-image-1">
                        <img src="/images/shapes/shape-19-02.png" alt="Shape Thumb" />
                    </div>
                    <div className="shape-image shape-image-2">
                        <img src="/images/shapes/shape-21.png" alt="Shape Thumb" />
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default HomeThreeService;