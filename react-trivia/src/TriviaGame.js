import axios from 'axios';
import CategoryButton from "./components/CategoryButton";
import React, { useState } from 'react';
import QuestionScreen from "./components/QuestionScreen";

function TriviaGame() {

  const [buttonScreen, setButtonScreen] = useState(true);

  let questionObj;

  function toQuestion(val = buttonScreen, key) {

    axios.get(`https://opentdb.com/api.php?amount=1&category=${key}&difficulty=medium&type=multiple`)
      .then(res => {
        console.log(res.data);
        questionObj = <QuestionScreen />;
      })
    
    if (val) {
      setButtonScreen(false);
    } else {
      setButtonScreen(true);
    }

    return questionObj;
  }

  let usedRequests = [];
  let categoryButtons = [];

  for (let i = 0; i < 6; i++){
    let randomizer = Math.floor(Math.random() * 23)

    while (usedRequests.includes(randomizer)) {
      randomizer = Math.floor(Math.random() * 23)
    }

    categoryButtons.push(<CategoryButton key={randomizer + 9} searchKey={randomizer + 9} clickFunction={() => { toQuestion(buttonScreen, randomizer + 9) }} />);
    usedRequests.push(randomizer);
  }

  return (
    <div className={buttonScreen ? "button-screen" : "question-screen"}>
      {buttonScreen ? categoryButtons : questionObj}
    </div>
  );
}

export default TriviaGame;
