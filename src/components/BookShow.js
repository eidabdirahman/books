import { useState } from "react";
import useBooksContext from '../hooks/use-books-context';
import BookEdit from './BookEdit';

function BookShow({book}){

    const [showEdit, setShowEdit]=useState(false);

    const {DeleteBookById} = useBooksContext();

    const HandleDeleteClick =()=>{
        DeleteBookById(book.id);
    };
    const HandleEditClick = ()=>{
        setShowEdit(!showEdit);
    };

    const handleFormSubmit = ()=>{
        setShowEdit(false)
        
    };

    let content = <h3>{book.title}</h3>
    if (showEdit) {
        content= <BookEdit onSubmit={handleFormSubmit} book={book} />
    };
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/300/200`}
            alt="books"/>
           <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={HandleEditClick}>
                    edit
                </button>
                <button className="delete" onClick={HandleDeleteClick}>
                    delete
                </button>
            </div>
        </div>
    )
}

export default BookShow;