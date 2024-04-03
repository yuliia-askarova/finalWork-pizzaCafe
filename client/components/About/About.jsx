import React from "react";
import pizza1 from "../../assets/pizza1.jpg";
import pizza2 from "../../assets/pizza2.jpg";
import "./About.css";
import Footer from "../Footer/Footer.jsx";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="wrapper">
          <div className="container">
            <h3>"Where Every Slice Tells a Neapolitan Tale!"</h3>
            <p>
              "Welcome to our cozy café, where every slice of pizza is a story
              of flavor, prepared with love and meticulous attention to detail.
              We are a team of passionate food enthusiasts who share a love for
              Italian cuisine and authentic recipes. Our café is not just a
              place to enjoy great food, but an atmosphere where every guest
              feels at home. We strive to create a welcoming space where you can
              relax with friends and family, savoring exquisite flavors and
              pleasant conversations.
            </p>
            <img src={pizza1} alt="" />
            <p>
              We take pride in offering our guests only the freshest and highest
              quality ingredients. Our pizzas are crafted using traditional
              recipes but with a touch of creativity, ensuring each bite is
              unique and memorable. We invite you to immerse yourself in the
              world of aromas and flavors at our café, where every visitor
              becomes a part of our story. Discover the true pleasure of pizza
              in our cozy corner of Italian gastronomy!"
            </p>
            <img src={pizza2} alt="" />
          </div>
        </div>

        <div className="location">
          <div className="location-content">
            <h3>Delivery terms</h3>
            <p>Delivery cost within the city - 10 euro</p>
            <p>Pre-order 2 hours in advance</p>
            <p>Waiting for delivery up to 1 hour</p>
            <p>Waiting time depends on distance and queue of orders</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7177.861288374551!2d14.247006956384652!3d40.85170404768499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b084330eb3757%3A0xb24275c5d728f067!2sAntica%20Pizzeria%20Port%E2%80%99Alba!5e0!3m2!1sru!2sie!4v1711652810778!5m2!1sru!2sie"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
