import { UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

function DragDropZone() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.endsWith(".zip")) {
      alert("Please select a ZIP file.");
      return;
    }

    setSelectedFile(file);
  };

  return (
    <div
      className="
      border-2
      border-dashed
      border-violet-500/40
      rounded-3xl
      p-10
      text-center
      bg-white/5
      backdrop-blur-xl
      hover:border-violet-400
      transition-all
      duration-300
      "
    >
      <UploadCloud
        size={60}
        className="mx-auto text-violet-400"
      />

      <h2 className="text-2xl font-semibold mt-5">
        Drag & Drop Your Project
      </h2>

      <p className="text-slate-400 mt-3">
        Upload a ZIP file or choose one from your computer.
      </p>

      <button
        onClick={handleBrowseClick}
        className="
        mt-8
        px-6
        py-3
        rounded-2xl
        bg-violet-600
        hover:bg-violet-500
        transition
        "
      >
        Browse Files
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept=".zip"
        className="hidden"
        onChange={handleFileChange}
      />

      {selectedFile && (
        <div className="mt-6 text-green-400">
          ✅ Selected File:
          <br />
          <span className="font-semibold">
            {selectedFile.name}
          </span>
        </div>
      )}
    </div>
  );
}

export default DragDropZone;