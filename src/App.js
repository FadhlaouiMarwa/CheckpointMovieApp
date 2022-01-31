import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import {moviesData} from './constant/data'
import { useState } from 'react';
import AddNewMovie from './components/AddNewMovie';
import FiltreByRate from './components/FiltreByRate';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const add=(x)=>{
    return setMovies ([...movies,x])
  }
  const [rate, setRate] = useState(1);
  return (
    <div style={{backgroundColor: "black"}}>
      <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <AddNewMovie add={add}/>
      <FiltreByRate isRating={false} rate={rate} setRate={setRate} />
      <MovieList movie={movies} inputSearch={inputSearch} rating={rate}/>
      
    </div>
  );
}

export default App;
