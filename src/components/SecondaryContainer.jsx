

import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  // console.log(movies);

  return (
    <div className="mt-[-15%] relative z-10 ">
        <MovieList title ={"Now Playing"} movies = {movies.nowPlayingMovies} />
        <MovieList title ={"Popular Movies"} movies = {movies.addPopularMovies} />
    </div>
  )
}

export default SecondaryContainer