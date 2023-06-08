import React from "react";
import "../../assets/style.css";

const stripe = () => {
  return (
    <div className="container-fluid">
      <div className="row m-5">
        <h2 className="donate-title mt-5 mb-3 fw-bolder fs-2">
          <i class="fa-solid fa-circle-dollar-to-slot mr-5"></i>
          Would you like to Donate $1?
        </h2>
        <div>
          <a
            href="https://buy.stripe.com/test_6oEg1m8Ly2ES81y288"
            className="stripe-donate fs-3 fw-bolder"
          >
            Donate $1
          </a>
        </div>
        <div>
          <a
            href="https://buy.stripe.com/test_fZe5mId1O93g0z66op"
            className="stripe-donate fs-3 fw-bolder"
          >
            Donate $15
          </a>
        </div>
      </div>
    </div>
  );
};

export default stripe;
