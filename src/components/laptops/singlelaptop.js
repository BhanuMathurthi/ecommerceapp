import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Productcontext } from "../../App";

export default function EachLaptopDetail() {
  const [singleitem, setSingleItem] = useState([]);
  const singlelaptop = useContext(Productcontext);
  const { id } = useParams();

  useEffect(() => {
    getLaptopsByID();
  }, [id]);

  const getLaptopsByID = () => {
    const newLaptop = singlelaptop.laptops.find((laptop) => laptop.id == id);
    setSingleItem(newLaptop);
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="row">
        <div className="col-md-5">
          <img src={singleitem.imgURL} alt={singleitem.heading} width="350" />
        </div>
        <div className="col-md">
          <h3>{singleitem.heading} </h3>
          <p>{singleitem.description} </p>
          {/* {JSON.stringify(singleitem.description[0])} */}
        </div>
      </div>
      <Link to="/" className="btn btn-primary my-3">
        Back to Home
      </Link>
    </div>
  );
}
