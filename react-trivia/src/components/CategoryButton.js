import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CattegoryButton({ searchkey, clickFunction }) {
  
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=1&category=${searchkey}&difficulty=medium&type=multiple`)
      .then(response => {
        setCategory(response.data.results[0].category);
      })
    }, [])

  return (
    <button className="category-button" key={searchkey} onClick={clickFunction} searchkey={searchkey}>{category}</button>
  )
}