import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION,
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as Movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me name of 5 mocies, comma seperated  like the exmple result ahead . Example Result : Gadar, Sholay, Don, Goalmaal";

    // make an api call to GPT API  to get movie result
    const gptResult = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    console.log(gptResult.choices[0]?.message?.content);
    const gptMovie = gptResult.choices[0]?.message?.content.split(",");

    // for each movie I will search  TMDB API
    const promiseArray = gptMovie.map((movie) => searchMovieTMDB(movie));
    const tmbdResults = await Promise.all(promiseArray);
    console.log(tmbdResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovie, movieResults: tmbdResults }),
    );
  };
  return (
    <div className="pt-[35%] md:pt-[10%] w-full flex justify-center">
      <form
        className="bg-black  grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="px-4 py-2 m-4 bg-white text-black col-span-8 md:col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-700 px-4 py-2 rounded col-span-4 md:col-span-3 m-4"
          onClick={handleGptSearchClick}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
