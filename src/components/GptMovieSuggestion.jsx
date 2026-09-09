import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
    console.log(movieResults);
    
  if (!movieNames) {
    return null;
  }

  return (
    <div className="p-0 md:p-4 m-4 bg-black text-white">
      {movieNames.map((movieName, idx) => (<MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[idx]}
        />)
      )}
    </div>
  );
};

export default GptMovieSuggestion;
