import React, { useState } from "react";
import UploadedFileCard from "./UploadedFileCard";

const UploadFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleChange = (event) => {
    if (event.target.files.length > 0) {
      const files = event.target.files[0];
      setSelectedFiles([...selectedFiles, files]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-1">
      <label className="w-full rounded-md shadow-sm py-2 border-gray-800 border-dashed border-2 cursor-pointer text-left flex justify-between items-center">
        <div className="">
          <input
            type="file"
            multiple
            className="sr-only flex justify-start items-start"
            onChange={handleChange}
          />
          <span className="text-left px-4 text-gray-300 text-sm">
            Drop your files here, or{" "}
            <span className="text-blue-600">browse</span>
          </span>
          <p className="text-xs px-4 text-gray-500">
            Files up-to 2MB, with file type pdf, excel, csv and JSON
          </p>
        </div>
        <span className="mr-8 px-8 py-1 rounded-md text-sm text-gray-300 bg-[#1c2939] hover:bg-blue-800 duration-200">
          Browse
        </span>
      </label>
      <div className="uploaded flex flex-col gap-2 mt-2 w-full max-h-[124px] overflow-y-scroll">
        {selectedFiles.length > 0 &&
          selectedFiles.map((file, index) => {
            return <UploadedFileCard key={index} size={file.size} filename={file.name} status={"success"} />;
          })}
      </div>
    </div>
  );
};

export default UploadFiles;
