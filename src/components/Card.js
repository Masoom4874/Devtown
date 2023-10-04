import React, { useState, useEffect } from "react";
import img1 from "../assests/img1.jpg";
import { TbUsers } from "react-icons/tb";
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { RiSteeringFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import mockCarData from "./Storage";
import Pagination from "./Pagination";
import SearchBar from "./Navbar";

const Card = ({ carData }) => {
  return (
    <div
      className="card border-0 rounded-4 main-bg-color shadow mb-3"
      style={{ width: "30%" }}
    >
      <div className="m-2">
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner rounded-4">
            <div className="carousel-item active">
              <img src={carData.img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carData.img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={carData.img3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between mb-2">
          <h5 className="card-title">{carData.name}</h5>
          <div
            className="h6 font-weight-bold px-2 py-1 border rounded-3"
            style={{ border: "1px dotted #000" }}
          >
            {carData.year}
          </div>
        </div>
        <div className="d-flex mb-1">
          <div className="w-50">
            <TbUsers className="text-primary me-1" /> {carData.seats} People
          </div>
          <div className="w-50">
            <LuFuel className="text-primary me-1" /> {carData.typeOfFuel}
          </div>
        </div>
        <div className="d-flex">
          <div className="w-50">
            <SlSpeedometer className="text-primary me-1" /> {carData.mileage}
            km/1-litre
          </div>
          <div className="w-50">
            <RiSteeringFill className="text-primary me-1" /> {carData.gearType}
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <h4>
            ${carData.costOfRent} <span className="fs-6">/ month</span>
          </h4>
          <div className="d-flex gap-1">
            <a
              href="#"
              className="btn me-1 rounded-3"
              style={{ backgroundColor: "#E3DFFD" }}
            >
              <AiOutlineHeart />{" "}
            </a>
            <a href="#" className="btn btn-primary rounded-3">
              Rent Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const [carList, setCarList] = React.useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const setting = {
    paginate: (items, page = 1, perPage = 6) => {
      let data = items.slice(perPage * (page - 1), perPage * page);
      setCarList([...data]);
    },
    initialPage: 1,
    data: mockCarData,
  };

  useEffect(() => {
    setting.paginate(mockCarData);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const filteredCars = mockCarData.filter((car) =>
      car.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setting.paginate(filteredCars);
  };

  const handleSearch = (query) => {
    const filteredCars = mockCarData.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    setting.paginate(filteredCars);
  };
  return (
    <>
      <div>
        <div>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          <div className="d-flex  flex-wrap justify-content-between mt-3">
            {carList.map((car, index) => (
              <Card key={index} carData={car} />
            ))}
          </div>
          <Pagination {...setting} />
        </div>
      </div>
    </>
  );
};

export default CardList;
