import QuestionTimer from "./QuestionTimer";
import { useState } from "react";
import Answers from "./Answers";
import QUESTIONS from "../questions.js";
export default function Question({
    
    k,
    onSelectAnswer,  
    onSkipAnswer
    }){
    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(() =>{
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[k].answers[0] === answer
            })

            setTimeout(() =>{
                onSelectAnswer(answer);
            },2000)
        }, 1000)
        
    }
    const [answer,setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });
    let  answerState = '';
    if(answer.selectedAnswer){
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }
    return(
        <div id="question">
        <QuestionTimer timeout={10000} 
        onTimeout={onSkipAnswer}/>
        <h2>{QUESTIONS[k].text}</h2>
        <Answers 
        
        answers={QUESTIONS[k].answers } 
            selectedAnswer={answer.selectedAnswer}
            answerState={answerState}
            onSelect={handleSelectAnswer}
        />
    </div>
    );
}