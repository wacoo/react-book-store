import Book from './Book';
import './BookList.css';
import NavBar from './NavBar';

const BookList = () => {
  const bookList = [
    {
      id: 1,
      book: 'Name of the wind',
      author: 'Patrick Rothfuss',
    },
    {
      id: 2,
      book: 'Wise man\'s fear',
      author: 'Patrick Rothfuss',
    },
    {
      id: 3,
      book: 'Storm light archives',
      author: 'Brandon Sanderson',
    },
    {
      id: 4,
      book: 'Song of ice and fire',
      author: 'George R.R Martin',
    },
  ];

  return (
    <>
      <NavBar />
      <div className="book-list-wrapper">
        <h2>List of books</h2>
        <table className="book-list">
          {
            bookList.map((book) => (
              <Book id={book.id} book={book.book} author={book.author} key={book.id} />
            ))
          }
        </table>
      </div>
    </>
  );
};

export default BookList;
