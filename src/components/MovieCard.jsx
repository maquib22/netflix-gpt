import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({posterPath}) => {
  return (

      <img className="w-48" src={IMG_CDN_URL+posterPath} alt="Movie Card" />

  )
}

export default MovieCard