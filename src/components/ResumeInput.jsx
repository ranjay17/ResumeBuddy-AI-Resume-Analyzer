const ResumeInput = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="file"
        className="block w-full text-sm text-gray-600
        file:mr-4 file:py-2 file:px-4
        file:rounded-md file:border-0
        file:text-sm file:font-medium
        file:bg-blue-600 file:text-white
        cursor-pointer"
      />
    </div>
  );
};

export default ResumeInput;
