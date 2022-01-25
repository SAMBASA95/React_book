import React from "react";
import ReactDOM from "react-dom";
// Book list
import { listBooks } from "./BookList";
// import Book
import Book from "./Book";
// CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklists">
      {listBooks.map((bookArr) => {
        return <Book key={bookArr.id} {...bookArr} />;
      })}
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
