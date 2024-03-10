import React from "react";
// import Slider from "react-slick";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";

import InstructorOne from "../../components/instructor/InstructorOne";
import InstructorData from "../../data/instructor/InstructorData.json";

const InstructorPageOne = ({ wrapperClass }) => {
  const TeamMembers = InstructorData.slice(0, 8);

  return (
    <>
      <SEO title="About" />
      <Layout>
        <div className="container about-title-banner">
          <h2 className="title">About</h2>
          <h3 className="h3-non-padding-btm">
            AI Hackathon project - 08-10 March 2024, London.
          </h3>
        </div>

        <div className="edu-elements-area edu-section-gap bg-color-white">
          <div className="container">
            <div className="about-content-wrapper">
              <div className="profilewrapper">
                <div className="row row--20">
                  {TeamMembers.map((item) => (
                    <div
                      className="col-lg-4 col-md-6 col-sm-6 col-12 mt--45"
                      key={item.id}
                    >
                      <InstructorOne data={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="about-image-wrapper">
                <img
                  className="about-image"
                  src="/images/about-page/Group 1000004129.png"
                  alt="people-on-the-boat"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default InstructorPageOne;
