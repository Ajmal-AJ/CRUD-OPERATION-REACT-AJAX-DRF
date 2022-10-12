import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie'

function App() {
  const [movies, setMovies] = useState([])
  useEffect (() => {
   
  }, [])

  return (
     <div className="App">
      <AddMovie/>
      {/* const {movies} = movies */}
      {movies.map((movie, index) => {
        return(
          <div className="movies">
            <h2>{movie.name}</h2>
            <h3>{movie.genre}</h3>
            <h4>{movie.starring}</h4>
          </div>
        )
      }
      )}
    </div>
  );
}

export default App;
