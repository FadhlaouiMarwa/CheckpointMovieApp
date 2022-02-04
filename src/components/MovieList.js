import React from 'react';
import MovieCard from './MovieCard';
function MovieList({movie,inputSearch,rating}) {
  return (
 <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
      {movie
      ?.filter((movie)=>
      movie.title
      .toUpperCase()
      .includes(inputSearch.toUpperCase())&&
      movie.rate>=rating
      )
      .map((el)=>(
      <MovieCard movie={el} key={el.id}/>
  
      ))}

 </div>
  );
}

export default MovieList;
