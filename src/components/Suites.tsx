'use client';

import { useState } from 'react';
import Image from 'next/image';
import CarouselSlider from './CarouselSlider';

const Suites = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides ? 1 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? totalSlides : prevSlide - 1));
  };

  return (
    <div id="suitesContainer" className="flex flex-col items-center justify-center mt-36 p-16">
      <h1 className="text-3xl font-bold mb-6">Recommended Suite Types</h1>
      <p className="text-xl text-center mb-8 w-3/5">
        Our 150 spacious rooms and suites combine contemporary luxury with traditional Asian decor. 
        Each room features floor-to-ceiling windows offering breathtaking coastal views. 
        The marble-clad bathrooms are equipped with heated floors and mirror-embedded televisions. 
        iPads are provided for controlling the lights, temperature, and ordering room service, ensuring 
        a seamless and luxurious experience.
      </p>
      <div className="relative">
        <div className="carousel">
          <Image
            src={`/suite${currentSlide}.png`} // Assuming your images are named suite-1.jpg, suite-2.jpg, suite-3.jpg
            alt={`Suite ${currentSlide}`}
            className="object-cover w-full"
            width={384} 
            height={512}
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gray-800 bg-opacity-75 text-white">
            <h2 className="text-xl font-bold">Suite {currentSlide}</h2>
            <p className="text-sm">Description of Suite {currentSlide}</p>
          </div>
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded">
            &#8249;
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded">
            &#8250;
          </button>
          <div className="absolute bottom-0 right-0 bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded">
            {currentSlide}/{totalSlides}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suites;
