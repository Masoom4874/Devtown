import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Pagination from "./components/Pagination";
import mockCarData from "./components/Storage";
import img1 from "./assests/img1.jpg";
import { TbUsers } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { RiSteeringFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";

function App() {
  return (
    <div className="App m-1 d-flex flex-column justify-content-center align-items-center mb-3">
      {/* navbar */}
      <div className="mt-4 main-width p-2 main-bg-color rounded-3 shadow">
        <form className="d-flex w-25" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary border-0" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="d-flex main-width justify-content-between mt-3">
        <Card />
      </div>
      <Pagination />
    </div>
  );
}

export default App;
