import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getAllProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { product } = useSelector((store) => store.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % product.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + product.length) % product.length
    );
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <div className="slider relative h-full">
        {product &&
          product.length > 0 &&
          product.map((item, index) => (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-200"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition duration-200"
      >
        <FaChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {product.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              index === activeIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
