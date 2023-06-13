import "./SearchBar.css";
import { useState, useEffect } from "react";
function SearchBar() {
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    function fetchSearchedKeywords(event) {
      if (event.keyCode === 13) {
        console.log(searchKeyword);
      }
    }
    document.addEventListener("keyup", fetchSearchedKeywords);

    return () => {
      document.removeEventListener("keyup", fetchSearchedKeywords);
    };
  }, [searchKeyword]);

  function handleSearchKeywords(event) {
    setSearchKeyword(event.target.value);
  }

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          name="Search Keywords"
          placeholder="Search Here ..."
          className="search-input"
          onChange={handleSearchKeywords}
        />
      </div>
    </>
  );
}

export default SearchBar;
