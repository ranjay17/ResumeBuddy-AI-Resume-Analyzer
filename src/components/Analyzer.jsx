import Header from "./Header";
import JdInput from "./JdInput";
import ResumeInput from "./ResumeInput";

const Analyzer = () => {
  return (
    <>
    <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-300">
        <div className="bg-white p-10 rounded-xl shadow-lg w-100 max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Upload Your Resume
          </h1>

          <ResumeInput />
          <JdInput />
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
            Analyze Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Analyzer;
