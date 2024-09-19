// components/Filter.tsx
import React, { ChangeEvent, FC } from 'react';

interface FilterProps {
  setFilter: (value: string) => void;
  carMakes: string[];
}

const Filter: FC<FilterProps> = ({ setFilter, carMakes }: FilterProps) => {

  const handleMakeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
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