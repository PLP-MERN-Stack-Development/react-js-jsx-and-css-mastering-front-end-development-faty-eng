import React from "react";

export default function Button({ children, variant = "primary", onClick }) {
  const baseStyles =
    "px-4 py-2 rounded-md font-semibold transition duration-200";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}
