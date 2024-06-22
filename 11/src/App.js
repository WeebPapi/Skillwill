import "./App.css";
import BookCard from "./BookCard/BookCard";
import { orwell, mockingbird, harry } from "./assets/";

function App() {
  const books = [
    {
      pic: orwell,
      title: "1984",
      desc: "A dystopian novel set in a totalitarian society ruled by the omnipresent Big Brother.",
      characters: ["Winston Smith", "Julia", "O'Brien", "Big Brother"],
    },
    {
      pic: mockingbird,
      title: "To Kill a Mockingbird",
      desc: "A story of racial injustice and loss of innocence in the American South.",
      characters: ["Scout Finch", "Atticus Finch", "Jem Finch", "Boo Radley"],
    },
    {
      pic: harry,
      title: "Harry Potter and the Philosopher's Stone",
      desc: "The first adventure of a young wizard at Hogwarts School of Witchcraft and Wizardry.",
      characters: [
        "Harry Potter",
        "Hermione Granger",
        "Ron Weasley",
        "Albus Dumbledore",
      ],
    },
  ];

  return (
    <div className="App">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          desc={book.desc}
          pic={book.pic}
          characters={book.characters}
          callBack={() => {
            console.log(
              `Title: ${book.title} \nDescription: ${book.desc} \nCharacters: ${book.characters}`
            );
          }}
        />
      ))}
    </div>
  );
}

export default App;
