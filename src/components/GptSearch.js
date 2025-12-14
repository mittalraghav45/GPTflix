import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BACKGROUND_IMAGE } from "../utils/constant";

const GptSearch = () => {
  return (
    <> 
     <div className="absolute -z-10 ">
        <img className="h-screen object-cover" src={BACKGROUND_IMAGE} alt='bg-logo'
        />        
      </div>
    <div className="pt-[30%] md:p-0">
    
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  );
};

export default GptSearch;
