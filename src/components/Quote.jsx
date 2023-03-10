//this works fine just like a  normal component
import React from "react";

const Quote = (props) => {
  const { quote } = props;
  return <p>{quote}</p>;
};

export default Quote;
