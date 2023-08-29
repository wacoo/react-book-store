import { useState } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/books/bookSlice';

const Form = () => {
  const [uid, setUid] = useState(2);
  const dispatch = useDispatch();
  const [formStyle, setFormStyle] = useState({
    info: {
      display: 'none',
      color: 'green',
    },
  });
  const [newBook, setNewBook] = useState({
    id: 1,
    book: 'New book',
    author: 'Unknown Author',
    category: 'Unknown Category',
    progress: 0,
    chapter: '0: Unknown',
  });

  const categories = [
    'Historical',
    'Fiction',
    'Fantasy',
    'Politics',
    'Biography',
    'Non-fiction',
  ];

  const updateData = (key, value) => {
    const bok = {
      ...newBook,
      [key]: value,
    };
    setNewBook(bok);
  };

  return (
    <>
      <div className="book-list-wrapper">
        <h3>ADD A NEW BOOK</h3>
        <form className="frm" action="#" method="post">
          <div>
            <input
              type="text"
              id="book"
              name="book"
              placeholder="Book"
              onChange={(e) => {
                updateData('book', e.target.value);
              }}
            />
            <select
              name="category"
              id="category"
              onChange={(e) => updateData('category', e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                setUid((prev) => prev + 1);
                updateData('id', uid);
                dispatch(addBook(newBook));
                setFormStyle({
                  info: {
                    display: 'inline',
                    color: 'green',
                  },
                });
                setTimeout(() => {
                  setFormStyle({
                    info: {
                      display: 'none',
                      color: 'green',
                    },
                  });
                }, 5000);
              }}
            >
              Add
            </button>
          </div>
          <div>
            <span style={formStyle.info} className="info">Success!</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
