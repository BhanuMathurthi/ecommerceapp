import React from "react";
import Calculation from "./mobilecalc";

export default function MobileInfo({ data }) {
  const { originalPrice, discountPrice } = data;

  return (
    <div style={{ marginLeft: "70px" }}>
      <h4> &#8377;{discountPrice.toLocaleString()}</h4>
      <span style={{ textDecoration: "line-through" }}>
        {originalPrice.toLocaleString()} &nbsp;
      </span>
      &nbsp;
      <Calculation data={data} />
      {originalPrice >= 15000 && (
        <p className="text-success"> Free delivery </p>
      )}
    </div>
  );
}
