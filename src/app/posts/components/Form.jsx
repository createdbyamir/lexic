"use client";

import { useState } from "react";
import addData from "../lib/post";

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
      const result = await addData(title, content, source, language);

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
    <section className="mt-12">
      <div className="container mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h2 className="font-heading text-2xl font-bold text-gray-900">
            Add a New Passage
          </h2>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id="content"
              rows={4}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Source */}
          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Source
            </label>
            <input
              value={source}
              onChange={(e) => setSource(e.target.value)}
              type="text"
              id="source"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Language */}
          <div>
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Language
            </label>
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              type="text"
              id="language"
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-sky-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-sky-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
