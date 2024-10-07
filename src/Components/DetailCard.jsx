import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../features/basketSlice";

const DetailCard = () => {
  const { product } = useSelector((store) => store.productReducer);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const params = useParams();

  const productId = parseInt(params.id);
  const filteredProducts = product.filter((p) => p.id === productId);

  const handleIncrement = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  const addBasket = () => {
    if (quantity > 0) {
      const basketItem = {
        id: filteredProducts[0].id,
        title: filteredProducts[0].title,
        image: filteredProducts[0].image,
        price: filteredProducts[0].price,
        description: filteredProducts[0].description,
        quantity: quantity,
      };

      dispatch(addToBasket(basketItem));
      setQuantity(0);
    } else {
      alert("Please select quantity");
    }
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          {product.title}
        </h2>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-3xl border-2 border-gray-200 p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
          >
            <div className="col-span-12 lg:col-span-2 img box">
              <img
                src={product.image}
                alt={product.title}
                className="max-lg:w-full lg:w-[180px] rounded-lg object-cover"
              />
            </div>
            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
              <div className="flex items-center justify-between w-full mb-4">
                <h5 className="font-manrope font-bold text-2xl leading-9 text-gray-900">
                  {product.name}
                </h5>
              </div>
              <p className="font-normal text-base leading-7 text-gray-500 mb-6">
                {product.description}{" "}
                <a href="javascript:;" className="text-indigo-600">
                  More....
                </a>
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleDecrement}
                    className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                  >
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5H13.5"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <span className="font-manrope font-bold text-xl leading-7 text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                  >
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 9.5H14.25M9 14.75V4.25"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">
                  ${product.price}
                </h6>
              </div>
            </div>
          </div>
        ))}
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <button
            onClick={addBasket}
            className="rounded-full py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700"
          >
            Add To Basket
          </button>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
