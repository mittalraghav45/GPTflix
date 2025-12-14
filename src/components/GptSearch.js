import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <> 
      <div className="fixed -z-10 w-full h-screen">
        <img 
          className="w-full h-full object-cover" 
          src={BACKGROUND_IMAGE} 
          alt='bg-logo'
        />        
      </div>
      <div className="min-h-screen">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
