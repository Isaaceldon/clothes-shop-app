import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsClothe() {
  const { params } = useParams();
  return (
    <div>
      <h3>Clothe with id {params}</h3>
    </div>
  );
}
