import React from "react";
import TvRating from "./tvrating";

export default function TvDescription({ data }) {
  return (
    <div>
      <h5>{data.heading} </h5>
      <TvRating data={data} />
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[0]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[1]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[2]}
      </li>
    </div>
  );
}
