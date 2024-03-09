import React from "react";
import CategoryOne from "../category/CategoryOne";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

const HomeOneCategory = () => {
  return (
    <div className="home-one-cat edu-service-area service-wrapper-1 ">
      <div className="container eduvibe-animated-shape">
        <div className="row">
          <div className="col-lg-4 col-md-4 mt-5">
            <SectionTitle
              classes="text-left"
              slogan=""
              title="<span style='color: #2563EB'>Easy</span> setup"
            />
            <div className="text-start mt-5" style={{ fontSize: 20 }}>
              Just copy paste your YouTube link, and see the magic happens.
            </div>
          </div>
          <div className="col-lg-8 col-md-8">
            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-08.png" alt="" />
              </div>
              <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-04-01.png" alt="" />
              </div>
              <div className="shape-image shape-image-4">
                <img src="/images/shapes/shape-03-02.png" alt="" />
              </div>
            </div>
            <div className="text-right" style={{ textAlign: "right" }}>
              <img src="/images/ai/03.svg" alt="" style={{ maxWidth: 600 }} />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-8">
            <div className="shape-dot-wrapper shape-wrapper d-xl-block d-none">
              <div className="shape-image shape-image-2">
                <img src="/images/shapes/shape-08.png" alt="" />
              </div>
              <div className="shape-image shape-image-3">
                <img src="/images/shapes/shape-04-01.png" alt="" />
              </div>
              <div className="shape-image shape-image-4">
                <img src="/images/shapes/shape-03-02.png" alt="" />
              </div>
            </div>
            <div className="text-left" style={{ textAlign: "left" }}>
              <img src="/images/ai/01.svg" alt="" style={{ maxWidth: 600 }} />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 mt-5 pt-5">
            <SectionTitle
              classes="text-left"
              slogan=""
              title="<span style='color: #2563EB'>Useful</span> learning aids"
            />
            <div className="text-start mt-5" style={{ fontSize: 20 }}>
              <ul>
                <li>Quiz</li>
                <li>Flash cards</li>
                <li>Fill the blanks</li>
                <li>And many more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOneCategory;
