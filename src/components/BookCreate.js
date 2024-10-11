import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        onCreate(title);
        setTitle('')
    };

    return (
        <div className="book-create">
            <form onSubmit={handleFormSubmit}> 
                <h3>Add a Book</h3>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button  className="button">Create</button> 
            </form>
        </div>
    );
}

export default BookCreate;
