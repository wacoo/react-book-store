import PropTypes from 'prop-types';
import './Book.css';

const Book = (props) => {
  const { id, book, author } = props;
  return (
    <tr id={id}>
      <td>{book}</td>
      <td className="by">by</td>
      <td>{author}</td>
      <td><button type="button" id={`b${id}`}>Delete</button></td>
    </tr>
  );
};

Book.propTypes = { id: PropTypes.number.isRequired };
Book.propTypes = ({ book: PropTypes.string.isRequired });
Book.propTypes = ({ author: PropTypes.string.isRequired });

export default Book;
