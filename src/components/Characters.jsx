import React from "react";
import { useSelector } from "react-redux";
import Character from "./Character";

const Characters = () => {
  const simpsons = useSelector((state) => state.simpsons); //access to the store
  return simpsons.map((item) => {
    return (
      <div className="character" key={item.quote}>
        <Character
          liked={item.liked}
          name={item.character}
          quote={item.quote}
          image={item.image}
          characterDirection={item.characterDirection}
        />
      </div>
    );
  });
};

export default Characters;
