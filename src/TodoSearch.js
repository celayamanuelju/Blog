import "./TodoSearch.css";
import React from "react";

function TodoSearch({ searchValue, setsearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setsearchValue(event.target.value);
      }}
    ></input>
  );
}

export { TodoSearch };
