import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllCategory } from "../features/productSlice";
import { Link } from "react-router-dom";
import React from "react";

const LeftBar = React.memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);
  const category = useSelector((store) => store.productReducer.category);
  return (
    <div className="w-full flex flex-col bg-gray-800 text-white p-5 shadow-md rounded-xl justify-center items-center">
      <h2>
        <Link to="/">Home Page</Link>
      </h2>
      <ul className="flex w-full justify-center items-center text-base md:text-lg lg:text-xl">
        {category && category.length > 0 ? (
          category.map((item, index) => (
            <li
              key={index}
              className="hover:bg-gray-700 p-2 rounded transition cursor-pointer"
            >
              <Link to={`category/${item}`}>{item}</Link>
            </li>
          ))
        ) : (
          <li className="p-2">Kategoriler yükleniyor...</li>
        )}
      </ul>
    </div>
  );
});

export default LeftBar;
