import { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import Board from "./components/Board";
import Header from "./components/Header";
import "./styles/styles.css";

function App() {

  const [isWinner, setIsWinner] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenCharacters, setChosenCharacters] = useState([]);
  const [characters, setCharacters] = useState(
    [
      {
        id: 10,
        name: "Gon",
        image: "/gon.webp"
      },
      {
        id: 20,
        name: "Goku",
        image: "/gon.webp"
      },
      {
        id: 30,
        name: "Freeza",
        image: "/gon.webp"
      },
      {
        id: 40,
        name: "Vegeta",
        image: "/gon.webp"
      },
      {
        id: 50,
        name: "Gohan",
        image: "/gon.webp"
      },
      {
        id: 89,
        name: "Krillin",
        image: "/gon.webp"
      },
      {
        id: 90,
        name: "Tien",
        image: "/gon.webp"
      },
      {
        id: 71,
        name: "Buu",
        image: "/gon.webp"
      },
      {
        id: 87,
        name: "Nappa",
        image: "/gon.webp"
      },
      {
        id: 3,
        name: "Android-18",
        image: "/gon.webp"
      },
    ]
  );
  useEffect(() => {
    if (score === 1) {
      setIsWinner(true);
    }
  }, [score]);

  const url = 'https://api.jikan.moe/v4/anime/11061/characters';

  function handleClick(id) {
    if (chosenCharacters.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setChosenCharacters([]);
    } else {
      setScore(prevScore => prevScore + 1);
      setChosenCharacters((prevChars) => {
        return [...prevChars, id ];
      });
      shuffle(characters);
    }
  }

  function shuffle(arr) {
    let shuffledChars = [...arr];

    for (let i = shuffledChars.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));

      [shuffledChars[i], shuffledChars[random]] = [shuffledChars[random], shuffledChars[i]];
    }
    setCharacters(shuffledChars);
  }

  function handleReset() {
    setScore(0);
    setChosenCharacters([]);
    setIsWinner(false);
  }
  return (
    <>
      <Header />
      <ScoreBoard score={score} bestScore={bestScore}/>
      <Board 
        characters={characters} 
        handleClick={handleClick}
        isWinner={isWinner}
        handleReset={handleReset} 
      />
    </>
  )
}

export default App
