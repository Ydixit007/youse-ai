import React from "react";
import { TbFileFilled } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";

const UploadedFileCard = ({
  filename,
  status,
  progress,
  size,
  DeleteFile = () => {},
}) => {
  return (
    <div
      className={`w-full bg-[#101010] py-3 border-[1px] border-gray-800 border-solid rounded-md px-4 flex items-center justify-between gap-2 ${
        status === "success"
          ? "bg-[#14472f] border-green-700"
          : "bg-[#411e1b] border-red-700"
      }`}
    >
      <div className="round h-[30px] w-[30px] rounded-full bg-blue-950 flex justify-center items-center">
        <TbFileFilled className="text-blue-800" />
      </div>
      <div className="filename flex-1 ml-4 text-gray-300 text-sm">
        {filename}
      </div>
      <div className="size text-gray-500 text-xs">
        {status === "success" && `${Math.floor(size / 1000)}KB`}
      </div>
      <div className="status">
        {status === "success" ? (
          <>
            <p className="text-xs flex items-center gap-1">
              <span>
                <FaCheckCircle className="text-green-500" />
              </span>{" "}
              Complete Upload
            </p>
          </>
        ) : (
          <>
            <p className="text-xs flex items-center gap-1">
              <span>
                <LuRefreshCcw className="cursor-pointer" />
              </span>{" "}
              Try Again
            </p>
          </>
        )}
      </div>
      <div className="del">
        <FaTrashAlt
          onClick={DeleteFile}
          className="text-gray-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default UploadedFileCard;
