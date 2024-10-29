const Book = require("./book.model");
// const mongoose = require("mongoose");

const postABook = async (req, res) => {
  try {
    const newBook = await Book({ ...req.body });
    await newBook.save();
    res
      .status(200)
      .send({ message: "Book posted successfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books" + error);
    res.status(500).send({ message: "Failed to fetch books", error: error });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "book not found!", error: error });
    }
    res.status(200).send(book);
  } catch (error) {
    console.error("Error fetching book" + error);
    res.status(500).send({ message: "Failed to fetch book", error: error });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the provided ID is a valid MongoDB ObjectID
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).send({ message: "Invalid book ID format" });
    // }

    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).send({ message: "Book not found!" });
    }

    res
      .status(200)
      .send({ message: "Book updated successfully", book: updatedBook });
  } catch (error) {
    console.error("Error updating book: " + error);
    res.status(500).send({ message: "Failed to update book", error: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).send({ message: "Book not found!" });
    }

    res
      .status(200)
      .send({ message: "Book deleted successfully", book: deletedBook });
  } catch (error) {
    console.error("Error updating book: " + error);
    res.status(500).send({ message: "Failed to update book", error: error });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
