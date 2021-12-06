import axios from "axios";
import CategoryButton from "./components/CategoryButton";
import React, { useState } from 'react';

function TriviaGame() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [triviaCategories, setTriviaCategories] = useState([
    'General Knowledge',
    'Entertainment: Books',
    'Entertainment: Filmm',
    'Entertainment: Music',
    'Entertainment: Musicals & Theaters',
    'Entertainment: Television',
    'Entertainment: Video Games',
    'Entertainment: Board Games',
    'Science & Nature',
    'Science: Computers',
    'Science: Mathematics',
    'Mythology',
    'Sports',
    'Geography',
    'History',
    'Politics',
    'Art',
    'Celebrities',
    'Animals',
    'Vehicles',
    'Entertainment: Comics',
    'Science: Gadgets',
    'Entertainment: Japanese Anime & Manga',
    'Entertainment: Cartoon & Animations',
  ]);

  let usedRequests = [];
  let categoryButtons = [];

  for (let i = 0; i < 6; i++){
    let randomizer = Math.floor(Math.random() * 23)

    while (usedRequests.includes(randomizer)) {
      randomizer = Math.floor(Math.random() * 23)
    }

    categoryButtons.push(<CategoryButton key={randomizer + 9} text={triviaCategories[randomizer]} />);
    usedRequests.push(randomizer);
  }

  return (
    <div className="TriviaGame">
      {categoryButtons}
    </div>
  );
}

export default TriviaGame;
