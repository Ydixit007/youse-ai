import React from "react";

const FormButton = ({ Build = () => {} }) => {
  return (
    <div
      onClick={Build}
      className="absolute bottom-4 left-4 bg-blue-600 text-white text-sm cursor-pointer px-6 py-2 rounded-md"
    >
      Build and Test
    </div>
  );
};

export default FormButton;
