import { useSelector } from "react-redux"
import lang from "../utils/languageConstant"


const GptSearchBar = () => {

    const langkey = useSelector((store) => store.config.lang)

  return (
    <div className="pt-15 flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12">
            <input type="text" className="px-4 py-2 m-4 bg-white text-black col-span-9" placeholder={lang[langkey].gptSearchPlaceholder} />
            <button className="bg-red-700 px-4 py-2 rounded col-span-3 m-4">{lang[langkey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar