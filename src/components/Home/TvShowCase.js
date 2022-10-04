import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Productcontext } from "../../App";

export default function TvShowCase() {
  const Tvcontext = useContext(Productcontext);
  return (
    <>
      <div className="container my-5">
        <h2 className="mb-5 fw-bold">Best of Tv's</h2>
        <div className="row d-flex align-items-center justify-content-center">
          {Tvcontext.Tvs.map((data) => {
            return (
              <div className="col-md text-center mx-4" key={data.id}>
                <Link
                  to="/tvs"
                  style={{ textDecoration: "none", color: "#000" }}
                >
                  <img src={data.imgURL} width="160" className="mx-4" alt="" />
                  <p className="pt-3">{data.heading}</p>
                  <button
                    style={{ padding: "2px 7px 2px 7px", fontSize: "14px" }}
                    className="btn btn-success "
                  >
                    {data.rating[0]}
                  </button>
                  <p className="py-3 fw-bold">
                    &#8377;{data.originalPrice.toLocaleString()}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
