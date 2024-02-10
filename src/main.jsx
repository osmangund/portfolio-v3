import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Books from "./components/pages/BookNotes/Books.jsx"
import Nav from "./components/Nav/Nav.jsx"
import { books } from "./components/pages/BookNotes/bookContents.js"
import Book from "./components/pages/BookNotes/Book/Book.jsx"
import { titleToDashed } from "./utils/titleToDashed.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/book-notes"
        element={<Books title="Book Summaries | Osman E." />}
      />
      {books.map((book) => {
        return (
          <Route
            key={book.id}
            path={`/book-notes/${titleToDashed(book.title)}/`}
            element={<Book book={book} />}
          />
        )
      })}
    </Routes>
  </BrowserRouter>
)
