// import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./App.css";
import { About } from "./MyComponents/About";
import { Contact } from "./MyComponents/Contact";
import { Home } from "./MyComponents/Home";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

// export default App;
