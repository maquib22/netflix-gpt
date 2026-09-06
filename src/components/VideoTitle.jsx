const VideoTitle = (props) => {
  return (
    <div className="pt-[20%] px-10 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <p className="w-1/2 md:w-1/3 text-l">{props.desc}</p>
      <div className="flex mt-4">
        <button className="bg-white text-black  px-10 py-2 mr-2 text-black  shadow-2xl rounded hover:opacity-80">Play</button>
        <button className="bg-gray-400/50 text-white  px-10 py-2 text-black  shadow-2xl rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
