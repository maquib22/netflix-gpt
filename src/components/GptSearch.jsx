import { BG } from "../utils/constants"
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"


const GptSearch = () => {
  return (
    <div className={`
     min-h-screen flex-col items-center bg-[url('${BG}')] bg-cover bg-center text-white`}>
        <GptSearchBar />
        <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch