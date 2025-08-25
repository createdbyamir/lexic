import { useState } from "react";
import updateData from "../lib/put";
import { TiTick } from "react-icons/ti";
import { MdCancel } from "react-icons/md";

export function EditData({ item, onDone }) {
  const [formData, setFormData] = useState({
    id: item?.id || "",
    title: item?.title || "",
    content: item?.content || "",
    source: item?.source || "",
    language: item?.language || "",
  });

  const handleSave = async (e) => {
    e.preventDefault();
    await updateData(
      formData.id,
      formData.title,
      formData.content,
      formData.source,
      formData.language
    );
    onDone();
  };

  return (
    <form onSubmit={handleSave} className="space-y-3">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
        placeholder="Title"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
      />

      <textarea
        name="content"
        value={formData.content}
        onChange={(e) =>
          setFormData({ ...formData, content: e.target.value })
        }
        rows={3}
        placeholder="Content"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
      />

      <input
        type="text"
        name="source"
        value={formData.source}
        onChange={(e) =>
          setFormData({ ...formData, source: e.target.value })
        }
        placeholder="Source"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
      />

      <input
        type="text"
        name="language"
        value={formData.language}
        onChange={(e) =>
          setFormData({ ...formData, language: e.target.value })
        }
        placeholder="Language"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
      />

      {/* Action buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="submit"
          className="flex items-center gap-1 rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-sky-700 transition"
        >
          <TiTick size={18} />
          Save
        </button>
        <button
          type="button"
          onClick={onDone}
          className="flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
        >
          <MdCancel size={18} />
          Cancel
        </button>
      </div>
    </form>
  );
}
