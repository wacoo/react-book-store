import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../features/categories/categoriesSlice';
import './Categories.css';

const Categories = () => {
  const dispatch = useDispatch();
  dispatch(checkStatus());
  const categories = useSelector((store) => store.categories);
  return <h1 className="categories-h1">{categories}</h1>;
};

export default Categories;
