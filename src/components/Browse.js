import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { OPENAI_KEY } from "../utils/constant";

import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log("TMDB key present:",process.env.REACT_APP_TMDB_KEY);
console.log("OpenAI key present:", OPENAI_KEY);

  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
