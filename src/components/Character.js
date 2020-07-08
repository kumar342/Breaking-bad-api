import React from "react";
import CharacterItem from "./CharacterItem";

const Character = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Is Loading ........</h1>
  ) : (
    <section>
      {items.map((item, i) => (
        <CharacterItem key={i} item={item} />
      ))}
    </section>
  );
};

export default Character;
