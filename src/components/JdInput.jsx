const JdInput = () => {
  return (
    <div className="flex flex-col gap-3 my-6">
      <h1 className="text-lg font-semibold text-gray-800">
        Enter Job Description
      </h1>

      <textarea
        className="h-40 p-3 text-sm border border-gray-300 rounded-md"
        placeholder="Paste the job description here..."
      />
    </div>
  );
};

export default JdInput;
