import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CattegoryButton({ searchKey, clickFunction }) {
  
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=1&category=${searchKey}&difficulty=medium&type=multiple`)
      .then(response => {
        setCategory(response.data.results[0].category);
      })
    }, [])

  return (
    <button className="category-button" key={searchKey} onClick={clickFunction}>{category}</button>
  )
}