import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

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
    <section className="booklist">
      <EventExample />
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
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

const EventExample = () => {
  const handleFormInput = (e) => {
    // console.log("target: ", e.target);
    // console.log("name: ", e.target.name);
    // console.log("value: ", e.target.value);
  };
  const handleBtnClick = () => {
    alert("handleBtnClick");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("handleFormSubmit");
    console.log('hey handleFormSubmit');
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <h2> Typical Form</h2>
        <input
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
          onChange={handleFormInput}
        ></input>
        <button onClick={handleBtnClick} type="submit">
          submit
        </button>
      </form>
    </section>
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
