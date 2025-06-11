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

export default function Livecoding() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetGames = async () => {
      const res = await fetchGamesCard();
      setGames(res);
    };
    fetGames();
  }, []);

  return (
    <>
      <h2>5/28</h2>
      {games.map((game) => {
        return (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            inStock={game.inStock}
          />
        );
      })}
    </>
  );
}

function GameCard({ id, name, inStock }) {
  return (
    <div>
      <p>
        {name} - {inStock ? "In Stock" : "Out of Stock"}
      </p>
      <button>Edit</button>
    </div>
  );
}
