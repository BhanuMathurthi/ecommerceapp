import React from "react";
import MobileRating from "./Mobilerating";

export default function MobileDescription({ data }) {
  return (
    <div>
      <h5>{data.heading} </h5>
      <MobileRating data={data} />
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[0]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[1]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[2]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[3]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[4]}
      </li>
      <li className="desc" style={{ fontSize: "14px" }}>
        {data.description[5]}
      </li>
    </div>
  );
}
