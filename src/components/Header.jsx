import { useDispatch } from "react-redux";
import logo1 from "../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import { addResumeText } from "../utils/resumeSlice";
import { clearGeminiData } from "../utils/geminiAiSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleHome = () => {
    dispatch(addResumeText(null));
    dispatch(clearGeminiData());
    navigate("/");
  };

  return (
    <header className="bg-black px-10 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo1} alt="logo" className="h-12" />
        <h1 className="text-white text-xl font-semibold tracking-wide cursor-pointer" onClick={handleHome}>
          ResumeBuddy
        </h1>
      </div>
      <button
        onClick={handleHome}
        className="text-white border border-white px-5 py-2 rounded-lg 
                   hover:bg-white hover:text-black transition duration-300"
      >
        Home
      </button>
    </header>
  );
};

export default Header;
