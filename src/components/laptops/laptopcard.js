import React from "react";
import { Link } from "react-router-dom";
import LaptopDescription from "./laptopdesc";
import LaptopInfo from "./laptopinfo";

export default function Laptopcard({ data }) {
  const { heading, imgURL } = data;
  return (
    <div className="row d-flex my-5">
      <div className="col-md-3">
        <Link to={`/laptop/${data.id}`}>
          <img src={imgURL} alt={heading} width="200" />
        </Link>
      </div>
      <div className="col-md-5">
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to={`/laptop/${data.id}`}
        >
          <LaptopDescription data={data} />
        </Link>
      </div>
      <div className="col-md-4">
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to={`/laptop/${data.id}`}
        >
          <LaptopInfo data={data} />
        </Link>
      </div>
    </div>
  );
}
