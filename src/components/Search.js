import React from "react";

function Search({searchTerm, setSearchTerm}) {
  // function handleSearch(e){
  //   setSearchTerm(e.target.value)
  //  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {setSearchTerm(e.target.value)}}
        value={searchTerm}
      />
    </div>
  );
}

export default Search;
