import { useEffect, useState } from "react";

function App() {

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
        id: 101,
        name: "Raditz",
        image: "/gon.webp"
      },
      {
        id: 3,
        name: "Android-18",
        image: "/gon.webp"
      },
    ]
  );

  const url = 'https://api.jikan.moe/v4/anime/11061/characters';

  function handleClick(id) {
    if (chosenCharacters.includes(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setChosenCharacters([]);
      alert("You already clicked on that character!");
    } else {
      setChosenCharacters((prevChars) => {
        return [...prevChars, id ];
      });
      setScore(prevScore => prevScore + 1);
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
  return (
    <>
      <h1>Hunter x Recall</h1>
      <div className="scoreBoard">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore > 0 ? bestScore : score}</p>
      </div>
      <ul>
        {characters.map((char) => {
          return <li onClick={() => handleClick(char.id)} key={char.id}>
            <img style={{ width: 100, height: 100 }} src={char.image} alt={char.name} />
            <p>Name: {char.name}</p>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
