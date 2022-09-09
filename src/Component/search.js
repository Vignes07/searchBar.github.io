import React, { useState } from "react";
import "./search.css";

function Search({ data }) {
  const [result, setResult] = useState([]);
  var search;

  const handleChange = (e) => {
    search = e.target.value;
    const filter = data.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search === "") {
      setResult([]);
    } else {
      setResult(filter);
    }
  };

  return (
    <>
      <div className="inputDiv">
        <input
          type="search"
          placeholder="Enter a Country..."
          onChange={handleChange}
        />
      </div>
      <div id="result">
        {result.map((value, index) => {
          return <div key={index}>{value.name}</div>;
        })}
      </div>
    </>
  );
}
export default Search;
