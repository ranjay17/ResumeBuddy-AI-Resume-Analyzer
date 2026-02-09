import { useSelector } from "react-redux";
import Header from "./Header";

const Feedback = () => {
  const resumeFeedback = useSelector((store) => store.geminiData.geminiData);
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Resume Analysis Report
          </h1>
          {resumeFeedback.length == 0 ? (
            <p>Feedback Not Found</p>
          ) : (
            resumeFeedback.map((item, index) => (
              <div key={index} className="space-y-6">
                {/* Match Score */}
                <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
                  <h2 className="text-xl font-semibold text-gray-700">
                    Match Score
                  </h2>
                  <span className="text-2xl font-bold text-blue-600">
                    {item.matchScore}%
                  </span>
                </div>

                {/* Matched  Keywords */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-3">
                      ✅ Matched Keywords
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.matchedKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Missing keyword */}
                  <div className="bg-red-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-3">
                      ❌ Missing Keywords
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.missingKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Strengths */}
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-3">
                    💪 Strengths
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div className="bg-yellow-50 p-5 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-3">
                    🚀 Improvement Suggestions
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {item.improvementSuggestions.map((suggestion, i) => (
                      <li key={i}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Feedback;
