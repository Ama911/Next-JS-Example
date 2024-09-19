import React from 'react';
import Link from 'next/link';
import { Car } from '../types/car';
import { motion } from 'framer-motion';

const CarCard = ({ car, isLoading }: {car: Car, isLoading: boolean}) => {
  return (
    <>
      {isLoading ? (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white relative h-96 w-96 text-white">
          <div className="animate-spin w-10 h-10 border-t-2 border-b-2 border-gray-900 rounded-full mx-auto mt-20"></div>
        </div>
      ) : (
        <Link href={`/car/${car.id}`}>
          <motion.div 
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white relative"
          >
            <img className="w-full" src={car.image} alt={car.make + ' ' + car.model} />
            <motion.div 
              className="px-6 py-4 absolute bottom-0 left-0 right-0 backdrop-blur bg-black/50"
              initial={{ bottom: "-22.5%" }}
              whileHover={{ bottom: "-2%" }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-bold text-xl mb-2 text-white font-bold">{car.make} {car.model}</div>
              <p> ${car.price}</p>
              <p>Year: {car.year}</p>
              <p>Color: {car.color}</p>
              <p>Mileage: {car.mileage}</p>
            </motion.div>
          </motion.div>
        </Link>
      )}
    </>
  );
};

export default CarCard;