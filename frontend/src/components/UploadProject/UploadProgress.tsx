function UploadProgress() {
  return (
    <div className="mt-6">

      <div className="flex justify-between mb-2">
        <span>Uploading...</span>
        <span>0%</span>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-3">

        <div
          className="bg-violet-500 h-3 rounded-full"
          style={{ width: "0%" }}
        />

      </div>

    </div>
  );
}

export default UploadProgress;