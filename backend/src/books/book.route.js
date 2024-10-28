const express = require("express");
const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const router = express.Router();

// frontend => backend server => controller => book schema => database => sent to server => back to frontend => backend

// add a book
router.post("/create-book", verifyAdminToken, postABook);

// get all books
router.get("/", getAllBooks);

// single book
router.get("/:id", getSingleBook);

// update a book
router.put("/edit/:id", verifyAdminToken, updateBook);

// delete a book
router.delete("/delete/:id", verifyAdminToken, deleteBook);

module.exports = router;
