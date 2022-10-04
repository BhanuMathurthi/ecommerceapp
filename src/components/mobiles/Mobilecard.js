import React from "react";
import { Link } from "react-router-dom";
import MobileDescription from "./mobiledesc";
import MobileInfo from "./Mobileinfo";

export default function Mobilecard({ data }) {
  const { heading, imgURL } = data;
  return (
    <div className="row d-flex my-5">
      <div className="col-md-3">
        <Link to={`/${data.id}`}>
          <img src={imgURL} alt={heading} width="150" />
        </Link>
      </div>
      <div className="col-md-5">
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to={`/${data.id}`}
        >
          <MobileDescription data={data} /> 
        </Link>
      </div>
      <div className="col-md-4">
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to={`/${data.id}`}
        >
          <MobileInfo data={data} />
        </Link>
      </div>
    </div>
  );
}
