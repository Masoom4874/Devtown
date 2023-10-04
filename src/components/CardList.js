import React from "react";
import mockCarData from "./Storage";
import Card from "./Card";

const CardList = ({ currentPage, cardsPerPage }) => {
  // Calculate the index range of cards to display based on currentPage
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = mockCarData.slice(startIndex, endIndex);

  return (
    <div className="d-flex flex-wrap justify-content-between mt-3">
      {visibleCards.map((car, index) => (
        <Card key={index} carData={car} />
      ))}
    </div>
  );
};

export default CardList;
