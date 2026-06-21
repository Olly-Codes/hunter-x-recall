import { useEffect, useState } from "react";

function App() {

  const [characters, setCharacters] = useState([]);

  const url = 'https://api.jikan.moe/v4/anime/11061/characters';

  const dummyData = [
    {
      id: crypto.randomUUID(),
      name: "Gon",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Goku",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Freeza",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Vegeta",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Gohan",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Krillin",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Tien",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Buu",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Nappa",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Raditz",
      image: "/gon.webp"
    },
    {
      id: crypto.randomUUID(),
      name: "Android-18",
      image: "/gon.webp"
    },
  ]

  const shuffledChars = shuffle(dummyData);

  function shuffle(arr) {
    const chars = [...arr];

    for (let i = chars.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));

      [chars[i], chars[random]] = [chars[random], chars[i]];
    }

    return chars;
  }
  return (
    <>
      <h1>Hunter x Recall</h1>
      <ul>
        {shuffledChars.map((char) => {
          return <li key={char.id}>
            <img style={{ width: 100, height: 100 }} src={char.image} alt={char.name} />
            <p>Name: {char.name}</p>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
