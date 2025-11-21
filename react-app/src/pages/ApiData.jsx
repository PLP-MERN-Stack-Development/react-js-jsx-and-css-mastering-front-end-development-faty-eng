import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";

export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // Fetch API data
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter posts by search text
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">API Data</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search posts..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {/* Error State */}
      {error && <p className="text-red-600">{error}</p>}

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 bg-white rounded shadow dark:bg-gray-800 dark:text-gray-200"
          >
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}
