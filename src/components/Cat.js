import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import Header from './Header';
import { checkStatus } from '../redux/categories/categories';

function Cat() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories, shallowEqual);

  return (
    <div className="Cat">
      <Header />
      <button type="button" className="CheckButton" onClick={() => { dispatch(checkStatus()); }}>CHECK STATUS</button>
      {categories.map((category) => (
        <p className="UC" key={category.id}>{category.category}</p>
      ))}
    </div>
  );
}

export default Cat;
