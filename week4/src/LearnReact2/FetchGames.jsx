import { useEffect, useState } from "react";

const fetchGamesCard = async () => {
  const games = [
    { id: 1, name: "Mario", inStock: true },
    { id: 2, name: "Crash Bandicoot", inStock: true },
    { id: 3, name: "Mega Man", inStock: false },
    { id: 4, name: "Pokemon", inStock: true },
    { id: 5, name: "Sonic", inStock: false },
    { id: 6, name: "Rayman", inStock: true },
    { id: 7, name: "Donkey Kong", inStock: true },
  ];

  return games;
};

export default function FetchGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const res = await fetchGamesCard();
      setGames(res);
      // console.log(res)
    };
    getGames();
  }, []);

  return (
    <div>
      {games.map((game) => 
        <Game key={game.id} game={game} />
      )}
    </div>
  );
}

function Game({game}) {
    const {name, id, inStock} = game;
  return (
  <div>
      <p>
        {name} - {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button>Edit</button>
    </div>
  );
}
