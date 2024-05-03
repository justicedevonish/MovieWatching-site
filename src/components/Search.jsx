import React, { useState } from 'react';
import './search.css';

function Search({ handleSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle input change
  const handleChange = event => {
    const { value } = event.target;
    setSearchQuery(value);
    handleSearch(value);
  };

  return (
    <div className="search">
      {/* Input field for search */}
      <input type="text" placeholder="Search" value={searchQuery} onChange={handleChange} />
      {/* Search icon */}
      <ion-icon name="search-outline"></ion-icon>
    </div>
  );
}

export default Search;
