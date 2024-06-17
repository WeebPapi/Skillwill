import "./App.css";
import pic from "./assets/44-280x200.jpg";

function App() {
  return (
    <div className="App">
      <h1>Web Developer</h1>
      <div className="projects">
        <h2>My Projects</h2>
        <div className="projects-cards">
          <div className="card">
            <img src={pic} alt="picture" />
            <h3>lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              malesuada lacus nulla, sed rutrum odio luctus nec. Morbi ultrices
              posuere ante a rutrum. Etiam scelerisque urna eu lacinia
              elementum. Donec gravida nec erat ut eleifend. Proin tempus nunc
              euismod volutpat.
            </p>
          </div>
          <div className="card">
            <img src={pic} alt="picture" />
            <h3>lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              malesuada lacus nulla, sed rutrum odio luctus nec. Morbi ultrices
              posuere ante a rutrum. Etiam scelerisque urna eu lacinia
              elementum. Donec gravida nec erat ut eleifend. Proin tempus nunc
              euismod volutpat.
            </p>
          </div>
          <div className="card">
            <img src={pic} alt="picture" />
            <h3>lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              malesuada lacus nulla, sed rutrum odio luctus nec. Morbi ultrices
              posuere ante a rutrum. Etiam scelerisque urna eu lacinia
              elementum. Donec gravida nec erat ut eleifend. Proin tempus nunc
              euismod volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
