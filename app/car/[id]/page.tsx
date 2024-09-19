'use client'
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Car } from '@/app/types/car';
import { AnimatePresence, motion } from 'framer-motion';


export default function CarDetail({ params }: { params: { id: string } }) {
  const [car, setCar] = useState<Car | null>(null);

  useEffect(() => {
    const fetchCar = async () => {
      const response = await fetch(`https://freetestapi.com/api/v1/cars/${params.id}`);
      const data = await response.json();
      setCar(data);
    };

    fetchCar();
  }, [params.id]);

  const [showConfetti, setShowConfetti] = useState(false);

const handlePurchase = () => {
  setShowConfetti(true);
  setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2 seconds
};

  return (
    <div className="bg-white flex flex-col items-center min-h-screen w-full p-5">
      <h1 className="text-5xl font-bold mb-5 text-black">{car ? car.make : '...'} {car ? car.model: '...'}</h1>
      <div className="flex items-start flex-wrap justify-center space-x-3">
      {car &&
        <img src={car.image} alt={car.make + ' ' + car.model} className="w-96 h-96 shadow-lg mb-5" />
      }     
      {!car &&
        <div className="w-96 h-96 mr-5 shadow-lg bg-gray-200 animate-pulse" />
      }
        <div className='shadow overflow-hidden sm:rounded-lg mb-3'>
          <table className="min-w-72 text-sm text-gray-900 bg-white">
            <tbody>
              {[
                ['year', car ? car.year : '...'],
                ['color', car ? car.color : '...'],
                ['mileage', car ? car.mileage + ' miles' : '...'],
                ['price', car ? '$' + car.price : '...'],
                ['fuel', car ? car.fuelType : '...'],
                ['transmission', car ? car.transmission : '...'],
                ['engine', car ? car.engine : '...'],
                ['horsepower', car ? car.horsepower : '...'],
                ['owners', car ? car.owners : '...'],
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className="px-4 py-2 text-lg">{label}:</td>
                  <td className="px-4 py-2 text-lg">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {car && car.features.map((feature) => (
    <p key={feature} className="text-lg text-gray-500 mt-1 italic">{feature}</p>
))}

      <motion.button
          onClick={handlePurchase}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="my-5 relative rounded px-5 py-2.5 overflow-hidden group bg-black text-white shadow-sm transition-all ease-out duration-300"
        >
          <span className="relative font-bold">Purchase Now</span>
          <motion.span
            className="absolute right-0 w-8 h-32 -mt-12 bg-white opacity-10"
            initial={{ x: 200, rotate: 12 }}
            animate={{ x: -200 }}
            transition={{ duration: 1, repeat: Infinity}}
          ></motion.span>
      </motion.button>
    {showConfetti && <Confetti />}
    
    <AnimatePresence>
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none">
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <Confetti />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
    </div>
  )
};