// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';


const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/search?query=${query}`,{
        withCredentials:true,
  });
      setResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=' Searchdiv'>
      <h1>Search Items</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((item) => (
          <div>
          <li key={item._id}>Object_id :: {item._id}</li>  
          <li key={item._id}> User name :: {item.name}</li>
          
          <li key = {item._id}> User Course :: {item.course}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Search;
