import { useDispatch } from 'react-redux';
import Header from './Header';
import { checkStatus } from '../redux/categories/categories';

function Cat() {
  const dispatch = useDispatch();
  return (
    <div className="Cat">
      <Header />
      <button type="button" onClick={() => { dispatch(checkStatus()); }}>Check status</button>
    </div>
  );
}

export default Cat;
