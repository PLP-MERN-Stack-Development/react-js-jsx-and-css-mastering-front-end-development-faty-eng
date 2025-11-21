import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 mt-10 dark:bg-gray-900 dark:text-gray-300">
      <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
    </footer>
  );
}
