import { useState, useEffect } from 'react';
import './Form.css';
import { useDispatch } from 'react-redux';
import { postBook, getBook } from '../features/books/bookSlice';

const Form = () => {
  const [uid, setUid] = useState(5);
  const dispatch = useDispatch();
  const [formStyle, setFormStyle] = useState({
    info: {
      display: 'none',
      color: 'green',
    },
  });

  const [newBook, setNewBook] = useState({
    item_id: 'item4',
    title: 'New book',
    author: 'Unknown Author',
    category: 'Unknown Category',
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

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUid((prev) => prev + 1);
    updateData('item_id', `item${uid}`);
    dispatch(postBook(newBook)).then(() => {
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
    });
  };

  return (
    <>
      <div className="book-list-wrapper">
        <h3>ADD A NEW BOOK</h3>
        <form
          className="frm"
          action="#"
          method="post"
          onSubmit={handleFormSubmit}
        >
          <input
            type="text"
            id="book"
            name="book"
            placeholder="Book"
            onChange={(e) => {
              updateData('title', e.target.value);
            }}
          />
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            onChange={(e) => {
              updateData('author', e.target.value);
            }}
          />
          <select
            name="category"
            id="category"
            onChange={(e) => updateData('category', e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit">ADD BOOK</button>
        </form>
        <div className="info-wrapper">
          <span style={formStyle.info} className="info">
            Success
          </span>
        </div>
      </div>
    </>
  );
};

export default Form;
