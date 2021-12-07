import CategoryButton from "./components/CategoryButton";
import React, { useState } from 'react';
import QuestionsScreen from "./components/QuestionsScreen";

function TriviaGame() {
  
  const [gameStart, setGameStart] = useState(true);
  const [buttonScreen, setButtonScreen] = useState(true);
  const [category, setCategory] = useState(0);
  const [categoryButtons, setCategoryButtons] = useState([])

  let toQuestion = (category) => {
    setCategory(category);
    setButtonScreen(false)
  }

  let toCategories = () => {
    setButtonScreen(true)
  }

  if (gameStart) {
    let usedRequests = [];
  
    for (let i = 0; i < 6; i++){
      let randomizer = Math.floor(Math.random() * 23)
      while (usedRequests.includes(randomizer)) {
        randomizer = Math.floor(Math.random() * 23)
      }
  
      categoryButtons.push(<CategoryButton key={randomizer + 9} searchkey={randomizer + 9} clickFunction={() => { toQuestion(randomizer + 9) }} />);
      usedRequests.push(randomizer);
    }
    setGameStart(false);
    return categoryButtons;
  }

  return (
    <div className={buttonScreen ? "button-screen" : "question-screen"}>
      {buttonScreen ? categoryButtons : <QuestionsScreen clickFunction={toCategories} category={category} />}
    </div>
  );
}

export default TriviaGame;
