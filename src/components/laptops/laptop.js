import React, { useContext, useState } from "react";
import { Productcontext } from "../../App";
import Laptopcard from "./laptopcard";

export default function Laptops() {
  const Laptoplist = useContext(Productcontext);
  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      {Laptoplist.laptops.map((data) => {
        return (
          <div key={data.id}>
            <Laptopcard data={data} />
          </div>
        );
      })}
    </div>
  );
}
