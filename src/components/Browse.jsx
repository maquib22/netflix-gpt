import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingmovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const ShowGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  console.log(ShowGptSearch);

  return (
    <>
      <Header />
      {ShowGptSearch ? (
        <GptSearch />
      ) : (
        <div className="bg-black">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}

      {/* 
      MainContainer
        - VideoBackground
        - VideoTitle
      SecondaryContainer
        - Movielist * n
          - cards * n
      
      */}
    </>
  );
};

export default Browse;
