import React from "react";
import { Link } from "react-router-dom";

export const Our_Bolg = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
        <div class="row row-cols-1 row-cols-md-2 g-4 mx-5">
        <div class="col">
          <div class="card">
            <img src="https://img.freepik.com/premium-photo/fruit-composition-yellow-background-sliced-watermelon-other-fruits-grapes-pears-oranges_724548-807.jpg?w=900" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">TOP GIFT BOX PICKS FROM FRUITBOX & CO.</h5>
              <p class="card-text">
              If you've been struggling with gifting what to whom, we have you covered. Read through to find out why apart from being a box full of health, Fruit...
              </p>
              <Link to='/about'><b><i>Read page.</i></b></Link>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="https://img.freepik.com/premium-photo/variety-fruits_1417-2534.jpg?w=900" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">TOP 5 FRUITS TO SAVOUR THIS MONSOON</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <Link to='/home'><b><i>Read page.</i></b></Link>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};
