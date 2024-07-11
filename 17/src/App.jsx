import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import FactPage from "./Pages/FactPage";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/facts/:factId" element={<FactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="links">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/facts/1"}>Fact 1</Link>
          </li>
          <li>
            <Link to={"/facts/2"}>Fact 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
