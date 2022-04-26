const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;
const db = mongoose.connect("mongodb://localhost/bookAPI");
const Book = require("./models/bookModel");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

bookRouter
  .route("/books")
  .post((req, res) => {
    const book = new Book(req.body);
    book.save();
    return res.status(201).json(book);
  })
  .get((req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        return res.send(err);
      }
      return res.json(books);
    });
  });

  bookRouter.use("/books/:bookId", (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        return res.send(err);
      }
      if (book) {
        req.book = book;
        return next();
      }
      return res.sendStatus(404);
    });
  });
  bookRouter.route("/books/:bookId")
    .delete((req, res) => {
      req.book.remove((err) => {
        if (err) {
          return res.send(err);
      }
        return res.json(Book);
    });
  })
    .patch((req, res) => {
      const { book } = req;
      
      if (req.body._id) {
        delete req.body._id;
      }

      Object.entries(req.bood).forEach((item) => {
        const key = item[0];
        const value = item[1];
        book[key] = value;
    });
    req.book.save((err) => {
      if (err) {
        return res.send(err);
      }
      return res.json(book);
    });
  })
    .put((req, res) => {
      const { book } = req;
      book.title = req.body.title;
      book.author = req.body.author;
      book.genre = req.body.genre;
      book.read = req.body.read;
      book.save();
      return res.json(book);
    })
    .get((req, res) => res.json(book));

app.use("/api", bookRouter);


app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
