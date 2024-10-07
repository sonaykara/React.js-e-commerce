import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SearchBox = (props) => {
  const { searchResult } = props;
  const { search } = props;
  const navigate = useNavigate();
  const { product } = useSelector((store) => store.productReducer);

  const filteredProducts = search
    ? product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    : product;

  const handleCheckout = () => {
    navigate("/basket");
  };

  return searchResult ? (
    <section className="py-4 absolute right-0 top-16 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg h-[400px] overflow-y-auto overflow-x-hidden">
      <div className="px-6 py-4">
        <h2 className="title font-manrope font-bold text-3xl leading-8 mb-6 text-center text-black">
          Products
        </h2>
        {filteredProducts.map((product) => (
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
              <p className="font-bold text-sm leading-5 text-black-600 mb-2">
                ${product.price}
              </p>
              <button
                onClick={() => navigate("/buy/" + product.id)}
                onMouseDown={(e) => e.preventDefault()}
                className="flex items-center justify-between border-t pt-4"
              >
                <h5 className="text-blue-900 font-manrope font-semibold text-lg">
                  Detail
                </h5>
              </button>
            </div>
          </div>
        ))}
        <div className="text-center mt-4">
          <button
            onClick={handleCheckout}
            className="rounded-full py-2 px-4 bg-indigo-600 text-white font-semibold text-lg w-full hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  ) : null;
};

export default SearchBox;
