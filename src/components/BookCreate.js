import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
    const [title, setTitle] = useState('');

    const {BookCreate} = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(); 
        BookCreate(title);
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
