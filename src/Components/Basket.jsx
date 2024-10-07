import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useHelper } from "../CustomHooks/helper";
import { GoEyeClosed } from "react-icons/go";

const BasketBox = (props) => {
  const { toggleCart } = props;
  const navigate = useNavigate();
  const { basket } = useSelector((state) => state.basketSlice);
  const { totalPrice } = useSelector((state) => state.basketSlice);
  const basketRef = useRef(null);

  const handleCheckout = () => {
    navigate("/basket");
    toggleCart();
  };

  const { incrementQuntity, decrementQuantity, deleteItemBasketItem } =
    useHelper();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (basketRef.current && !basketRef.current.contains(event.target)) {
        toggleCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleCart]);

  return (
    <section
      ref={basketRef}
      className="py-4 absolute right-0 top-16 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg h-[400px] overflow-y-auto"
    >
      <div className="px-6 py-4">
        <h2 className="title font-manrope font-bold text-3xl leading-8 mb-6 text-center text-black">
          Basket
        </h2>
        {basket.map((product, index) => {
          return (
            <div
              key={product.id}
              className="rounded-lg border border-gray-200 p-4 mb-4 flex"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-1/3 rounded-lg object-cover"
              />
              <div className="w-2/3 pl-4">
                <h5 className="font-manrope font-bold text-lg text-gray-900">
                  {product.title}
                </h5>
                <p className="font-normal text-sm leading-5 text-gray-500 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={() => decrementQuantity(index)}
                      className="border rounded-full p-2 bg-gray-100 hover:bg-gray-200"
                    >
                      <span>-</span>
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      onClick={() => incrementQuntity(index)}
                      className="border rounded-full p-2 mr-3 bg-gray-100 hover:bg-gray-200"
                    >
                      <span>+</span>
                    </button>
                    <button
                      onClick={() => deleteItemBasketItem(index)}
                      className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                    >
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                          cx="17"
                          cy="17"
                          r="17"
                        />
                        <path
                          className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                          d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                          stroke="#EF4444"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <h6 className="text-indigo-600 font-manrope font-bold text-lg">
                    ${product.price}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex items-center justify-between border-t pt-4">
          <h5 className="text-gray-900 font-manrope font-semibold text-xl">
            Total Price
          </h5>
          <h6 className="font-manrope font-bold text-xl text-indigo-600">
            ${totalPrice}
          </h6>
        </div>
        <div className="text-center mt-4">
          <button
            onClick={() => handleCheckout()}
            className="rounded-full py-2 px-4 bg-indigo-600 text-white font-semibold text-lg w-full hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>
        <button
          onClick={toggleCart}
          className="absolute top-2 right-2 text-gray-600 mt-7"
        >
          <GoEyeClosed size={24} color="red" />
        </button>
      </div>
    </section>
  );
};

export default BasketBox;
