import React from "react";

const Input = ({ ...props }) => {
  console.log(props);
  return (
    <input
      {...props}
      className="w-full px-4 py-2 rounded-3xl bg-[#2A2A2A] text-white focus:outline-none focus:ring-2 focus:ring-white"
    />
  );
};

export default Input;
