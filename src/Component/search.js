import React, { useState, useCallback } from "react";
import "./search.css";

function Search({ data }) {
  const [result, setResult] = useState(data);
  const [search, setSearch] = useState("");
  // var search;

  function debounce(func) {
    let timeout;
    return function (...args) {
      const context = this;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        func.apply(context, args);
      }, 500);
    };
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
    // search = e.target.value;
    console.log(search);
    const filter = data.filter((value) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });

    if (search === "") {
      setResult(data);
    } else {
      setResult(filter);
    }
  };

  const debounceCall = useCallback(debounce(handleChange), []);

  const bold = (text) => {
    return text.replace(new RegExp(search, "gi"), (match) =>
      match.fontcolor("red").bold()
    );
  };

  return (
    <>
      <div className="inputDiv">
        <input
          type="search"
          placeholder="Enter a Country..."
          onChange={debounceCall}
        />
      </div>
      <div>
        <ul>
          {result.map((value, index) => {
            // return <li key={index}>{value.name}</li>;
            return (
              <li
                key={index}
                id="result"
                dangerouslySetInnerHTML={{ __html: bold(value.name) }}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Search;
