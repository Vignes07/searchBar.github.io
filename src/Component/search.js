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

  // function escapeRegExp(text) {
  //   return text.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, "\\$&");
  // }

  // function boldMe(input, text) {
  //   // const regExString = escapeRegExp(text);
  //   const regex = new RegExp(input, "g");
  //   let output = input.replace(regex, `<b>${text}</b>`);
  //   console.log(output);
  //   return output;
  // }

  // var myDev = document.getElementById("result");
  // if (myDev != null) {
  //   myDev.innerHTML = boldMe(myDev.innerHTML, search);
  // }

  return (
    <>
      <div className="inputDiv">
        <input
          type="search"
          placeholder="Enter a Country..."
          onChange={handleChange}
        />
      </div>
      {result.length > 0 && (
        <div id="result">
          {result.map((value, key) => {
            return <div key={key}>{value.name}</div>;
          })}
        </div>
      )}
    </>
  );
}
export default Search;
