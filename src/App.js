
import React from 'react'
import { useEffect } from 'react'
import MovieCard from './components/MovieCard';
import { useState } from 'react';
import SearchIcon from './search.svg'



const API_URL = 'http://www.omdbapi.com/?apikey=9e2c9ad9'


const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    SearchMovies('Batman');
  }, [])


  const SearchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search);
  }




  return (
    <>

      <div>
        <h1 className='text-red-500 text-5xl text-center font-bold mt-5 cursor-pointer'> MOVFLIX </h1>


        <div className='flex justify-end mt-12 relative pr-20'>

          <input className='border-4 border-red-500 rounded-full w-2/4 py-5  
                     px-5 text-2xl text-red-500 font-semibold mr-80 ml-40 cursor-pointer shadow-xl hover:shadow-red-600'
            placeholder='Type your search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <img className='mt-4 absolute mr-80 pr-6 cursor-pointer'
            src={SearchIcon}
            alt='Search'
            onClick={() => SearchMovies(searchTerm)}
          />

        </div>



        {movies?.length > 0 ? (
          <div className="grid grid-cols-4 grid-row-4 pl-10 ml-10 py-10 mt-10 mb-10 gap-y-10">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

      </div>

    </>
  )
}

export default App 
