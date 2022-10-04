import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Productcontext } from "../../App";
import TvDescription from "./tvdescription";
import TvInfo from "./tvinfo";

export default function Tvs() {
  const TvContext = useContext(Productcontext);
  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      {TvContext.Tvs.map((data) => {
        return (
          <div
            key={data.id}
            className="row d-flex"
            style={{ marginBottom: "70px" }}
          >
            <div className="col-md-4">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/tv/${data.id}`}

              >
                <img src={data.imgURL} alt={data.heading} width="300" />
              </Link>
            </div>
            <div className="col-md-5">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/tv/${data.id}`}
              >
                <TvDescription data={data} />
              </Link>
            </div>
            <div className="col-md-3">
              <Link
                style={{ textDecoration: "none", color: "#000" }}
                to={`/tv/${data.id}`}
              >
                <TvInfo data={data} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
