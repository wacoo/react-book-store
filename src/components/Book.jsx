import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../features/books/bookSlice';

const Book = () => {
  const books = useSelector((store) => store.book);
  const dispatch = useDispatch();

  return books.map((book) => (
    <div className="book" id={book.id} key={book.id}>
      <div className="book-col">
        <p className="category">{book.category}</p>
        <h3>{book.book}</h3>
        <p>{book.author}</p>
        <div className="action-buttons">
          <button type="button" className="first-button">Comments</button>
          <button className="non-first-button middle-button" type="button" onClick={() => dispatch(removeBook(book.id))}>
            Remove
          </button>
          <button className="non-first-button last-button" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <CircularProgressbar value={book.progress} text={`${book.progress}%`} />
        <p>Completed</p>
      </div>
      <div>
        <p className="chapter-title">CONTENT CHAPTER</p>
        <span>
          {'Chapter '}
          {book.chapter}
        </span>
        <br />
        <br />
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  ));
};

export default Book;
