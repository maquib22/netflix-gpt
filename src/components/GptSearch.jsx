import { BG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${BG})` }}>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch