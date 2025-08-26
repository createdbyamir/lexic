"use client";

export default function Skeleton() {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-10">
        {[1,2,3,4].map((item) => (
          <li
            key={item}
            className="p-6 border rounded-lg bg-white shadow hover:shadow-md transition animate-pulse"
          >
            <div className="h-8 w-full bg-gray-200 rounded mb-4"></div>

            <div className="h-3 w-40 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded mb-2"></div>
            <div className="h-3 w-2/3 bg-gray-200 rounded mb-4"></div>

            <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
