import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export const CarouselHome = () => {
  const imageUrls = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? imageUrls.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = current === imageUrls.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  return (
    <div className="overflow-hidden relative">
      {/* images */}
      <div
        className="flex transition ease-out bg-cover duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {imageUrls.map((img) => (
          <img key={img} src={img} className="w-screen" alt="image slide" />
        ))}
      </div>

      {/* buttons */}
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={prevSlide}>
          <BsFillArrowLeftCircleFill className="text-4xl" />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill className="text-4xl" />
        </button>
      </div>

      {/* dots */}
      <div className="absolute bottom-0 w-full flex justify-center py-4 gap-5">
        {imageUrls.map((_, index) => (
          <div
            onClick={() => setCurrent(index)}
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
