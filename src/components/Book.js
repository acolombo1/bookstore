import './Book.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { apiDelBook } from '../api';

function Book(props) {
  const {
    id, title, author,
  } = props;
  let { category } = props;
  if (!category) { category = '(not specified)'; }
  const dispatch = useDispatch();
  return (
    <div className="BookCard">
      <div className="left">
        <div className="Book">
          <div className="School-of">{category}</div>
          <div className="Title">{title}</div>
          <div className="Suzanne-Collins">{author}</div>
        </div>
        <div className="Actions">
          <span className="Comments">
            Comments
          </span>
          <span className="Separator">&nbsp;</span>
          <span
            className="Remove"
            tabIndex="0"
            role="button"
            onKeyDown={() => {
              dispatch(apiDelBook(id));
            }}
            onClick={() => {
              dispatch(apiDelBook(id));
            }}
          >
            Remove
          </span>
          <span className="Separator">&nbsp;</span>
          <span className="Edit">
            Edit
          </span>
        </div>
      </div>
      <CircularProgressBar percent={Math.round(Math.random() * 100)} size={80} />
    </div>
  );
}

export default Book;
Book.propTypes = { id: PropTypes.number.isRequired };
Book.propTypes = { category: PropTypes.string.isRequired };
Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };
