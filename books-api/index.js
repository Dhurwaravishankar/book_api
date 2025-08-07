// index.js
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory array to store books
let books = [];
let currentId = 1; // To assign unique IDs

// GET /books - Return all books
app.get('/books', (req, res) => {
  res.status(200).json(books);
});

// POST /books - Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  
  // Basic validation
  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }

  const newBook = {
    id: currentId++,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT /books/:id - Update a book by ID
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const book = books.find(b => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found.' });
  }

  if (!title || !author) {
    return res.status(400).json({ error: 'Title and author are required.' });
  }

  book.title = title;
  book.author = author;
  
  res.status(200).json(book);
});

// DELETE /books/:id - Remove a book
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id === parseInt(id));
  
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found.' });
  }

  const deletedBook = books.splice(index, 1);
  res.status(200).json({ message: 'Book deleted.', book: deletedBook[0] });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});