import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import {moviesData} from './constant/data'
import { useState } from 'react';
import AddNewMovie from './components/AddNewMovie';
import FiltreByRate from './components/FiltreByRate';
import {Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Specs from './components/Specs';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const add=(x)=>{
    return setMovies ([...movies,x])
  }
  const [rate, setRate] = useState(1);
  return (
    <div style={{backgroundColor: "black"}}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <Link to={"/"} element={<Home/>}> <a>Home</a> </Link>
      <Link to={"/MovieList"} element={<MovieList/>}> <a>MovieList</a> </Link>
      </div>
      <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <AddNewMovie add={add}/>
      <FiltreByRate isRating={false} rate={rate} setRate={setRate} />
      <MovieList movie={movies} inputSearch={inputSearch} rating={rate}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/MovieList" element={<MovieList/>}/>
        <Route path="/MovieList/Specs/:title" element={<Specs/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
