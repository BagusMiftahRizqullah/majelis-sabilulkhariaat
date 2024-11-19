"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { StaticImageData } from "next/image";
import qurban1 from '../public/img/qurban1.png';
import MursyidSection from '../public/img/section-mursyid.png';

function KegiatanSection() {


  // Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: qurban1,
  },
  {
    src: MursyidSection,
  },
  {
    src: qurban1,
  },
];

    // State to keep track of the current image index
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    // State to determine if the image is being hovered over
    const [isHovered, setIsHovered] = useState<boolean>(false);
  
    // Function to show the previous slide
    const prevSlide = (): void => {
      console.log(currentIndex);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    // Function to show the next slide
    const nextSlide = (): void => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    // useEffect hook to handle automatic slide transition
    useEffect(() => {
      // Start interval for automatic slide change if not hovered
      if (!isHovered) {
        const interval = setInterval(() => {
          nextSlide();
        }, 3000);
  
        // Cleanup the interval on component unmount
        return () => {
          clearInterval(interval);
        };
      }
    }, [isHovered]);
  
    // Handle mouse over event
    const handleMouseOver = (): void => {
      setIsHovered(true);
    };
  
    // Handle mouse leave event
    const handleMouseLeave = (): void => {
      setIsHovered(false);
    };


  return (
    <div className="flex flex-col items-center px-16 py-20">
           
          <h1 className="dark:text-white text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Kegiatan Majelis Sabilull Khairaat
          </h1> 
    <div className="relative w-full mx-auto mt-4">
    <div
      className="relative h-[400px]  mx-12 group hover:-translate-y-2"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={images[currentIndex].src}
        alt={`Slider Image ${currentIndex + 1}`}
        layout="fill"
        objectFit="cover"
        className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
      />
    </div>
    <button
      className="absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
      onClick={prevSlide}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
      </svg>

      {/* <ChevronLeft className="text-gray-400 group-hover:text-white" /> */}
    </button>
    <button
      className="absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#111927] text-white p-2 group"
      onClick={nextSlide}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
      </svg>

      {/* <ChevronRight className="text-gray-400 group-hover:text-white" /> */}
    </button>
    <div className="flex justify-center mt-4">
      {images.map((_, index) => (
        <div
          key={index}
          className={`h-1 w-10 mx-1 ${
            index === currentIndex
              ? "bg-[#1d8130] rounded-xl"
              : "bg-gray-300 rounded-xl"
          } transition-all duration-500 ease-in-out`}
        ></div>
      ))}
    </div>
    </div>
  </div>
  )
}

export default KegiatanSection