import React from "react";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
