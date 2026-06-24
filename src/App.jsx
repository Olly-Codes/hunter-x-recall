import { useEffect, useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import Board from "./components/Board";
import Header from "./components/Header";
import WinnerModal from "./components/WinnerModal";
import "./styles/styles.css";
import Loading from "./components/Loading";

function App() {

  const [isWinner, setIsWinner] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenCharacters, setChosenCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Server error");
      }
      return res.json();
    })
    .then((result) => {
      const top10 = result.data.slice(0, 10).map((char) => {
        return {
          id: char.character.mal_id,
          name: char.character.name,
          image: char.character.images.webp.image_url
        }
      });

      setCharacters(top10);
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false));
  }, []);
  
  useEffect(() => {
    if (characters.length > 0 && score === characters.length) {
      setBestScore(score)
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
    setBestScore(0);
    setChosenCharacters([]);
    setIsWinner(false);
  }
  return (
    <>
      <Header />
      <ScoreBoard
        score={score} 
        bestScore={bestScore} 
      />
      {loading ? (
        <Loading />
      ) : (
        <Board 
        characters={characters} 
        handleClick={handleClick}
      />
      )}
      {isWinner && <WinnerModal score={score} handleReset={handleReset} />}
    </>
  )
}

export default App
