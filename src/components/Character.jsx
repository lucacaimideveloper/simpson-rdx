import React from "react";
import Name from "./Name";
import Quote from "./Quote";
import Image from "./Image";

const Character = (props) => {
  const { name, quote, image, characterDirection, liked } = props;

  if (characterDirection === "Left") {
    return (
      <>
        <Name liked={liked} name={name} quote={quote} />
        <Image image={image} name={name} />
        <Quote quote={quote} />
      </>
    );
  }
  return (
    <>
      <Name liked={liked} name={name} quote={quote} />
      <Image image={image} name={name} />
      <Quote quote={quote} />
    </>
  );
};

export default Character;
