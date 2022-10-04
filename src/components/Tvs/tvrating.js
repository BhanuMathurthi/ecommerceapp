import React from "react";

export default function TvRating({ data }) {
  return (
    <div className="d-flex my-1">
      <button
        style={{ padding: "0px 5px 0px 5px", fontSize: "13px" }}
        className="btn btn-success d-flex align-items-center justify-content-center"
      >
        {data.rating[0]}
      </button>

      <span
        style={{ fontSize: "13px" }}
        className="text-secondary mx-2 fw-bold"
      >
        <span>{data.rating[1]}&nbsp;</span>
        <span>&amp;</span>
        <span>&nbsp;{data.rating[2]}</span>
      </span>
    </div>
  );
}
