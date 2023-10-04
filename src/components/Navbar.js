// SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch function passed from the parent component
  };

  return (
    <div className="mt-4 main-width p-2 main-bg-color rounded-3 shadow">
      <form className="d-flex w-25" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search by vehicle name"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="btn btn-primary border-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
