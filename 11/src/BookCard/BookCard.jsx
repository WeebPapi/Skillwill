import React from "react";
import "./BookCard.css";

const BookCard = ({ pic, title, desc, characters, callBack }) => {
  return (
    <div className="bookcard">
      <img src={pic} alt="book_image" />
      <h1>{title}</h1>
      <p>{desc}</p>
      <h2>Characters:</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button type="button" onClick={callBack}>
        Log In Console
      </button>
    </div>
  );
};

export default BookCard;
