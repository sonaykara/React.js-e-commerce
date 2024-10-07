import  { useState, useEffect } from 'react';
import Basket from './Basket';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header = () => {
  const { basket } = useSelector((state) => state.basketSlice);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search); 
  const [searchResult, setSearchResult] = useState(false);
  console.log("navbar render edildi")

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); 

    return () => {
      clearTimeout(handler);
    };
  }, [search]); 

  const toggleSearchResult = () => {
    setSearchResult(prevState => !prevState);
  };

  return (
    <header className='flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50'>
      <div className='flex flex-wrap items-center lg:gap-y-2 gap-4 w-full'>
        <Link to = "/" href="javascript:void(0)" className="text-lg font-bold text-[#333] hover:text-[#007bff] transition-colors duration-300">
          Store
        </Link>
        <div className="flex gap-x-6 gap-y-4 ml-auto">
          <div className='flex border-2 focus-within:border-gray-400 rounded-full px-6 py-3 overflow-hidden max-w-52 '>
            <input 
              type='text' 
              value={search} 
              placeholder='Search something...' 
              className='w-full text-sm bg-transparent outline-none pr-2' 
              onChange={handleSearch} 
              onFocus={toggleSearchResult}
              onBlur={toggleSearchResult}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="cursor-pointer fill-gray-600">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            { searchResult && <SearchBox searchResult = {searchResult} search = {search} />}
          </div>

          <div className='flex items-center space-x-8'>
            <span className="relative" onClick={toggleCart}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer fill-[#333] inline" viewBox="0 0 64 64">
                <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000" />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">{basket.length}</span>
            </span>
          </div>
        </div>

        {isCartOpen && (
          <Basket toggleCart={toggleCart} />
        )}
      </div>
    </header>
  );
};

export default Header;
