import React, { useState, useEffect, useRef } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../../common/breadcrumb/BreadcrumbOne";
import PaginationOne from "../../components/pagination/PaginationOne";
import EventOne from "../../components/event/EventOne";
import EventData from "../../data/event/EventData.json";
import loadinggif from "../../assets/images/loading.gif";
import ReactCardFlip from "react-card-flip";
import { FaSignature } from "react-icons/fa";

const EventList = () => {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [apidatasummary, setApiDatasummary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedText, setSelectedText] = useState("");
  const stepTwoRef = useRef(null);
  const [showStepThree, setShowStepThree] = useState(false);
  const stepThreeRef = useRef(null);
  const [showCardFlip, setShowCardFlip] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleButtonClick = (text) => {
    setSelectedText(text);
  };

  const handleFlipCard = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    if (apidatasummary) {
      setSelectedText(apidatasummary); // Update when apidatasummary is set
    }
  }, [apidatasummary]);

  // This function will be called when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submit action
    setIsLoading(true);
    fetch("http://localhost:8000/api/yt_link/", {
      // Replace with your actual endpoint
      // mode: 'cors',
      method: "POST", // POST

      body: JSON.stringify(youtubeLink),
    })
      .then((response) => response.json())
      .then((data) => {
        setApiDatasummary(data.data);
        // Handle the API response data here
        console.log(apidatasummary);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (apidatasummary && stepTwoRef.current) {
      stepTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [apidatasummary]);

  const handleGenerateQuizClick = () => {
    setShowStepThree(true); // Show Step 3 when Generate Quiz is clicked
    // Optional: Automatically scroll to Step 3
    setTimeout(() => {
      stepThreeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <SEO title="Event List" />
      <Layout>
        <div className="containersteps">
          <h2 className="stepsname">Step 1: Upload your YouTube link</h2>
          <form onSubmit={handleSubmit}>
            {" "}
            {/* Add the onSubmit handler here */}
            <div className="form-group">
              <div className="wrapper2">
                <input
                  type="url"
                  id="youtubelink"
                  className="linkinput form-control form-control-lg"
                  placeholder="Enter YouTube link"
                  pattern="https://.*"
                  required
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)} // Update the state when input changes
                />
              </div>
              <div className="wrapper2">
                <button type="submit" className="buttons1">
                  Submit
                </button>
                {isLoading && (
                  <img src={loadinggif} alt="Loading..." className="loading" />
                )}{" "}
                {/* Conditional rendering of loading GIF */}
              </div>
              <div>
                <h3 className="text2">Pay attention:</h3>
                <h3 className="text3">• Make sure it is a Youtube link</h3>
                <h3 className="text3">• Make sure you add https://</h3>
                <h3 className="text3">• Click submit when ready</h3>
              </div>
            </div>
          </form>
        </div>

        {true && (
          <div ref={stepTwoRef} className="containersteps2">
            <h2 className="stepsname">Step 2: Your AI Outcome</h2>
            <div className="button-row">
              <button
                type="button"
                className="buttons1"
                onClick={() => handleButtonClick(<div>{apidatasummary}</div>)}
              >
                Summary
              </button>
              <button
                type="button"
                className="buttons1"
                onClick={() => handleButtonClick("Text for Button 2")}
              >
                Subjects
              </button>
              <button
                type="button"
                className="buttons1"
                onClick={() => handleButtonClick("Text for Button 3")}
              >
                Repetition
              </button>
              <button
                type="button"
                className="buttons1"
                onClick={() => handleButtonClick("Text for Button 4")}
              >
                Word cloud
              </button>
            </div>
            {selectedText && <div className="text-box">{selectedText}</div>}
            <div className="button-row">
              <button
                type="button"
                className="buttons1"
                onClick={handleGenerateQuizClick}
              >
                Generate quiz
              </button>
            </div>
          </div>
        )}

        <div className="containersteps3">
          <h2 className="stepsname">Step 3: Quizzes! Flashcards! And more!</h2>

          <div className="button-row">
            <button
              type="button"
              className="buttons1"
              onClick={() => handleButtonClick(<div>{apidatasummary}</div>)}
            >
              Quizzes
            </button>
            <button
              type="button"
              className="buttons1"
              onClick={() => handleButtonClick("Text for Button 2")}
            >
              Flashcards
            </button>
            <button
              type="button"
              className="buttons1"
              onClick={() => handleButtonClick("Text for Button 3")}
            >
              Fill in the blanks
            </button>
            <button
              type="button"
              className="buttons1"
              onClick={() => handleButtonClick("Text for Button 4")}
            >
              "Need to remember" list
            </button>
          </div>

          <div class="wrapper-flip-cards">
            <div class="flip-card-unit">
              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div key="front" className="card-front">
                  This is the front of the card.
                  <button className="flipbutton" onClick={handleFlipCard}>
                    Flip
                  </button>
                </div>

                <div key="back" className="card-back">
                  This is the back of the card.
                  <button className="flipbutton" onClick={handleFlipCard}>
                    Flip
                  </button>
                </div>
              </ReactCardFlip>
              <div className="flip-card-image">Image</div>
            </div>
            <div className="flip-card-unit">
              <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div key="front" className="card-front">
                  This is the front of the card.
                  <button className="flipbutton" onClick={handleFlipCard}>
                    Flip
                  </button>
                </div>

                <div key="back" className="card-back">
                  This is the back of the card.
                  <button className="flipbutton" onClick={handleFlipCard}>
                    Flip
                  </button>
                </div>
              </ReactCardFlip>
              <div className="flip-card-image">Image</div>
            </div>

            <button className="flip-button" onClick={handleFlipCard}>
              Flip
            </button>

            <div class="wrapper-flip-cards">
              <div class="flip-card-unit">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                  <div key="front" className="card-front">
                    This is the front of the card.
                  </div>

                  <div key="back" className="card-back">
                    This is the back of the card.
                  </div>
                </ReactCardFlip>
                <div className="flip-card-image">Image</div>
              </div>
              <div className="flip-card-unit">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                  <div key="front" className="card-front">
                    This is the front of the card.
                  </div>

                  <div key="back" className="card-back">
                    This is the back of the card.
                  </div>
                </ReactCardFlip>
                <div className="flip-card-image">Image</div>
              </div>

              <button className="flip-button" onClick={handleFlipCard}>
                {flipButtonText}
              </button>

              <div class="flip-card-unit">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                  <div key="front" className="card-front">
                    This is the front of the card.
                  </div>

                  <div key="back" className="card-back">
                    This is the back of the card.
                  </div>
                </ReactCardFlip>
                <div className="flip-card-image">Image</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EventList;
