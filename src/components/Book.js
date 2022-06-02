function Book(props) {
  const { category, title, author } = props;
  return (
    <>
      <div className="Book">
        {category}<br />
        {title}<br />
        {author}
      </div>
      <div className="Actions">
        <button>Remove</button>
      </div>
    </>
  );
}

export default Book;
