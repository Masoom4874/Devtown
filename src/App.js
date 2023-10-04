import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="App m-1 d-flex flex-column justify-content-center align-items-center mb-3">
      <div className="d-flex main-width justify-content-between mt-3">
        <Card />
      </div>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
