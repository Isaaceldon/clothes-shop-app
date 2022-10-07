import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/clothe.css";
import { useCart } from "react-use-cart";

export default function Clothe({ item }) {
  const { addItem } = useCart();

  return (
    <div className="card clothe-container col-md-3">
      <img src={item.image} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name.toUpperCase()}</h5>
        <p className="card-text">{item.description.substring(0, 80)}...</p>
        <div className="my-2 d-flex justify-content-space-between w-100 action-container">
          <button
            className="add-button"
            style={{
              backgroundColor: item.completed ? "red" : "green",
              color: item.completed ? "white" : "white",
            }}
            onClick={() => addItem(item)}
          >
            Add to Cart
          </button>
          <span className="d-inline-block clothe-price">{item.price} $</span>
        </div>
        <span className="link-detail ">
          <Link to={`details/${item.id}`} className="view-link">
            View more...
          </Link>
        </span>
      </div>
    </div>
  );
}
