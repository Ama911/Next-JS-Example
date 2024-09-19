// components/Filter.tsx
import React from 'react';

const Filter = ({ filter, setFilter, setPriceRange, carMakes }) => {

  const handleMakeChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceRange([0, Number(event.target.value)]);
  };

  return (
    <div className='flex justify-center bg-gray-200 p-5 space-x-3'>
      <select onChange={handleMakeChange} className='mb-1 bg-white p-2 rounded border-gray-300 text-black'>
        <option value="">All</option>
        {carMakes.map(make => (
          <option key={make} value={make}>{make}</option>
        ))}
      </select>
    </div>
  );
};

export default Filter;