import Book from './Book';
import './BookList.css';
import NavBar from './NavBar';
import Form from './Form';

const BookList = () => {
  const bookList = [
    {
      id: 1,
      book: 'Name of the wind',
      author: 'Patrick Rothfuss',
      category: 'Fantasy',
      progress: 50,
      chapter: '150: Chandrian',
    },
    {
      id: 2,
      book: 'Origin',
      author: 'Dan Brown',
      category: 'Mystrey',
      progress: 75,
      chapter: '250: Mystrey of life',
    },
    {
      id: 3,
      book: 'Born a crime',
      author: 'Trevor Noah',
      category: 'Biography',
      progress: 25,
      chapter: '45: A day in Johansburg',
    },
    {
      id: 4,
      book: 'Song of ice and fire 1',
      author: 'George R.R Martin',
      category: 'Fantasy',
      progress: 5,
      chapter: '65: Eternal war',
    },
  ];

  return (
    <>
      <NavBar />
      <div className="book-list">
        {
            bookList.map((book) => (
              <Book
                id={book.id}
                book={book.book}
                author={book.author}
                category={book.category}
                progress={book.progress}
                chapter={book.chapter}
                key={book.id}
              />
            ))
          }
      </div>
      <Form />
    </>
  );
};

export default BookList;
