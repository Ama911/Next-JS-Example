'use client'
import React, { useState, useEffect } from 'react';
import Filter from './components/filter';
import CarCardList from './components/car-card-list';
import { Car } from './types/car';

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      const response = await fetch('https://freetestapi.com/api/v1/cars');
      const data = await response.json();
      setCars(data);
      setIsLoading(false);
    };

    fetchCars();
  }, []);

  const carMakes = Array.from(new Set(cars.map(car => car.make))).sort();
  
  const filteredCars = filter 
    ? cars.filter(car => car.make === filter) 
    : cars;

  return (
    <div className="bg-white items-center justify-center flex-col">
      <Filter setFilter={setFilter} carMakes={carMakes} />
      <CarCardList cars={filteredCars} isLoading={isLoading} />
    </div>
  );
};

export default Home;