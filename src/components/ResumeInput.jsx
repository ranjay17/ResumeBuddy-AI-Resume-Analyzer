import * as pdfjsLib from "pdfjs-dist/build/pdf";
import { useDispatch } from "react-redux";
import { addResumeText } from "../utils/resumeSlice";

pdfjsLib.GlobalWorkerOptions.workerSrc =
  "https://unpkg.com/pdfjs-dist@5.4.624/build/pdf.worker.min.mjs";

const ResumeInput = () => {
  const dispatch = useDispatch()
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file");
      return;
    }

    const reader = new FileReader();

    reader.onload = async function () {
      const typedArray = new Uint8Array(this.result);

      // Load PDF
      const pdf = await pdfjsLib.getDocument(typedArray).promise;

      let text = "";

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const strings = content.items.map((item) => item.str);
        text += strings.join(" ") + "\n";
      }
      dispatch(addResumeText(text))
    };
    reader.readAsArrayBuffer(file);
  };
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
        onChange={handleFile}
      />
    </div>
  );
};

export default ResumeInput;
