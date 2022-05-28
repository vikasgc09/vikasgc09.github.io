import React, { useState } from "react";
import questions from "./components/questions";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const nextQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;

    if (next < questions.length) {
      //   console.log(questions.length);
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };
  console.log(score);
  const resetGame = () => {
    setShowScore(false);
    setScore(0);
    setCurrentQuestion(0);
  };

  //   const prevQuestion = () => {
  //     const prev = currentQuestion - 1;
  //     if (prev >= 0) {
  //       setCurrentQuestion(prev);
  //     }
  //   };

  const [showScore, setShowScore] = useState(false);

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <div>
            <button onClick={() => resetGame()}>Start Again</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (questionOption, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => nextQuestion(questionOption.isCorrect)}
                  >
                    {questionOption.answerText}
                  </button>
                );
              }
            )}
          </div>
          <div>
            <button onClick={() => nextQuestion()}>next</button>
            {/* <button onClick={() => prevQuestion()}>Previous</button> */}
          </div>
        </>
      )}
    </div>
  );
}
