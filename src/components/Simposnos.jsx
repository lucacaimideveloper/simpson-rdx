//here is where our html and the mechanics connects
//import them, add them in the props
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Characters from "./Characters";

const Simpsons = (props) => {
  const simpsons = useSelector((state) => state.simpsons); //import state
  const sortOrder = useSelector((state) => state.sortOrder);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  //waiting for data api
  if (!simpsons) {
    return <p>Loading...</p>;
  }
  const { getApiData } = props;

  //filter
  const filtered = simpsons.filter((character) => {
    return character.character
      .toLowerCase()
      .includes(searchTerm ? searchTerm.toLowerCase() : "");
  });

  //likecounter
  let total = 0;
  simpsons.forEach((character) => {
    if (character.liked) {
      total += 1;
    }
  });

  if (sortOrder && sortOrder === "asc") {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.character) return 1;
      if (item.character < nextItem.character) return -1;
      return 0;
    });
  } else if (sortOrder) {
    filtered.sort((item, nextItem) => {
      if (item.character > nextItem.charcater) return -1;
      if (item.character < nextItem.character) return 1;
      return 0;
    });
  }

  return (
    <>
      <div>
        <select>
          {simpsons.map((name) => {
            return <option key={name.quote}>{name.character}</option>;
          })}
        </select>
        <h3>total likes ={total}</h3>
        <button onClick={getApiData}>Get new data</button>
        <label htmlFor="filter">Filter: </label>
        <input
          id="filter"
          type="text"
          onInput={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <label htmlFor="sort">Sort</label>
        <select
          id="sort"
          onChange={(e) => {
            dispatch({ type: "SET_SORT_ORDER", payload: e.target.value });
          }}>
          <option value="asc">ASC</option>
          <option value="dsc">DSC</option>
        </select>
      </div>
      <Characters />
    </>
  );
};

export default Simpsons;
