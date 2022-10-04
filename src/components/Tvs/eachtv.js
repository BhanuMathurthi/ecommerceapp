import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Productcontext } from "../../App";

export default function EachTv() {
  const [singletv, setSingleTv] = useState([]);
  const eachtv = useContext(Productcontext);
  const { id } = useParams();

  useEffect(() => {
    getTvsByID();
  }, [id]);

  const getTvsByID = () => {
    const newMobile = eachtv.Tvs.find((product) => product.id == id);
    setSingleTv(newMobile);
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="row">
        <div className="col-md-5">
          <img src={singletv.imgURL} alt={singletv.heading} width="350" />
        </div>
        <div className="col-md">
          <h3>{singletv.heading} </h3>
          <p>{singletv.description} </p>
          {/* {JSON.stringify(singletv.description[0])} */}
        </div>
      </div>
      <Link to="/" className="my-5">
        Back to Home
      </Link>
    </div>
  );
}
