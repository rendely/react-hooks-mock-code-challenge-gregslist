import React, {useContext, useState} from "react";
import {ListingsContext} from './ListingsContext';


function Search() {
  const [keyword, setKeyword] = useState('');
  const {setFilter} = useContext(ListingsContext);

  function handleSubmit(e) {
    e.preventDefault();
    setFilter(keyword);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
