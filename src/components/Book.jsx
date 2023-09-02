import './Book.css';
import { useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, removeBook } from '../features/books/bookSlice';

const Book = () => {
  const books = useSelector((store) => store.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook());
  }, [dispatch, books]);

  return books.map((book) => (
    <div className="book" id={book.item_id} key={book.item_id}>
      <div className="book-col">
        <p className="category">{book.category}</p>
        <h3>{book.title}</h3>
        <p className="author">{book.author}</p>
        <div className="action-buttons">
          <button type="button" className="first-button">
            Comments
          </button>
          <button
            className="non-first-button middle-button"
            type="button"
            onClick={() => dispatch(removeBook(book.item_id))}
          >
            Remove
          </button>
          <button className="non-first-button last-button" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div className="circle">
          <CircularProgressbar className="progress-circle" value={40} text="" />
        </div>
        <div className="percent">
          <span className="prs">40%</span>
          <br />
          <span>Completed</span>
        </div>
      </div>
      <div>
        <p className="chapter-title">CURRENT CHAPTER</p>
        <span>
          {'Chapter '}
          {4}
        </span>
        <br />
        <br />
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  ));
};

export default Book;
