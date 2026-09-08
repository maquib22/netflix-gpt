import useNowPlayingMovies from "../hooks/useNowPlayingmovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMovies()
  usePopularMovies()

  return (
    <>
      <Header />
      <div className="bg-black">
      <MainContainer />
      <SecondaryContainer />

      </div>
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
