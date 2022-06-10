import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { apiDelBook } from '../api';

function Book(props) {
  const {
    id, category, title, author,
  } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="Book">
        {category}
        <br />
        {title}
        <br />
        {author}
      </div>
      <div className="Actions">
        <button
          type="button"
          onClick={() => {
            dispatch(apiDelBook(id));
          }}
        >
          Remove

        </button>
      </div>
    </>
  );
}

export default Book;
Book.propTypes = { id: PropTypes.number.isRequired };
Book.propTypes = { category: PropTypes.string.isRequired };
Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };
