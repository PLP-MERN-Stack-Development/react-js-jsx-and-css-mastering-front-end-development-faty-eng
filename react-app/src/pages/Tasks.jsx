import React, { useState } from "react";
import Layout from "../layout/Layout";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (text.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks =
    filter === "active"
      ? tasks.filter((t) => !t.completed)
      : filter === "completed"
      ? tasks.filter((t) => t.completed)
      : tasks;

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      {/* Input + Add Button */}
      <div className="flex gap-2 mb-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Enter a task..."
        />

        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded ${
            filter === "active" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded ${
            filter === "completed" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 bg-white rounded shadow"
          >
            <span
              onClick={() => toggleCompleted(task.id)}
              className={`cursor-pointer ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
