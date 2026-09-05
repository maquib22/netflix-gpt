import useNowPlayingMovies from "../hooks/useNowPlayingmovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  
  useNowPlayingMovies()

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
