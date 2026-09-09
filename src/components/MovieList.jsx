import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
//   console.log("MoveList", movies);

  return (
    <div className=" pl-4">
      <h1 className="text-3xl font-semibold text-white py-3">{title}</h1>
      <div className="flex overflow-x-auto">
        <div className="flex gap-2 w-full">
          {
            movies?.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
