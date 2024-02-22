import React from "react";

const FormInput = ({
  type = "text",
  value = "",
  setValue = () => {},
  placeholder,
}) => {
  if (type === "text") {
    return (
      <input
        placeholder={placeholder}
        type="text"
        className="bg-[#101010] p-2 py-3 rounded-md text-gray-400 text-sm placeholder:text-sm placeholder:text-gray-500 outline-none border-[1px] border-gray-900"
        onChange={setValue}
        value={value}
      />
    );
  }
  if (type === "textArea") {
    return (
      <textarea
        placeholder={placeholder}
        rows="4"
        cols="50"
        type="text"
        className="bg-[#101010] px-2 py-3 rounded-md text-gray-400 text-sm placeholder:text-sm placeholder:text-gray-500 outline-none border-[1px] border-gray-900"
        onChange={setValue}
        value={value}
      />
    );
  }
};

export default FormInput;
