import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

export const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

export const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

export const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/41+j7f1fVKL._SY344_BO1,204,203,200_.jpg"
      alt=""
    />
  );
};

export const Title = () => {
  return <h2>Saved: A War Reporter's Mission to Make It Home</h2>;
};

export const Author = () => {
  return <h2>Benjamin Hall</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
