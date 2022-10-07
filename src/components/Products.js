import React from "react";
import { clothesList } from "../Helpers/clothesList";
import Clothe from "../components/Clothe";

export default function Products() {
  return (
    <div className="container" style={{ position: "relative", top: "100px" }}>
      <div>All Products</div>
      <div className="row">
        {clothesList.map((data) => (
          <Clothe item={data} key={data.id} />
        ))}
      </div>
    </div>
  );
}
