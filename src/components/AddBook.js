function AddBook() {
  return (
    <>
      <form className="addBook">
        ADD NEW BOOK
        <br />
        <input type="text" id="title" placeholder="Book Title" name="title" />
        <input type="text" id="author" placeholder="Author" name="author" />
      </form>
    </>
  );
}

export default AddBook;
