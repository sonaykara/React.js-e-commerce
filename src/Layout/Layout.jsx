import Slider from "../Components/Slider";
import LeftBar from "../Components/LeftBar";
import Home from "../Pages/Home";
import { Route, Routes } from "react-router-dom";
import Category from "../Pages/Category";

import Navbar from "../Components/Navbar";
import DetailCard from "../Components/DetailCard";
import ShoppingCart from "../Components/ShopingCard";

function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Slider></Slider>

      <div className="flex flex-col lg:flex-col mt-8 px-4 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full bg-white p-4 shadow-md rounded-xl">
          <div className="text-xl font-semibold ">
            <LeftBar />
          </div>
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/jewelery" element={<Category />} />
            <Route path="category/electronics" element={<Category />} />
            <Route path="category/men's clothing" element={<Category />} />
            <Route path="category/women's clothing" element={<Category />} />
            <Route path="buy/:id" element={<DetailCard />} />
            <Route path="basket" element={<ShoppingCart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
