import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGO, PHOTO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView,clearGpt } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: PHOTO_URL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    }); 
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    if(showGptSearch){
      dispatch(clearGpt());
    }
    //toggle gpt btn
    dispatch(toggleGptSearchView());
    
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className=" absolute px-8 py-2 z-10 w-screen
    bg-black sm:bg-blue-900 md:bg-green-900
    flex flex-col md:flex-row justify-between">

      <img className="w-36 mx-auto md:mx-0" src={LOGO} alt="Netflix logo" />
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-4 py-2 bg-purple-800 text-white m-2 rounded-lg mx-4"
            onClick={handleGptSearchClick}
          >
           { showGptSearch?'Home Page': 'GPT Search'}
          </button>

          <img className="hidden md:block w-12 h-12 p-" alt="userIcon" src={user.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
