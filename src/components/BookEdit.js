import { useContext, useState } from "react";
import BooksContext from "../context/books";

function BookEdit({ book,onSubmit }) {
    const [title, setTitle] = useState(book.title);

    const {EditBooksById} = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit()
        EditBooksById(book.id, title);

    };

    return (
        <form className="book-edit" onSubmit={handleFormSubmit}>
            <label>Title:</label>
            <input
                className="input"
                value={title}
                onChange={handleChange}
                placeholder="Enter book title"
            />
            <button className="button is-primary" type="submit">
                Save
            </button>
        </form>
    );
}

export default BookEdit;
