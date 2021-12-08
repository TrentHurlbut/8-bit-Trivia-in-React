import { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';

export default function QuestionsScreen({ category, clickFunction }) {

  const[questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
      .then(response => {
        setQuestions(response.data.results)
        })
  }, [])
  
  return (
    <div className="questions-screen">
      {questions.map((question) => (<QuestionCard text={question.question} clickFunction={clickFunction} correctAnswer={question.correct_answer} answers={question.incorrect_answers} />))}
    </div>
  )
}