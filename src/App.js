import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import {moviesData} from './constant/data'
import { useState } from 'react';
import AddNewMovie from './components/AddNewMovie';
import FiltreByRate from './components/FiltreByRate';
import {Route, Routes } from 'react-router-dom';
import Specs from './components/Specs';
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [inputSearch, setInputSearch] = useState("");
  const add=(x)=>{
    return setMovies ([...movies,x])
  }
  const [rate, setRate] = useState(1);
  return (
    <div style={{backgroundColor:"#ECF0F1"}}>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      
      </div>
      <NavBar inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FiltreByRate isRating={false} rate={rate} setRate={setRate} />
      <Routes>
        <Route
          path="/"
          element={
            <div>
             <AddNewMovie add={add} />
             <MovieList
                movie={movies}
                inputSearch={inputSearch}
                rating={rate}
              />
              </div>
            
          }
        />
        <Route path="/MovieList/Specs/:description" element={<Specs />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
