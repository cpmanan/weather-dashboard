import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
        style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        data-testid="search-input"
      />
      <button
        onClick={handleSearch}
        style={{ marginLeft: '10px', padding: '8px 16px', borderRadius: '4px', backgroundColor: '#2563EB', color: '#fff' }}
        data-testid="search-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
