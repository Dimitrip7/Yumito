import React from 'react';

function SearchForm({ searchTerm, onSearchChange }) {
  return (
    <div className="searchForm">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchForm;
