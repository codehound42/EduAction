import React, { useState, useEffect, useRef } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import loadinggif from '../../assets/images/loading.gif';
import robotarm from '../../assets/images/robotarm.svg';

const EventList = () => {
    const [state, setState] = useState({
        youtubeLink: '',
        apiData: {
            summary: {},
            subjects: {},
            quizzes: {},
            transcript: '',
        },
        isLoading: false,
        selectedText: '',
        selectedText2: '',
        showStepThree: false,
        showStepCooking: false,
        selectedAnswers: {},
        evaluationResults: {},
        user_id: "94bd2faf-d21b-452d-a9a2-0159363a11fd",
    });
    const stepTwoRef = useRef(null);
    const stepThreeRef = useRef(null);
    const stepCookingRef = useRef(null);

    const handleButtonClick = (text) => {
        setState(prevState => ({ ...prevState, selectedText: text, selectedText2: text }));
    };

    useEffect(() => {
        if (state.apiData.summary.data) {
            setState(prevState => ({ ...prevState, selectedText: state.apiData.summary.data }));
        }
    }, [state.apiData.summary.data]);

    useEffect(() => {
        if (state.apiData.summary.data && stepTwoRef.current) {
            stepTwoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [state.apiData.summary.data]);

    useEffect(() => {
        if (state.apiData.summary.data && stepCookingRef.current) {
            stepCookingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [state.apiData.summary.data]);

    const fetchData = async (endpoint, body) => {
        try {
            const response = await fetch(`http://localhost:8000/api/${endpoint}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            setState(prevState => ({ ...prevState, isLoading: false }));
            throw error; // Rethrow to handle in caller
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setState(prevState => ({ ...prevState, isLoading: true, showStepCooking: true }));

        try {
            const transcriptDataPromise = fetchData('yt_link', { url: state.youtubeLink, user_id: state.user_id });

            // Start all fetch operations concurrently
            const transcriptData = await transcriptDataPromise; // Wait for the transcript data as it's needed for other requests

            const summaryDataPromise = fetchData('summary', { transcript: transcriptData, user_id: state.user_id });
            const subjectsDataPromise = fetchData('subjects', { transcript: transcriptData, user_id: state.user_id });
            const quizzesDataPromise = fetchData('quiz', { transcript: transcriptData, user_id: state.user_id });

            // Wait for all the other fetch operations to complete
            const [summaryData, subjectsData, quizzesData] = await Promise.all([
                summaryDataPromise,
                subjectsDataPromise,
                quizzesDataPromise
            ]);

            // console.log the data
            console.log('Transcript:', transcriptData);
            console.log('Summary:', summaryData);
            console.log('Subjects:', subjectsData);
            console.log('Quizzes:', quizzesData);

            setState(prevState => ({
                ...prevState,
                apiData: {
                    ...prevState.apiData,
                    transcript: transcriptData,
                    summary: summaryData,
                    subjects: subjectsData,
                    quizzes: { data: quizzesData.data.map((quiz) => JSON.parse(quiz)) },
                },
                isLoading: false,
            }));
        } catch (error) {
            // Error handling is already done in fetchData
        }
    };

    const handleGenerateQuizClick = () => {
        handleQuizzesClick();
        setState(prevState => ({ ...prevState, showStepThree: true }));
        setTimeout(() => {
            stepThreeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleSubjectsClick = () => {
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
            setState(prevState => ({ ...prevState, selectedText: subjectsContent }));
        } else {
            console.log('Subjects data is not available or not in the expected format:', subjects);
        }
    };



    // Extract quizzes content creation logic into a reusable function
    const createQuizzesContent = (quizzesData, selectedAnswers, evaluationResults, handleAnswerChange) => {
        return (
            <form onSubmit={(e) => e.preventDefault()}>
                {quizzesData.map((quiz, index) => (
                    <div key={index} className="quiz-block">
                        <h4>Q{index + 1}: {quiz.question}</h4>
                        {quiz.answers.map((answer, answerIndex) => (
                            <div key={answerIndex}>
                                <input
                                    type="radio"
                                    id={`question-${index}-option-${answerIndex}`}
                                    name={`question-${index}`}
                                    value={answer}
                                    onChange={(e) => handleAnswerChange(e, index, parseInt(quiz.correct_answer) === answerIndex, answerIndex)}
                                    checked={selectedAnswers && selectedAnswers[index] === answer}
                                />
                                <label htmlFor={`question-${index}-option-${answerIndex}`}>{answer}</label>
                            </div>
                        ))}
                        {evaluationResults && evaluationResults[index]?.answerIndex !== undefined && (
                            <span>
                                {evaluationResults[index].isCorrect ? "✅ Correct" : "❌ Incorrect"}
                            </span>
                        )}
                    </div>
                ))}
            </form>
        );
    };

    const handleQuizzesClick = () => {
        const { quizzes } = state.apiData;
        if (quizzes && quizzes.data) {
            const quizzesContent = createQuizzesContent(quizzes.data, state.selectedAnswers, state.evaluationResults, handleAnswerChange);
            setState(prevState => ({ ...prevState, selectedText2: quizzesContent }));
        } else {
            console.log('Quiz data is not available:', quizzes);
        }
    };

    const handleAnswerChange = (event, questionIndex, isCorrect, answerIndex) => {
        setState(prevState => {
            const newSelectedAnswers = { ...prevState.selectedAnswers, [questionIndex]: event.target.value };
            const newEvaluationResults = { ...prevState.evaluationResults, [questionIndex]: { isCorrect, answerIndex } };

            const newQuizzesContent = createQuizzesContent(prevState.apiData.quizzes.data, newSelectedAnswers, newEvaluationResults, handleAnswerChange);

            return {
                ...prevState,
                selectedAnswers: newSelectedAnswers,
                evaluationResults: newEvaluationResults,
                selectedText2: newQuizzesContent
            };
        });
    };

    const CountCorrectAnswers = () => {
        const correctAnswersCount = Object.values(state.evaluationResults).filter((result) => result.isCorrect).length;
        return (
            <div>
                <h3>Correct answers: {correctAnswersCount} / {Object.keys(state.apiData.quizzes.data).length}</h3>
            </div>
        );
    }

    return (
        <>
            <SEO title="Event List" />
            <Layout>
                <div className="containersteps">
                    <h2 className="stepsname">Step 1: Paste your YouTube link</h2>
                    <form onSubmit={handleSubmit}> {/* Add the onSubmit handler here */}
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
                                    onChange={e => setState({ ...state, youtubeLink: e.target.value })} // Update the state when input changes
                                />
                            </div>
                            <div className="wrapper2">
                                <button type="submit" className="buttons1">Submit</button>
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

                {state.showStepCooking && (
                    <div ref={stepTwoRef} className="containersteps2 containerstepscooking">
                        <div className="text-content">
                            <h2 className="stepsname">Congrats!</h2>
                            <h5>Your link is now in the "AI oven"</h5>
                            <div className="text2">
                                <h7 className="text2">What is the AI cooking?</h7>
                                <ul>
                                    <li className="text2">Transcribing your lecture</li>
                                    <li className="text2">Summarising and categorising</li>
                                    <li className="text2">Crafting educational items for you</li>
                                </ul>
                            </div>
                            {state.isLoading && <img src={loadinggif} alt="Loading..." className="loading" />} {/* Conditional rendering of loading GIF */}
                        </div>
                        <img src={robotarm} alt="Cooking..." className="robot-arm" />
                    </div>
                )}

                {!state.isLoading && state.apiData.summary.data && (
                    <div ref={stepTwoRef} className="containersteps2">
                        <h2 className="stepsname">Step 2: Your Initial AI Outcome</h2>
                        <div className="button-row">
                            <button type="button" className="buttons1" onClick={() => handleButtonClick(<div>{state.apiData.summary.data}</div>)}>Summary</button>
                            <button type="button" className="buttons1" onClick={handleSubjectsClick}>Subjects</button>
                        </div>
                        {state.selectedText && <div className="text-box">{state.selectedText}</div>}
                        <div className="button-row">
                            <button type="button" className="buttons1" onClick={handleGenerateQuizClick}>Next</button>
                        </div>
                    </div>
                )}
                {state.showStepThree && (
                    <div ref={stepThreeRef} className="containersteps3">
                        <h2 className="stepsname">Step 3: Quizzes! Flashcards! And more!</h2>
                        <div className="button-row">
                            <button type="button" className="buttons1" onClick={handleQuizzesClick}>Quizzes</button>
                            <button type="button" className="buttons1" >Flashcards</button>
                        </div>
                        {state.selectedText2 && <div className="text-box">{state.selectedText2}</div>
                        }
                        <CountCorrectAnswers />
                    </div>
                )}
            </Layout>
        </>
    )
}

export default EventList;