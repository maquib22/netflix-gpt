const VideoTitle = (props) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-lg md:text-4xl font-bold">{props.title}</h1>
      <div class="hidden md:block"> 

      <p className="w-1/3  text-lg  hidden md:inline-block md:line-clamp-3">{props.desc}</p>
      </div>
      <div className="flex mt-2 md:mt-4">
        <button className="bg-white text-black px-6 md:px-10 py-0 md:py-2 mr-2 text-black  shadow-2xl rounded hover:opacity-80 ">Play</button>
        <button className="bg-gray-400/50 text-white  px-6 md:px-10 py-0 md:py-2 text-black  shadow-2xl rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
