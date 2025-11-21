import React from "react";
import Layout from "../layout/Layout";
import Card from "../components/Card";

export default function Home() {
  return (
    <Layout>
      <Card>
        <h1 className="text-2xl font-bold mb-4">Welcome to My React App</h1>
        <p className="text-gray-700 dark:text-gray-300">
          This is the home page. Use the navigation bar to explore Tasks and API Data pages.
        </p>
      </Card>
    </Layout>
  );
}
