import React from "react";

export default function Card({ children }) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
}
