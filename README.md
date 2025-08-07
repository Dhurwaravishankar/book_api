# 📚 Book API - Node.js + Express (In-Memory CRUD)

This is a simple RESTful API built with **Node.js** and **Express.js** to manage a list of books.  
It supports all **CRUD operations** (Create, Read, Update, Delete), and stores data **in memory** (no database).

---

## 🚀 Features

- 🔍 `GET /books` – View all books
- ➕ `POST /books` – Add a new book
- ✏️ `PUT /books/:id` – Full update of a book
- 🧩 `PATCH /books/:id` – Partial update of a book
- ❌ `DELETE /books/:id` – Remove a book by ID

---

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Postman](https://www.postman.com/) – For testing

---

## 📁 Project Setup

```bash
# 1. Clone the repo or download the files
git clone (https://github.com/Dhurwaravishankar/book_api.git)
cd book-api-task

# 2. Install dependencies
npm install

# 3. Run the server
node server.js
