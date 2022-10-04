import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
import data from "../db.json";
export default function Navbar() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    const filteredProducts = data.filter((product) => {
      if (product.heading.toLowerCase().includes(keyword)) {
        return product;
      }
    });
    // if (keyword.trim().toLowerCase() == "mobiles" || "mobile" || "phones") {
    //   navigate(`/mobiles`);
    // } else if (keyword.trim().toLowerCase() == "laptops" || "laptop") {
    //   navigate("/laptops");
    // } else if (keyword.trim().toLowerCase() == "tvs" || "televisions" || "tv") {
    //   navigate("/tvs");
    // } else {
    //   navigate("/");
    // }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link
          style={{ fontSize: "18px" }}
          className="navbar-brand fw-bold text-warning"
          to="/"
        >
          Cart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link
                style={{ fontSize: "16px" }}
                className="nav-link navbar-brand"
                to="/mobiles"
              >
                Mobiles
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ fontSize: "16px" }}
                className="nav-link navbar-brand"
                to="/laptops"
              >
                Laptops
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{ fontSize: "16px" }}
                className="nav-link navbar-brand"
                to="/tvs"
              >
                Tv's
              </Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={searchHandler}>
            <input
              className="form-control me-sm-2"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setKeyword(e.target.value.toLowerCase());
              }}
            />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
