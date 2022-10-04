import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Productcontext } from "../../App";

export default function SingleMobile() {
  const [singlemobile, setSingleMobile] = useState([]);
  const eachmobile = useContext(Productcontext);
  const { id } = useParams();

  useEffect(() => {
    getMobilesByID();
  }, [id]);

  const getMobilesByID = () => {
    const newMobile = eachmobile.mobiles.find((product) => product.id == id);
    setSingleMobile(newMobile);
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="row">
        <div className="col-md-5">
          <img
            src={singlemobile.imgURL}
            alt={singlemobile.heading}
            width="350"
          />
        </div>
        <div className="col-md">
          <h3>{singlemobile.heading} </h3>
          <p>{singlemobile.description} </p>
          {/* {JSON.stringify(singlemobile.description[0])} */}
        </div>
      </div>
      <Link to="/" className="my-5">
        Back to Home
      </Link>
    </div>
  );
}
