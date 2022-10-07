import React from "react";
import "../styles/home.css";
import { clothesList } from "../Helpers/clothesList";
import Clothe from "../components/Clothe";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import TestimonialCard from "material-testimonial-card";
import { testimonies } from "../Helpers/testimony";

export default function Home() {
  // const { isLogin, setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="welcome-container container">
          <h2 className="fw-bold fs-1">Welcome to our clothing store</h2>
          <p className="fs-3 text-white">
            Your free online store is just a few clicks away.
          </p>
          <p className="fs-5 text-white fst-italic">
            Comfortable & Funclothing for people who valueour natural resources
          </p>
          <button
            className="btn btn-success text-white my-1  fw-bold"
            onClick={() => {
              navigate("/products");
            }}
          >
            SHOP NOW
          </button>
        </div>
      </div>

      <div className="products-section">
        <h2 className="text-center mb-2">Some of our products</h2>
        <div className="container">
          <div className="row">
            {clothesList.slice(0, 4).map((data) => (
              <Clothe item={data} key={data.id} />
            ))}
          </div>
        </div>
      </div>

      <div className="testimony-section my-5"></div>
      <h2 className="text-center ">Some of ours customers are testifying</h2>
      <div className="container testimony-carousel">
        <Slider {...settings}>
          {testimonies.map((person) => (
            <TestimonialCard
              name={person.name}
              image={person.image}
              content={person.content}
              project={person.project}
            />
          ))}
        </Slider>
      </div>

      <div className="suscribe-section">
        <h2 className="text-center">Suscribe to our newsletter</h2>
        <div className="suscribe-container"></div>
      </div>
    </div>
  );
}
