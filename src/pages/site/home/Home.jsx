import React, { useEffect, useState } from 'react'

import Banner from '../../../components/Banner'
import MovieList from '../../../components/MovieList'


const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  // const [searchData, setSearchData] = useState([]);



  useEffect(() => {
    (async function () {
      const urls = [
        "https://api.themoviedb.org/3/trending/movie/day?language=vi",
        "https://api.themoviedb.org/3/movie/top_rated?language=vi",
        // Add more URLs here...
      ];
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const fetchMovies = async (url) => {
        return await fetch(url, options).then((response) => response.json());
      };

      try {
        const response = await Promise.all(urls.map(fetchMovies));

        setTrendingMovies(response[0].results);
        setTopRatedMovies(response[1].results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Banner />
      <MovieList title="Phim Hot" data={trendingMovies.slice(0, 10)} />
      <MovieList title="Phim đề cử" data={topRatedMovies.slice(0, 10)} />

      {/* {searchData.length > 0 && <MovieSearch data={searchData} />} */}
    </div>
  );
}

export default Home
