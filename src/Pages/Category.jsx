import { useDispatch } from "react-redux";
import Card from "../Components/Card";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllCategoryItem } from "../features/productSlice";
import { useLocation } from "react-router-dom";

function Category() {
  const { categoryItem } = useSelector((state) => state.productReducer);
  const { pathname } = useLocation();
  console.log(pathname);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategoryItem(pathname));
  }, [pathname]);

  return (
    <div className="flex-1 p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categoryItem && categoryItem.length > 0 ? (
            categoryItem.map((item, index) => <Card key={index} item={item} />)
          ) : (
            <div>Yükleniyor...</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
