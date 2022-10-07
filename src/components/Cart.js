import React from "react";
import { useCart } from "react-use-cart";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";

export default function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="fw-bold bg-secondary">
          <th>N°</th>
          <th>Name</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td>{item.price * item.quantity}</td>
            <td>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                className=" btn btn-success btn-sm mx-2"
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
        <tr className="fw-bold bg-info">
          <td colspan="5">Total of all Products</td>
          <td>{cartTotal} $</td>
        </tr>
      </tbody>
    </Table>
  );
}
