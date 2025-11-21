import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800">
      <Navbar />

      <main className="flex-1 px-4 md:px-6 py-6">
        {children}
      </main>

      <Footer />
    </div>
  );
}
