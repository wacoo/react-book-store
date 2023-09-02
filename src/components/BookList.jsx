import Book from './Book';
import './BookList.css';
import NavBar from './NavBar';
import Form from './Form';

const BookList = () => {
  const style = {
    home: { color: '#121212' },
    cat: { color: '#a5a5a7' },
  };

  return (
    <>
      <NavBar active={style} />
      <div className="book-list">
        <Book />
      </div>
      <Form />
    </>
  );
};

export default BookList;
