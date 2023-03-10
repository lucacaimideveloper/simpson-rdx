import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Simpsons from "./components/Simposnos";

const App = () => {
  const dispatch = useDispatch();

  //api data wont change much from the functional style but will be hook to use effect!!
  const getApiData = async () => {
    const results = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=8`
    );
    dispatch({ type: "SET_API_DATA", payload: results.data });

    //uniqueId
    results.data.forEach((item) => {
      item.uniqueId = Math.random();
    });
    //send to store, convetion is capitals, will not change,
    dispatch({ type: "SET_API_DATA", payload: results.data });
  };
  //we call it to use effect otherwise will execute the function continiusly
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <Simpsons getApiData={getApiData} />;
    </>
  );
};

export default App;
