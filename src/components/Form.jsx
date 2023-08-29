import './Form.css';

const Form = () => (
  <>
    <div className="book-list-wrapper">
      <h3>ADD A NEW BOOK</h3>
      <form className="frm" action="#" method="post">
        <div>
          <input type="text" id="book" name="book" placeholder="Book" />
          <select name="category" id="category">
            <option value="none">None</option>
          </select>
          <button type="submit">Add</button>
        </div>
        <div>
          <span className="info">Success!</span>
        </div>
      </form>
    </div>
  </>

);

export default Form;
