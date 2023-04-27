import { loadStripe } from "@stripe/stripe-js";
import logo from "./logo.png";
import oxibusinesshomescreenshot from "./oxibusiness-home-screenshot.JPG";
import "./App.css";
import { React, useEffect, useState, Component } from "react";
import { FiSearch, FiRefreshCw } from "react-icons/fi";
import { Link } from "react-router-dom";
import addproduct1 from "./addproduct1.JPG";
import addproduct2 from "./addproduct2.PNG";

export default function Subscribe() {
  const handleClick = async (e) => {
    const stripe = await loadStripe(
      "pk_live_51N0nbtAtnaVQyWoY3UXK62xWuql8Wa2GVUEvODqs8KyyfbpQaIB1CbEk9GHB7jzeHaWBbGLp9VhslSMGdut7Zwsy00w5cLOsNr"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1N1UGSAtnaVQyWoYvkvtkIKV",
          quantity: 1,
        },
      ],
      mode: "subscription",
      successUrl: "https://oxiforbusiness.com/Home",
      cancelUrl: "https://oxiforbusiness.com/",
    });
  };

  return (
    <div className="App">
      <img src={logo} className="oxiLogo" />
      <div className="subscribePageItems">
        <div className="blueHeader">
          <div className="headline">
            Accurately Calculate Emissions for your Operations and Products!
          </div>
        </div>

        <div className="cta">
          <div className="descriptionText">Tap the subscribe button below to sign up for £9.99/month:</div>
          <button className="addProductButton" onClick={handleClick}>
            Subscribe
          </button>
          <Link to="/Home">Already have an account? Tap here to sign in </Link>
        </div>

        <div className="description1">
          <div className="descriptionTextbox1">
            <div className="descriptionText">
              Determine emissions produced from <strong>business operations</strong>
            </div>

            <div className="descriptionText">
              Calculate the carbon footprints of your <strong>products</strong>
            </div>
          </div>

          <div>
            <img src={addproduct1} className="addproduct1ss" />
          </div>
        </div>

        <div className="lineDivider"></div>

        <div className="description2">
          
            <div className="descriptionTexttitle">
              View a database of product carbon footprints
            </div>

            <div>
              <img src={oxibusinesshomescreenshot} className="homess" />
            </div>


            <div className="descriptionText">
              <strong>Compare</strong> your product carbon footprints with other businesses
            </div>

            <div className="descriptionText">
              Find and compare emissions of the products you purchase from <strong>suppliers</strong>.
            </div>
                    </div>
      </div>
    </div>
  );
}
