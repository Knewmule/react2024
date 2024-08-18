import { react, useState,useCallback,useRef } from 'react';
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png';
import Question from './Question.jsx';
export default function Quiz() {
    
    const [answerState,setAnswerState] = useState('');
    const [userAnswers, setUserAnswer] = useState([]);
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length -1;
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        setAnswerState('answered');
        setUserAnswer((prevUserAnswer) => {
            return[...prevUserAnswer, selectedAnswer];
        });

        setTimeout(() =>{
            if(selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]){
                setAnswerState('correct');
            }else{
                setAnswerState('wrong');
            }
            setTimeout(() =>{
                setAnswerState('');
            },2000)
        },1000)
    },[activeQuestionIndex]);
    const handleSkipAnswer = useCallback(() =>handleSelectAnswer(null), [handleSelectAnswer]);
    if (quizIsComplete){
        return <div id="summary">
            <img src={quizCompleteImg} alt="Trphy Quiz"/>
            <h2>Quiz Completed!</h2>
        </div>
    }
    

// We can use the keyi prop to force react to reload and destroy the component
    return <div id="quiz" >
        <Question 
        key={activeQuestionIndex}
        questionText={QUESTIONS[activeQuestionIndex].text}
            answers={QUESTIONS[activeQuestionIndex].answers}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            selectedAnswer={userAnswers[userAnswers.length -1] }
            answerState={answerState}
        />
    </div>
}