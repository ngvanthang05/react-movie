import PropTypes from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router";

const Header = () => {
  // const [search, setSearch] = useState("");

  // const handleSearch = async (value) => {
  //   const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  //     },
  //   };
  //   if (value === "") return setSearchData([]);
  //   try {
  //     const response = await fetch(url, options);
  //     const data = await response.json();
  //     setSearchData(data.results);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="p-4 flex justify-between  fixed top-0 left-0 w-full z-[9999]  bg-black">
      <div className="flex items-center gap-8">
        <NavLink to="/">
          <img src="/logo.svg" alt="" width={50} height={50} />
        </NavLink>
        <nav className="hidden md:flex items-center space-x-5">
          <NavLink to="/about" className="hover:text-red-700">
            About
          </NavLink>
          <a href="#" className="hover:text-red-700">
            Contact
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 text-black"
          // value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-lg"
        >
          Search
        </button>
      </div>
    </div>
  );
};


export default Header;
