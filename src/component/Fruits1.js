import React from "react";
import './Fruits.css';

const Fruits1 = () => {
  return (
    <>
      {/* 3-cards in one row */}
      
      <div className="container-fuild " id='fruit-box'>
        <div className="card-group w-100">
          <div className="card g-4 ">
            <img
              src="https://cdn.shopify.com/s/files/1/0258/4307/3103/files/food-fruits-kiwis-53426_750x960_crop_center.jpg?v=1614781726"
              className="card-img-top img-box"
              alt="..."
            />
            <div className="card-body">
              <button className="btn1">Fruits</button>
            </div>
          </div>
          <div className="card ">
            <img
              src="https://cdn.shopify.com/s/files/1/0258/4307/3103/files/Untitled_design_32_750x960_crop_center.png?v=1614828917"
              className="card-img-top img-box"
              alt="..."
            />
            <div class="card-body">
              <button className="btn1">Fruits</button>
            </div>
          </div>
          <div className="card ">
            <img
              src="https://cdn.shopify.com/s/files/1/0258/4307/3103/files/WhatsApp_Image_2019-05-09_at_19.18.22_757bb9c8-6e20-4243-a266-96d571f35fd1_750x960_crop_center.jpeg?v=1614781727"
              className="card-img-top img-box"
              alt="..."
            />
            <div className="card-body">
              <button className="btn1">Fruits</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Fruits1;
