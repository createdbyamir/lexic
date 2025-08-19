"use client";

import addData from "../lib/post";
import { useState } from "react";

export default function Form({ onSuccess }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [source, setSource] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !source || !language) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      console.log("Submitting:", { title, content, source, language });

      const result = await addData(title, content, source, language);
      console.log("Success:", result);

      const newItem = {
        id: Date.now(),
        title,
        content,
        source,
        language,
      };
      if (onSuccess) {
        onSuccess(newItem);
      }
    } catch (error) {
        console.error("Error in onSuccess callback:", error);
    } 

    setTitle("");
    setContent("");
    setSource("");
    setLanguage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-6 max-w-md w-full border rounded-xl bg-white shadow-md"
    >
      <div className="flex flex-col">
        <label htmlFor="title" className="font-medium mb-1">
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="title"
          name="title"
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="content" className="font-medium mb-1">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          id="content"
          name="content"
          required
          rows={4}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="source" className="font-medium mb-1">
          Source
        </label>
        <input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          type="text"
          id="source"
          name="source"
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="language" className="font-medium mb-1">
          Language
        </label>
        <input
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          type="text"
          id="language"
          name="language"
          required
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
