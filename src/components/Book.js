import PropTypes from 'prop-types';

function Book(props) {
  const { category, title, author } = props;
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
        <button type="button">Remove</button>
      </div>
    </>
  );
}

export default Book;
Book.propTypes = { category: PropTypes.string.isRequired };
Book.propTypes = { title: PropTypes.string.isRequired };
Book.propTypes = { author: PropTypes.string.isRequired };
