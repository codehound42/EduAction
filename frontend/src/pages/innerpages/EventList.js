import React, { useState, useEffect, useRef } from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import loadinggif from "../../assets/images/loading.gif";
import robotarm from "../../assets/images/robotarm.svg";
import final from "../../assets/images/final.svg";
import { FlashcardArray } from "react-quizlet-flashcard";
import summarywhiteicon from "../../assets/images/summarywhiteicon.svg"
import summaryblueicon from "../../assets/images/summaryblueicon.svg"
import originalIcon from "../../assets/images/original.svg"
import whiteIcon from "../../assets/images/white.svg"
import quizwhiteicon from "../../assets/images/quizwhiteicon.svg"
import quizblueicon from "../../assets/images/quizblueicon.svg"
import flashcardwhiteicon from "../../assets/images/flashcardwhiteicon.svg"
import flashcardblueicon from "../../assets/images/flashcardblueicon.svg"


const EventList = () => {
  const [state, setState] = useState({
    youtubeLink: "",
    apiData: {
      summary: {},
      subjects: {},
      quizzes: {},
      transcript: "",
      flashcards: {},
    },
    isLoading: false,
    selectedText: "",
    selectedText2: "",
    showStepThree: false,
    showStepFour: false,
    showStepCooking: false,
    evaluationResults: {},
    user_id: "94bd2faf-d21b-452d-a9a2-0159363a11fd",
    summarySelected: true,
    subjectsSelected: false,
    quizzesSelected: true,
    flashcardSelected: false,
    textSource: "quizzes",
  });
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const stepTwoRef = useRef(null);
  const stepThreeRef = useRef(null);
  const stepFourRef = useRef(null);
  const stepCookingRef = useRef(null);
  const [icon, setIcon] = useState(originalIcon); // Start with the original icon

  const toggleIconColor = () => {
    setIcon(icon === originalIcon ? whiteIcon : originalIcon);
  };

  const handleClick = () => {
    handleSubjectsClick();
    toggleIconColor();
  };

  const handleButtonClick = (text) => {

    setState(prevState => ({
      ...prevState,
      summarySelected: true,
      subjectsSelected: false,
      selectedText: text,
    }));
    setIcon(state.subjectsSelected ? whiteIcon : originalIcon); // If subjects was selected, now we set to white, otherwise to original

  };

  useEffect(() => {
    if (state.apiData.summary.data) {
      setState((prevState) => ({
        ...prevState,
        selectedText: state.apiData.summary.data,
      }));
    }
  }, [state.apiData.summary.data]);

  useEffect(() => {
    if (state.apiData.summary.data && stepTwoRef.current) {
      stepTwoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state.apiData.summary.data]);

  useEffect(() => {
    if (state.showStepCooking && stepCookingRef.current) {
      stepCookingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [state.showStepCooking]);

  const fetchData = async (endpoint, body) => {
    try {
      const response = await fetch(`http://localhost:8000/api/${endpoint}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
    } catch (error) {
      console.error("Error:", error);
      setState((prevState) => ({ ...prevState, isLoading: false }));
      throw error; // Rethrow to handle in caller
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
      showStepCooking: true,
    }));

    try {
      const transcriptDataPromise = fetchData("yt_link", {
        url: state.youtubeLink,
        user_id: state.user_id,
      });

      // Start all fetch operations concurrently
      const transcriptData = await transcriptDataPromise; // Wait for the transcript data as it's needed for other requests

      const summaryDataPromise = fetchData("summary", {
        transcript: transcriptData,
        user_id: state.user_id,
      });
      const subjectsDataPromise = fetchData("subjects", {
        transcript: transcriptData,
        user_id: state.user_id,
      });

      // Wait for all the other fetch operations to complete
      const [summaryData, subjectsData] =
        await Promise.all([
          summaryDataPromise,
          subjectsDataPromise
        ]);

      setState((prevState) => ({
        ...prevState,
        apiData: {
          ...prevState.apiData,
          transcript: transcriptData,
          summary: summaryData,
          subjects: subjectsData,
        },
        isLoading: false,
      }));

      const quizzesDataPromise = fetchData("quiz", {
        transcript: transcriptData,
        user_id: state.user_id,
      });
      const flashcardDataPromise = fetchData("flashcards", {
        transcript: transcriptData,
        user_id: state.user_id,
      });

      const [quizzesData, flashcardsData] =
        await Promise.all([
          quizzesDataPromise,
          flashcardDataPromise
        ]);

      const adaptedFlashcards = flashcardsData.questions.map((question, i) => ({
        id: i,
        frontHTML: (
          <div style={{ display: "flex", height: "100%" }}>
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 10px",
              }}
            >
              <div className="flashcard-title">
                <h6 style={{ margin: 0 }}>{question}</h6>
              </div>
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={flashcardsData.images[i]}
                alt="Card"
                className="img-thumbnail flashcard-img"
              />
            </div>
          </div>
        ),
        backHTML: (
          <div className="backstyle">
            <div className="backstyle-text">
              <h4>{flashcardsData.answers[i]}</h4>
            </div>
          </div>
        ),
      }));

      setState((prevState) => ({
        ...prevState,
        apiData: {
          ...prevState.apiData,
          transcript: transcriptData,
          summary: summaryData,
          subjects: subjectsData,
          quizzes: { data: quizzesData.data.map((quiz) => JSON.parse(quiz)) },
          flashcards: adaptedFlashcards,
        },
        isLoading: false,
      }));
    } catch (error) {
      // Error handling is already done in fetchData
    }
  };

  const handleGenerateQuizClick = () => {
    setState((prevState) => ({ ...prevState, showStepThree: true, quizzesSelected: true, flashcardSelected: false }));
    setTimeout(() => {
      stepThreeRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleFinalScreen = () => {
    setState((prevState) => ({ ...prevState, showStepFour: true }));
    setTimeout(() => {
      stepFourRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSubjectsClick = () => {
    setState((prevState) => ({
      ...prevState,
      summarySelected: false,
      subjectsSelected: true,
    }));
    const { subjects } = state.apiData;
    // Assuming subjects.data.subjects is always a list of strings based on the updated information
    if (subjects && subjects.data) {
      const subjectsContent = (
        <ul>
          {subjects.data.map((subject, index) => (
            <li key={index}>{subject}</li>
          ))}
        </ul>
      );
      setState((prevState) => ({
        ...prevState,
        selectedText: subjectsContent,
      }));
    } else {
      console.log(
        "Subjects data is not available or not in the expected format:",
        subjects
      );
    }
  };

  // Extract quizzes content creation logic into a reusable function
  const QuizzesContent = ({ quizzesData, showStepThree, selectedAnswers, setSelectedAnswers }) => {
    console.log("quizzesData", quizzesData)
    console.log("selectedAnswers", selectedAnswers)
    let correctAnswersCount = 0;
    quizzesData.forEach((quiz, index) => {
        if (quiz.correct_answer === selectedAnswers[index]) {
            correctAnswersCount += 1;
        }
    });
    return (
      showStepThree && quizzesData && (
        <form onSubmit={(e) => e.preventDefault()}>
          {quizzesData.map((quiz, index) => (
            <div key={index} className="quiz-block">
              <h4 className="question-heading">
                Q{index + 1}: {quiz.question}
              </h4>
              {quiz.answers.map((answer, answerIndex) => (
                <div key={answerIndex}
                >
                  <input
                    type="radio"
                    id={`question-${index}-option-${answerIndex}`}
                    name={`question-${index}`}
                    value={answerIndex}
                    onChange={(e) => setSelectedAnswers(selectedAnswers => ({ ...selectedAnswers, [index]: answerIndex }))}
                    checked={selectedAnswers[index] === answerIndex}
                  />
                  <label htmlFor={`question-${index}-option-${answerIndex}`}>
                    {answer} {selectedAnswers[index] === answerIndex && (quiz.correct_answer === answerIndex ? <span className="answer-flag">✅</span> : <span className="answer-flag">❌</span>)}
                  </label>
                </div>
              ))}
            </div>
          ))}
          <div className="correct-answers-count">
            Correct Answers: {correctAnswersCount}/{quizzesData.length}
          </div>
        </form>
      )
    )
  };

  const handleQuizzesClick = () => {
    const { quizzes } = state.apiData;
    if (quizzes && quizzes.data) {
      setState((prevState) => ({
        ...prevState,
        quizzesSelected: true,
        flashcardSelected: false,
      }));
    } else {
      console.log("Quiz data is not available:", quizzes);
    }
  };

  const CountCorrectAnswers = () => {
    const correctAnswersCount = Object.values(state.evaluationResults).filter(
      (result) => result.isCorrect
    ).length;
    return (
      <div>
        <h3>
          Correct answers: {correctAnswersCount} /{" "}
          {Object.keys(state.apiData.quizzes.data).length}
        </h3>
      </div>
    );
  };

  return (
    <>
      <SEO title="Event List" />
      <Layout>
        <div className="containersteps">
          <h2 className="stepsname">Step 1: Paste your YouTube link</h2>
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
                  value={state.youtubeLink}
                  onChange={(e) =>
                    setState({ ...state, youtubeLink: e.target.value })
                  } // Update the state when input changes
                />
              </div>

              <div className="wrapper2">
                <button type="submit" className="buttons1">
                  Submit
                </button>
              </div>
              <div className="text2">
                <ul>
                  <li className="text2">Make sure it's a Youtube link</li>
                  <li className="text2">Make sure you add https://</li>
                  <li className="text2">Click submit when ready</li>
                </ul>
              </div>
            </div>
          </form>
        </div>

        {state.showStepCooking && (
          <div
            ref={stepCookingRef}
            className="containersteps2 containerstepscooking"
          >
            <div className="text-content">
              <h2 className="stepsname">Congrats!</h2>
              <h5>Your link is now in the "AI oven"</h5>
              <div className="text2">
                <h6 className="text2">What is the AI cooking?</h6>
                <ul>
                  <li className="text2">Transcribing your lecture</li>
                  <li className="text2">Summarising and categorising</li>
                  <li className="text2">Crafting educational items for you</li>
                </ul>
              </div>
              {state.isLoading && (
                <img src={loadinggif} alt="Loading..." className="loading" />
              )}{" "}
              {/* Conditional rendering of loading GIF */}
            </div>
            <img src={robotarm} alt="Cooking..." className="robot-arm" />
          </div>
        )}

        {!state.isLoading && state.apiData.summary.data && (
          <div ref={stepTwoRef} className="containersteps2">
            <h2 className="stepsname">Step 2: Your Initial AI Outcome</h2>
            <div className="button-row">
              <button type="button" className={`buttons1 ${state.summarySelected ? ' ' : 'unselected'}`} onClick={() => handleButtonClick(<div>{state.apiData.summary.data}</div>)}><img src={state.summarySelected ? summarywhiteicon : summaryblueicon} alt="summary" className="button-icon" />Summary</button>
              <button type="button" className={`buttons1 ${state.subjectsSelected ? ' ' : 'unselected'}`} onClick={handleSubjectsClick}><img src={state.subjectsSelected ? whiteIcon : originalIcon} alt="subjects" className="button-icon" />Subjects</button>

            </div>
            {state.selectedText && (
              <div className="text-box">{state.selectedText}</div>
            )}
            <div className="button-row">
              <button
                type="button"
                className="buttons1"
                onClick={handleGenerateQuizClick}
                disabled={!state.apiData.quizzes?.data?.length || !state.apiData.flashcards?.length}
              >
                Next {(!state.apiData.quizzes?.data?.length || !state.apiData.flashcards?.length) && <img src={loadinggif} alt="Loading..." className="loading" />}
              </button>
            </div>
          </div>
        )}
        {state.showStepThree && (
          <div ref={stepThreeRef} className="containersteps3">
            <h2 className="stepsname">
              Step 3: Quizzes! Flashcards! And more!
            </h2>
            <div className="button-row">
              <button
                type="button"
                className={`buttons1 ${state.quizzesSelected ? "" : "unselected"
                  }`}
                onClick={handleQuizzesClick}
              >
                <img src={state.quizzesSelected ? quizwhiteicon : quizblueicon} alt="quizzes" className="button-icon" />
                Quizzes
              </button>
              <button
                type="button"
                className={`buttons1 ${state.flashcardSelected ? "" : "unselected"
                  }`}
                onClick={() => {
                  setState((prevState) => ({
                    ...prevState,
                    flashcardSelected: true,
                    quizzesSelected: false,
                  }));
                }}
              >
                <img
                  src={state.flashcardSelected ? flashcardwhiteicon : flashcardblueicon}
                  alt="flashcards"
                  className="button-icon"
                />
                Flashcards
              </button>
            </div>
            <div className={state.flashcardSelected ? "text-box2" : "text-box"}>
              {state.quizzesSelected
                ? <QuizzesContent quizzesData={state.apiData.quizzes.data} showStepThree={state.showStepThree} selectedAnswers={selectedAnswers} setSelectedAnswers={setSelectedAnswers} />
                : <FlashcardArray
                  cards={state.apiData.flashcards}
                  frontCardStyle={{ padding: 20 }}
                  backCardStyle={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                    height: "100%", // Set a specific height if necessary
                    width: "100%",
                  }}
                  FlashcardArrayStyle={{ textAlign: "center" }}
                />}
            </div>
            <div className="button-row">
              <button
                type="button"
                className="buttons1"
                onClick={handleFinalScreen}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {state.showStepFour && (
          <div
            ref={stepFourRef}
            className="containersteps2 containerstepscooking"
          >
            <div className="text-content">
              <h2 className="stepsname">Enjoy!</h2>
              <h5>Thank you for using our application!</h5>
              <h5>Here is your user ID for saving and sharing your flashcards and quizzes. Happy Learning!</h5>
              <h5>{state.user_id}</h5>
            </div>
            <img src={final} alt="Thanks!" className="robot-arm" />
          </div>
        )}
      </Layout>
    </>
  );
};

export default EventList;
