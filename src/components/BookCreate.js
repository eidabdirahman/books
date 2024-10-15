import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';


function BookCreate() {
    const [title, setTitle] = useState('');

    const {BookCreate} = useBooksContext();

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
