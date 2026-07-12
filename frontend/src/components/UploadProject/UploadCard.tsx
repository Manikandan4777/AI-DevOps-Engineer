import { useRef } from "react";
import { uploadProject } from "../../services/uploadService";

interface UploadCardProps {
  onUploadSuccess: (data: any) => void;
  onUploadStart: () => void;
  onUploadError: () => void;
}

function UploadCard({
  onUploadSuccess,
  onUploadStart,
  onUploadError,
}: UploadCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      onUploadStart();

      const response = await uploadProject(file);

      onUploadSuccess(response);
    } catch (error) {
      console.error(error);
      onUploadError();
    }
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="
        px-7
        py-4
        rounded-2xl
        bg-violet-600
        hover:bg-violet-500
        transition
        duration-300
        font-semibold
        "
      >
        📂 Upload Project
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept=".zip"
        hidden
        onChange={handleFileChange}
      />
    </>
  );
}

export default UploadCard;