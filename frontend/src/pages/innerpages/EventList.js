import React, { useState, useEffect, useRef } from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import loadinggif from '../../assets/images/loading.gif';


const EventList = () => {
    const [youtubeLink, setYoutubeLink] = useState('');
    const [apidatasummary, setApidatasummary] = useState({});
    const [apidatasubjects, setApidatasubjects] = useState({});
    const [apidataquizzes, setApidataquizzes] = useState({});
    const [apidatatranscript, setApiDatatranscript] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const [selectedText2, setSelectedText2] = useState('');
    const stepTwoRef = useRef(null);
    const [showStepThree, setShowStepThree] = useState(false);
    const stepThreeRef = useRef(null);
    const [selectedanswers, setSelectedanswers] = useState({});
    const [evaluationresults, setEvaluationresults] = useState({});
    const [user_id, setUserId] = useState("94bd2faf-d21b-452d-a9a2-0159363a11fd");


    const handleButtonClick = (text) => {
        setSelectedText(text);
        setSelectedText2(text);
    };

    useEffect(() => {
        if (apidatasummary.data) {
            setSelectedText(apidatasummary.data); // Update when apidatasummary is set
        }
    }, [apidatasummary.data]);

    // This function will be called when the form is submitted
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submit action
        setIsLoading(true);
        fetch('http://localhost:8000/api/yt_link/', { // Replace with your actual endpoint
            // mode: 'cors',
            method: 'POST', // POST
            headers: {
                'Content-Type': 'application/json', // Indicate that you're sending JSON data
            },
            body: JSON.stringify({url: youtubeLink, user_id})
        })
            .then(response => response.json())
            .then(data => {
                setApiDatatranscript(data);
                // Handle the API response data here

                // console.log(apidatatranscript);


                fetch('http://localhost:8000/api/summary/', { // Replace with your actual endpoint
                    // mode: 'cors',
                    method: 'POST', // POST
                    headers: {
                        'Content-Type': 'application/json', // Indicate that you're sending JSON data
                    },
                    body: JSON.stringify({transcript: data, user_id})
                })
                    .then(response => response.json())
                    .then(summary => {
                        setApidatasummary(summary);
                        // Handle the API response data here
                        // console.log({summary});
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        setIsLoading(false);
                    });

                fetch('http://localhost:8000/api/subjects/', { // Replace with your actual endpoint
                    // mode: 'cors',
                    method: 'POST', // POST
                    headers: {
                        'Content-Type': 'application/json', // Indicate that you're sending JSON data
                    },
                    body: JSON.stringify({transcript: data, user_id})
                })
                    .then(response => response.json())
                    .then(topicsubjects => {
                        // console.log({topicsubjects})
                        setApidatasubjects(topicsubjects);
                        // Handle the API response data here
                        // console.log(topicsubjects);

                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        setIsLoading(false);
                    });

                fetch('http://localhost:8000/api/quiz/', { // Replace with your actual endpoint
                    // mode: 'cors',
                    method: 'POST', // POST
                    headers: {
                        'Content-Type': 'application/json', // Indicate that you're sending JSON data
                    },
                    body: JSON.stringify({transcript: data, user_id})
                })
                    .then(response => response.json())
                    .then(quizzes => {
                        // console.log({topicsubjects})
                        setApidataquizzes(quizzes);
                        // Handle the API response data here
                        // console.log(topicsubjects);

                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        setIsLoading(false);
                    });



            })
            .catch((error) => {
                console.error('Error:', error);
                setIsLoading(false);
            });
    };


    useEffect(() => {
        if (apidatasummary.data && stepTwoRef.current) {
            stepTwoRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [apidatasummary.data]);

    const handleGenerateQuizClick = () => {
        setShowStepThree(true); // Show Step 3 when Generate Quiz is clicked
        // Optional: Automatically scroll to Step 3
        setTimeout(() => {
            stepThreeRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const handleSubjectsClick = () => {
        if (apidatasubjects && apidatasubjects.data && apidatasubjects.data.subjects) {
            let subjectsArray;
            if (Array.isArray(apidatasubjects.data.subjects)) {
                subjectsArray = apidatasubjects.data.subjects; // Use directly if already an array
            } else if (typeof apidatasubjects.data.subjects === 'string') {
                subjectsArray = apidatasubjects.data.subjects.split(', '); // Split if it's a string
            } else {
                console.error('Subjects are neither an array nor a string:', apidatasubjects.data.subjects);
                return; // Early return if the subjects are neither an array nor a string
            }
            setSelectedText(
                <ul>
                    {subjectsArray.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            );
        } else {
            console.log('Subjects data is not available:', apidatasubjects);
        }
    };

    const handleQuizzesClick = () => {
        if (apidataquizzes && apidataquizzes.data && apidataquizzes.data.question_and_answers) {
            const quizzesContent = (
                <form onSubmit={(e) => e.preventDefault()}>
                    {apidataquizzes.data.question_and_answers.map((quiz, index) => (
                        <div key={index} className="quiz-block">
                            <h4>Q{index + 1}: {quiz.question}</h4>
                            {quiz.answers.map((answer, answerIndex) => (
                                <div key={answerIndex}>
                                    <input
                                        type="radio"
                                        id={`question-${index}-option-${answerIndex}`}
                                        name={`question-${index}`}
                                        value={answer}
                                        correct={quiz.correct_answer}
                                        onChange={(e) => handleAnswerChange(e, index, quiz.correct_answer, answerIndex)}
                                    />
                                    <label htmlFor={`question-${index}-option-${answerIndex}`}>{answer}</label>
                                </div>
                            ))}

                            {evaluationresults[index] !== undefined && (
                                <span>
                                    {console.log('Feedback for question ' + index + ':', evaluationresults[index])}
                                    {evaluationresults[index] && evaluationresults[index].correctAnswer ==  evaluationresults[index].answerIndex ? "✅ Correct" : "❌ Incorrect"}
                                </span>
                            )}

                        </div>
                    ))}
               </form>
            );
            setSelectedText2(quizzesContent);
        } else {
            console.log('Quiz data is not available:', apidataquizzes);
        }
    };

    const handleAnswerChange = (event, questionIndex, correctAnswer, answerIndex) => {
        console.log('Before', evaluationresults);
        const selectedAnswer = event.target.value;
        console.log('Selected Answer:', selectedAnswer); // Debug
        console.log('Correct Answer:', correctAnswer); // Debug
        // setSelectedanswers(prevSelectedanswers => ({
        //     ...prevSelectedanswers,
        //     [questionIndex]: selectedAnswer
        // }));

        // // Immediately evaluate the answer
        // setEvaluationresults(prevEvaluationResults => ({
        //     ...prevEvaluationResults,
        //     [questionIndex]: selectedAnswer === correctAnswer
        // }));
        // console.log('Selected Answers State:', selectedanswers); // Debug
        // console.log('Evaluation Results State:', evaluationresults); // Debug

        // BASEM
        const temp = evaluationresults;
        temp[questionIndex] = {correctAnswer, answerIndex};
        setEvaluationresults(temp);
        console.log({temp, evaluationresults});
    };


    return (
        <>
            <SEO title="Event List" />
            <Layout>
                <div className="containersteps">
                    <h2 className="stepsname">Step 1: Upload your YouTube link</h2>
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
                                    value={youtubeLink}
                                    onChange={e => setYoutubeLink(e.target.value)} // Update the state when input changes
                                />
                            </div>
                            <div className="wrapper2">
                                <button type="submit" className="buttons1">Submit</button>
                                {isLoading && <img src={loadinggif} alt="Loading..." className="loading" />} {/* Conditional rendering of loading GIF */}
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


                {!isLoading && apidatasummary.data && <div ref={stepTwoRef} className="containersteps2">
                    <h2 className="stepsname">Step 2: Your AI Outcome</h2>
                    <div className="button-row">
                        <button type="button" className="buttons1" onClick={() => handleButtonClick(<div>{apidatasummary.data}</div>)}>Summary</button>
                        <button type="button" className="buttons1" onClick={handleSubjectsClick}>Subjects</button>
                    </div>
                    {selectedText && <div className="text-box">{selectedText}</div>}
                    <div className="button-row">
                        <button type="button" className="buttons1" onClick={handleGenerateQuizClick}>Generate quiz</button>
                    </div>
                </div>}
                {showStepThree && (
                    <div ref={stepThreeRef} className="containersteps3">
                        <h2 className="stepsname">Step 3: Quizzes! Flashcards! And more!</h2>
                        <div className="button-row">
                            <button type="button" className="buttons1" onClick={handleQuizzesClick}>Quizzes</button>

                            <button type="button" className="buttons1" onClick={() => handleButtonClick('Text for Button 2')}>Flashcards</button>
                        </div>
                        {selectedText2 && <div className="text-box">{selectedText2}</div>}
                    </div>
                )}

{/* {JSON.stringify(evaluationresults)}
                    {evaluationresults && Object.keys(evaluationresults).length && (<div>Hi Man</div>)} */}

            </Layout>
        </>
    )
}

export default EventList;