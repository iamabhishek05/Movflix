
import { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg'
import MovieCard from './MovieCard';

// 9e2c9ad9



function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_URL = 'http://www.omdbapi.com?apikey=9e2c9ad9'

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search);
  }


  useEffect(() => {

    searchMovies('Batman')

  }, [])

  return (
    <div className="App">

      <h1> NFLIX </h1>

      <div className='search'>

        <input
          placeholder='Search for movies'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img src={searchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />

      </div>

      {

        movies?.length > 0
          ? (<div className='container'>

            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}


          </div>) :

          (
            <div className='empty'>

              <h2> No movies found </h2>
            </div>
          )



      }




    </div>
  );
}

export default App;
