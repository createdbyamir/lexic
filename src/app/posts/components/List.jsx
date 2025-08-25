"use client";

import { useState } from "react";
import { EditData } from "./Edit";
import { FaEdit } from "react-icons/fa";

export default function List({ data, limit = null, onDelete }) {
  if (!data || data.length === 0) {
    return (
      <div className="container mx-auto px-4 max-w-5xl mt-12">
        <p className="text-center text-gray-600">No passages yet.</p>
      </div>
    );
  }

  const [editingId, setEditingId] = useState(null);
  const itemsToShow = limit ? data.slice(0, limit) : data;

  return (
    <section className="container mx-auto px-4 max-w-5xl mt-16">
      <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
        Passages
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itemsToShow.map((item) => (
          <li
            key={item.id}
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition"
          >
            {editingId === item.id ? (
              <EditData item={item} onDone={() => setEditingId(null)} />
            ) : (
              <>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2 line-clamp-3">
                  {item.content}
                </p>
                <p className="text-sm text-gray-600">{item.source}</p>
                <p className="text-sm text-gray-600">{item.language}</p>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => setEditingId(item.id)}
                    className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                  >
                    <FaEdit size={16} />
                    Edit
                  </button>
                  {/* <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Delete
                  </button> */}
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
