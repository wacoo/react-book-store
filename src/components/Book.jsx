import PropTypes from 'prop-types';
import './Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = (props) => {
  const {
    id, book, author, category, progress, chapter,
  } = props;
  return (
    <div className="book" id={id}>
      <div className="book-col">
        <p className="category">{category}</p>
        <h3>{book}</h3>
        <p>{author}</p>
        <div className="action-buttons">
          <button type="button">Comments</button>
          <button className="non-first-button" type="button">Remove</button>
          <button className="non-first-button" type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <CircularProgressbar value={progress} text={`${progress}%`} />
        <p>Completed</p>
      </div>
      <div>
        <p className="chapter-title">CONTENT CHAPTER</p>
        <span>
          {'Chapter '}
          { chapter }
        </span>
        <br />
        <br />
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = { id: PropTypes.number.isRequired };
Book.propTypes = ({ book: PropTypes.string.isRequired });
Book.propTypes = ({ author: PropTypes.string.isRequired });
Book.propTypes = { progress: PropTypes.number.isRequired };
Book.propTypes = ({ chapter: PropTypes.string.isRequired });
Book.propTypes = ({ category: PropTypes.string.isRequired });

export default Book;
