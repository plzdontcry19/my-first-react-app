import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import "./index.css";
import TestForm from "./form";
import TestContextProvider from "./hook/testHook";
import EventExample from "./testContext";

const books = [
  {
    id: 1,
    title: `Saved: A War Reporter's Mission to Make It Home`,
    author: "Benjamin Hall",
    img: "https://m.media-amazon.com/images/I/41+j7f1fVKL._SY344_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: `Cruel Compassion: A dystopian thriller with a hint of romance`,
    author: "A.E. King",
    img: "https://m.media-amazon.com/images/I/512NyP8EpFL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    title: `When We Believed in Mermaids: A Novel`,
    author: "Barbara O'Neal  ",
    img: "https://m.media-amazon.com/images/I/41upRgW3ppL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
];

export const BookList = () => {
  return (
    <TestContextProvider>
      <section className="booklist">
        <EventExample />
        {books.map((book) => {
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </TestContextProvider>
  );
};

export const Book = (props) => {
  const { title, author, img } = props || {};
  return (
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      {/* {children} */}
    </article>
  );
};

// export const Author = () => {
//   const inlineHeadingStyles = {
//     color: "#617d98",
//     fontSize: "0.75rem",
//     marginTop: "0.5rem",
//   };
//   return <h4 style={inlineHeadingStyles}>Benjamin Hall</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
