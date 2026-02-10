import { useRef, useState } from "react";
import Header from "./Header";
import JdInput from "./JdInput";
import ResumeInput from "./ResumeInput";
import genAi from "../utils/genAi";
import Prompt from "./Prompt";
import { useDispatch, useSelector } from "react-redux";
import { addGeminiData } from "../utils/geminiAiSlice";
import {useNavigate} from "react-router-dom";
import { Commet } from "react-loading-indicators";

const cleanJson = (feedback) => {
  return feedback
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
};

const Analyzer = () => {
  const [loading, setLoading] = useState(false);
  const jdText = useRef();
  const resumeText = useSelector((store) => store.resume.resumeText);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAnalyze = async () => {
     if (!jdText.current.value || !resumeText){
      alert("Resume and Job Description are required")
      return
     }
    try {
      setLoading(true)
      const jdValue = jdText.current.value;
      const aiPrompt = Prompt(resumeText, jdValue);
      const response = await genAi.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: aiPrompt,
      });
      const aiFeedback = response.candidates[0].content.parts[0].text;
      const cleanedJson = cleanJson(aiFeedback);
      const feedbackObject = JSON.parse(cleanedJson);
      dispatch(addGeminiData(feedbackObject));
      setLoading(false)
      navigate("/feedback");
    } catch (error) {
      alert("Something went wrong. Please try again later.",error);
      console.log(error)
    }
    
  };
  return (
    <>
      <Header />
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
          <Commet color="blue" size="medium" text="" textColor="" />
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-300">
          <div className="bg-white p-10 rounded-xl shadow-lg w-100 max-w-md text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Upload Your Resume
            </h1>

            <ResumeInput />
            <JdInput jdValue={jdText} />

            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
              onClick={handleAnalyze}
            >
              Analyze Resume
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Analyzer;
