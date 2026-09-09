import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  // console.log(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo)
  

  const getMovietrailler = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTION,
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // console.log(filterData);
    
    const traillerVideo = filterData.length ? filterData[0] : json.results[0];
    // console.log(traillerVideo);

    dispatch(addTrailer(traillerVideo));
  };

  useEffect(() => {
    !trailerVideo && getMovietrailler();
  }, []);
};

export default useMovieTrailer;
