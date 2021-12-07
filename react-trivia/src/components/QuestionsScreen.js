import { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionButton from './QuestionButton';

export default function QuestionsScreen({ category, clickFunction }) {

  const[questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
      .then(response => {
        setQuestions(response.data.results.map(dataObj => dataObj.question))
        })
  }, [])
  
  return (
    <div className="questions-screen">
      {questions.map((question) => (<QuestionButton text={question} clickFunction={clickFunction} />))}
    </div>
  )
}