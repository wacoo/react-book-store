import './Form.css';
import NavBar from './NavBar';

const Form = () => (
  <>
    <NavBar />
    <div className="book-list-wrapper">
      <h2>Add a book</h2>
      <form className="frm" action="#" method="post">
        <input type="text" id="book" name="book" placeholder="Book" />
        <input type="text" id="author" name="author" placeholder="Author" />
        <small className="info">Success!</small>
        <button type="submit">Add</button>
      </form>
    </div>
  </>

);

export default Form;
