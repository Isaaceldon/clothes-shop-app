import React from "react";
import logo from "../logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import { useState, useContext } from "react";
import { useCart } from "react-use-cart";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Cart from "../components/Cart";
import { UserContext } from "../Helpers/UserContext";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const { totalUniqueItems } = useCart();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { isLogin, setIsLogin } = useContext(UserContext);
  const username = localStorage.getItem("loggedUsername");

  const navigate = useNavigate();
  function logout(e) {
    e.preventDefault();
    localStorage.clear();
    setIsLogin(false);
    navigate("/");
  }

  return (
    <nav className="header d-flex justify-content-around align-items-center">
      <div className="logo-container w-25 d-flex justify-content-center align-items-center">
        <img src={logo} alt="Logo" className="logo" />
        <span className="logo-text">Clothes Shop</span>
      </div>
      <ul className="menu d-flex justify-content-around align-items-center">
        <li className="menu-item">
          <NavLink
            exact
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </li>
        <li className="menu-item">
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            All Products
          </NavLink>
        </li>
        <li className="menu-item">
          <button onClick={handleShow} className="cart-button">
            <sup>
              <Badge bg="warning">
                <span className="text-white fw-bold fs-5">
                  {totalUniqueItems}
                </span>
              </Badge>
            </sup>
            <i className="fas fa-shopping-cart shop-cart"></i>{" "}
          </button>
        </li>
        {!isLogin ? (
          <>
            <li className="menu-item">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Login
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/Register"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Register
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="menu-item">
              <button onClick={logout} className="btn btn-danger btn-sm">
                Logout
              </button>
            </li>
            <li className="menu-item">
              <span className="text-warning fw-bold fs-5">
                Welcome {username}
              </span>
            </li>
          </>
        )}
      </ul>

      <>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>My Product cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Cart />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Checkout
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </nav>
  );
}
