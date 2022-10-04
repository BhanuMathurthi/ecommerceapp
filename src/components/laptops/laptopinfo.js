import React from "react";
import LaptopCalc from "./laptopcalc";

export default function LaptopInfo({ data }) {
  const { originalPrice, discountPrice } = data;

  return (
    <div style={{ marginLeft: "70px" }}>
      <h4> &#8377;{discountPrice.toLocaleString()}</h4>
      <span style={{ textDecoration: "line-through" }}>
        {originalPrice.toLocaleString()} &nbsp;
      </span>
      &nbsp;
      <LaptopCalc data={data} />
      {originalPrice >= 15000 && (
        <p className="text-success"> Free delivery </p>
      )}
    </div>
  );
}
