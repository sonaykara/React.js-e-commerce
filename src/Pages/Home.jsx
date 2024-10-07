import { useDispatch, useSelector } from "react-redux";
import Card from "../Components/Card";
import { getAllProducts } from "../features/productSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const { product } = useSelector((store) => store.productReducer);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className="flex-1 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {product && product.length > 0 ? (
            product.map((item) => <Card key={item.id} item={item} />)
          ) : (
            <p className="text-center">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
