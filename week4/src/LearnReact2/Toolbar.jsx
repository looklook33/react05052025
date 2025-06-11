import { useState } from "react";

function AlertButton({ message, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        alert(message);
      }}
    >
      {children}
    </button>
  );
}

function PlayButton({ movieName }) {
  function handlePlayClick(e) {
    e.stopPropagation()
    alert(`Playing ${movieName}`);
  }

  return <button onClick={handlePlayClick}>play {movieName}</button>;
}
export default function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You Clicked On the Toolbar!");
      }}
    >
      <div>
        <AlertButton message="Playing">Play Movide</AlertButton>
      </div>
      <br />
      <div>
        <PlayButton movieName="Movie 1"></PlayButton>
        <PlayButton movieName="Movie 2"></PlayButton>
      </div>
    </div>
  );
}
