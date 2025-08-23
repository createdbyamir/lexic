"use client";

import { EditData } from "./Edit";
import { useState } from "react";

export default function List({ data, limit = null }) {
      if (!data || data.length === 0 ) {
            return <p>No passages yet.</p>;
        }

    const [editingId, setEditingId] = useState(null);

        
    const itemsToShow = limit ? data.slice(0, limit) : data;

        
    return (
        <div>
            
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-auto mt-10">
                    {itemsToShow.map((item) => (
                    <li
                        key={item.id}
                        className="p-6 border rounded-lg bg-white shadow hover:shadow-md transition"
                    >
                       {editingId === item.id
                            ? <EditData item={item} onDone={() => setEditingId(null)} /> 
                            :<>
                                <p className="font-semibold text-lg mb-2">{item.title}</p>
                                <p className="text-gray-700 mb-1">
                                <span className="font-medium">Content:</span> {item.content}
                                </p>
                                <p className="text-gray-700 mb-1">
                                <span className="font-medium">Source:</span> {item.source}
                                </p>
                                <p className="text-gray-700">
                                <span className="font-medium">Language:</span> {item.language}
                                </p>
                                <button 
                                    onClick={(e) => setEditingId(item.id)}
                                >Edit</button>
                            </>
                        }
                    </li>
                    ))}
                </ul>
            
        
        </div>
    
    );

}
