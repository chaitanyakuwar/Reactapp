import React from "react";

export const About = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 about-heading">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="container" id="about-detail">
        
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-6">
            <img
              src="https://cdn.shopify.com/s/files/1/0258/4307/3103/files/berries-berry-blur-302478_71d4a449-73c5-4265-9f4f-756f9816f891_1000x.jpg?v=1614781732"
              class="img-fluid"
              alt="..."
            ></img>
          </div>
          <div className="col-12 col-sm-6 col-lg-6" id="about-text">
            <h1>About Us.</h1>
            <p>
              Fruitbox & Co. offers the best quality of fruits available in town
              to provide its customers with invigorating and nutritious fruits
              in just a couple of clicks.
            </p>
            <p>
              Anyone who’s looking at stepping up their snacking game by
              switching to wholesome fruits can choose from a wide range of
              fruits locally available to premium exotic fruits online and have
              them delivered to the convenience of their doorstep.
            </p>
            <p>
              Fruitbox & Co.’s varied gifting ranges consist of gift boxes that
              are carefully designed keeping in mind the significance of the
              occasion along with the preferences of the clients taking gifting
              and customisaton to a whole new level.
            </p>
          </div>
        </div>
      </div>

      
    </>
  );
};
