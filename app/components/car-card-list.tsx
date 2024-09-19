// components/CarCardList.tsx
import React from 'react';
import CarCard from './car-card';
import { Car } from '../types/car';
import { None } from 'framer-motion';

const CarCardList = ({ cars, isLoading }: { cars: Car[] | [], isLoading: boolean }) => {
  const sortedCars = [...cars].sort((a, b) => a.price - b.price);

  return (
    <div className="flex flex-wrap justify-around">
      {isLoading ? (
        Array(9).fill(null).map((_, i) => <CarCard key={i} isLoading={true} />)
      ) : (
        sortedCars.map(car => <CarCard key={car.id} car={car} isLoading={false} />)
      )}
    </div>
  );
};

export default CarCardList;