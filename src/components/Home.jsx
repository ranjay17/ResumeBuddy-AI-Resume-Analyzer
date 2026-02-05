import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <>
    <Header />
      <div className="h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-white p-10 rounded-xl shadow-lg w-100 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            ResumeBuddy – AI Resume Analyzer
          </h1>

          <h4 className="text-gray-600 mb-8">
            Analyze your resume against a job description
          </h4>

          <Link to="/analyzer">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700">
              Start Analysis
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
