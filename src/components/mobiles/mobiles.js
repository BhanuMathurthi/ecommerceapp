import React, { useContext } from "react";
import { Productcontext } from "../../App";
import Mobilecard from "./Mobilecard";

export default function Mobiles() {
  const mobileslist = useContext(Productcontext);
  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      {mobileslist.mobiles.map((data) => {
        return (
          <div key={data.id}> 
            <Mobilecard data={data} />
          </div>
        );
      })}
    </div>
  );
}
