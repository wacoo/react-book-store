import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../features/categories/categoriesSlice';
import './Categories.css';
import NavBar from './NavBar';

const Categories = () => {
  const dispatch = useDispatch();
  dispatch(checkStatus());
  const categories = useSelector((store) => store.categories);
  const style = {
    home: {color: '#a5a5a7'},
    cat: {color: '#121212'},
  }
  return (
    <>
      <NavBar  active={style}/>
      <h1 className="categories-h1">
        {categories}
      </h1>
    </>
  );
};

export default Categories;
