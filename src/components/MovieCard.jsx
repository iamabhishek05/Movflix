import React from 'react'

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div className="" key={imdbID}>
            <div className='cursor-pointer text text-red-500 text-xl font-bold pt-4'>
                <p>{Year}</p>
            </div>

            <div className=' cursor-pointer shadow-xl hover:shadow-red-600 hover:-translate-y-1 hover:scale-75 hover:duration-300'>
                <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
            </div>

            <div>
                <h3 className='cursor-pointer text-wrap text-xl text-red-500 font-bold mt-3 '>{Title}</h3>
                <span className='cursor-pointer text-md text-red-500 uppercase font-semibold mt-3'>{Type}</span>

            </div>
        </div>
    );
}

export default MovieCard 