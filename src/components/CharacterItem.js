import React from "react";

const CharacterItem = ({ item }) => {
  console.log(item);

  return (
    <div>
      <h3>{item.name}</h3>

      <div>
        <img
          className="card"
          style={{ width: "20%", height: "20%" }}
          src={item.img}
          alt="alt"
        />
      </div>
    </div>
  );
};

export default CharacterItem;
