const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video 
    pt-[20%] sm:px-6 md:px-24 absolute text-white bg-gradient-to-r from-black"
    >
      <h1 className="sm:text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="md:0 mx-2 my-2">
        <button className="bg-white text-black md:py-4 md:px-12 text-xl px-3 rounded-md hover:bg-opacity-[50%]">
          ▶️ Play
        </button>
        <button className="hidden md:inline-blockbg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md mx-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
