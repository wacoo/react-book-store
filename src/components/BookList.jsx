import Book from './Book';
import './BookList.css';
import NavBar from './NavBar';
import Form from './Form';

const BookList = () => (
  <>
    <NavBar />
    <div className="book-list">
      <Book />
    </div>
    <Form />
  </>
);

export default BookList;
