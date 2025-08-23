import { useState } from "react";
import updateData from "../lib/put";

export function EditData({ item, onDone }) {
    const [formData, setFormData] = useState({
    id: item?.id || "",
    title: item?.title || "",
    content: item?.content || "",
    source: item?.source || "",
    language: item?.language || ""
    });


    return (
        <div>
            <form action="">
                <input type="text" name="title" value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} />
                <input type="text" name="content" value={formData.content} onChange={(e) => setFormData({...formData, content: e.target.value})} />
                <input type="text" name="source" value={formData.source} onChange={(e) => setFormData({...formData, source: e.target.value})} />
                <input type="text" name="language" value={formData.language} onChange={(e) => setFormData({...formData, language: e.target.value})} />
            </form>
            <button onClick={ (e) => { e.preventDefault(); updateData(formData.id, formData.title, formData.content, formData.source, formData.language); onDone()  }}>Save</button>
            <button onClick={ (e) => onDone() }>Cancel</button>
            
        </div>
    )
}