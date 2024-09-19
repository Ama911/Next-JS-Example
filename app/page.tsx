'use client'
import React, { useState, useEffect } from 'react';
import Filter from './components/filter';
import CarCardList from './components/car-card-list';
import { Car } from './types/car';

const Home = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
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

  const carMakes = [...new Set(cars.map(car => car.make))].sort();

  const filteredCars = filter 
    ? cars.filter(car => car.make === filter && car.price <= priceRange[1]) 
    : cars;

  return (
    <div className="bg-white items-center justify-center flex-col">
      <Filter filter={filter} setFilter={setFilter} carMakes={carMakes} setPriceRange={setPriceRange} />
      <CarCardList cars={filteredCars} isLoading={isLoading} />
    </div>
  );
};

export default Home;