import { useState } from "react";

export default function Test() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });
    const [editing, setEditing] = useState(false)

    

    return (
        <div>
            {editing 
                ? <div className="form">
                    <form action="">
                        <input 
                            id="1"
                            type="text" 
                            placeholder="Name" 
                            name="name"  
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value }) } 
                        />
                        <input 
                            id="2"
                            type="text" 
                            placeholder="E-mail" 
                            name="email"
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value }) } 
                        />
                        <input
                            id="3"
                            type="text" 
                            placeholder="Phone number" 
                            name="phone"
                            onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value }) } 
                        />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(formData);
                                setEditing(false)}
                            }
                        > 
                            Save
                        </button>
                        <button
                            onClick={(e) => setEditing(false)}
                        >
                            Cancel</button>
                    </form>

                </div>
                :   <div>
                        <p>You are viewing!</p>
                        <p>{formData.name}</p>
                        <p>{formData.email}</p>
                        <p>{formData.phone}</p>
                        <button
                            onClick={(e) => setEditing(true)}
                        > 
                            Edit
                        </button>
                    </div>
            }
        </div>
    )
}