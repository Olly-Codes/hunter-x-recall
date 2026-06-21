import { useEffect, useState } from "react";

function App() {

  const [characters, setCharacters] = useState([]);

  const url = 'https://api.jikan.moe/v4/anime/11061/characters';

  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
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
    .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Hunter x Recall</h1>
    </>
  )
}

export default App
