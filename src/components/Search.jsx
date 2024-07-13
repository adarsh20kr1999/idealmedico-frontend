
import React, { useState } from 'react';
import axios from 'axios';
import MedicineCard from '../layouts/MedicineCard';
import Button from '../layouts/Button';

const SearchMedicines = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:5000/api/${searchQuery}`, {
        params: { query: searchQuery }
      });

      if (response.data.results) {
        setResults(response.data.results);
        setMessage('');
      } else {
        setResults([]);
        setMessage(response.data.message);
      }

      // setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('An error occurred while fetching data.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-96 rounded-md p-2 text-black"
          placeholder="Search for a medicine"
          required
        />
        <Button title="Search" />
      </form>
      
      {message && <p>{message}</p>}

      <div className="results-container">
        {results.length > 0 ? (
          results.map((medicine) => (
            <MedicineCard key={medicine.id} medicine={medicine} />
          ))
        ) : (
          !message && <p>{message}</p>
        )}
      </div>
    </div>
  );
};

export default SearchMedicines;
